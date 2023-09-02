"use client";

import Link from "next/link";
import {
  ChevronRightIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import { useAuth } from "@clerk/nextjs";
import deleteMyth from "../../../helpers/deleteMyth";
import { useState } from "react";
import editMyth from "../../../helpers/editMyth";
import MythUpdateModal from "../../modals/mythUpdateModal";
import Image from "next/image";

const ListUI = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdateSubmit = (data) => {
    editMyth(item.id, data);
    setIsModalOpen(false);
  };

  const { userId } = useAuth();

  return (
    <section
      key={item.id}
      className="py-6 border-b border-gray-300 hover:bg-[#131a27] rounded p-2 text-white"
    >
      <section className="flex items-end flex-col lg:flex-row lg:items-center">
        <Link href={`/myth/${item.slug}`}>
          <div className="lg:w-16 lg:h-16 bg-[#192231] rounded-full flex items-center justify-center mr-3 w-full">
            <Image
              src={item.imageUrl}
              alt="Myth"
              className="object-cover rounded lg:rounded-full lg:h-14 lg:w-14 w-full"
              width={500}
              height={500}
            />
          </div>
        </Link>
        <section className="flex-1">
          <Link href={`/myth/${item.slug}`}>
            <p className="text-xl">{item.title}</p>
          </Link>
          <p className="mt-1 text-sm text-gray-500">{item.description}</p>
        </section>
        <div className="flex items-center gap-3">
          {userId === "user_2UmJgQnSbSujs8U00cumPVB6Hcq" && (
            <>
              <TrashIcon
                className="w-5 text-gray-400 cursor-pointer"
                onClick={() => deleteMyth(item.id)}
              />
              <PencilSquareIcon
                className="w-5 text-gray-400 cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              />
            </>
          )}
          <Link href={`/topic/${item.topic}`}>
            <button
              src={`topic/${item.topic}`}
              className="bg-[#192231] p-2 rounded-xl border-2 border-dashed border-[#6b7280]"
            >
              {item.topic}
            </button>
          </Link>
          <Link href={`/myth/${item.slug}`}>
            <ChevronRightIcon className="w-10 text-gray-400" />
          </Link>
        </div>
      </section>

      {isModalOpen && (
        <MythUpdateModal
          item={item}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleUpdateSubmit}
        />
      )}
    </section>
  );
};
export default ListUI;
