"use client";

import Link from "next/link";
import {
  ArrowLongRightIcon,
  ArrowRightIcon,
  AtSymbolIcon,
  ChevronRightIcon,
  FireIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import { useAuth } from "@clerk/nextjs";
import deleteMyth from "../../../helpers/deleteMyth";
import { useState } from "react";
import editMyth from "../../../helpers/editMyth";
import MythUpdateModal from "../../modals/mythUpdateModal";
import Image from "next/image";
import { myth } from "../../../types/types";

const ListUI = ({ myth }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdateSubmit = (data: myth) => {
    editMyth(myth.id, data);
    setIsModalOpen(false);
  };

  const { userId } = useAuth();

  return (
    <>
      <section className="w-[350px] rounded-xl">
        <div className="flex flex-col gap-1 rounded-xl h-[530px]">
          <Link href={`/myth/${myth.slug}`}>
            <Image
              src={myth.imageUrl}
              alt={myth.title}
              width={300}
              height={300}
              className=" h-[250px] w-full object-cover rounded-xl"
            />
          </Link>
          <div className="flex flex-col gap-2 p-2">
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-400">{myth.publishedDate}</p>
              <Link href={`/topic/${myth.topic}`}>
                <p className="p-1.5 text-sm font-bold text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
                  {myth.topic}
                </p>
              </Link>
            </div>
            <Link href={`/myth/${myth.slug}`}>
              <h2 className="text-lg font-bold">{myth.title}</h2>
            </Link>
            <p className="text-md">{myth.description}</p>
            <div className="flex gap-1">
              {userId === "user_2UmJgQnSbSujs8U00cumPVB6Hcq" && (
                <>
                  <TrashIcon
                    className="w-5 text-gray-400 cursor-pointer"
                    onClick={() => deleteMyth(myth.id)}
                  />
                  <PencilSquareIcon
                    className="w-5 text-gray-400 cursor-pointer"
                    onClick={() => setIsModalOpen(true)}
                  />
                </>
              )}
            </div>
          </div>
        </div>
        {isModalOpen && (
          <MythUpdateModal
            myth={myth}
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleUpdateSubmit}
          />
        )}
      </section>
    </>
  );
};
export default ListUI;
