'use client';

import Link from "next/link";
import { ChevronRightIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/20/solid";
import { useAuth } from "@clerk/nextjs";
import deleteMyth from "../../helpers/deleteMyth";
import {useState }  from "react";
import editMyth  from "../../helpers/editMyth";
import MythUpdateModal from "../modals/mythUpdateModal";
import Image from "next/image";

const ListUi = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdateSubmit = (data) => {
    editMyth(item.id, data);
    setIsModalOpen(false);
  };

  const { userId } = useAuth();

  return (
    <div key={item.id} className="py-6 border-b border-gray-300 hover:bg-[#131a27] rounded p-2 text-white">
      <div className="flex items-center">
        <div className="w-16 h-16 bg-[#192231] rounded-full flex items-center justify-center mr-3">
          <Image src={item.imageUrl} alt="Myth" className="object-cover rounded-full h-14 w-14" width={500} height={500} />
        </div>
        <div className="flex-1">
          <Link href={`/myths/${item.slug}`}>
            <p className="text-xl">{item.title}</p>
          </Link>
          <p className="mt-1 text-sm text-gray-500">{item.description}</p>
        </div>
        <div className="flex items-center gap-3">
        {userId === "user_2TpNVvbv4ndLxlukyXggZPGRJ99" && <> <TrashIcon className="w-5 text-gray-400 cursor-pointer" onClick={() => deleteMyth(item.id)}/> <PencilSquareIcon className="w-5 text-gray-400 cursor-pointer" onClick={() => setIsModalOpen(true)} /></> }
          <button className="bg-[#192231] p-2 rounded-xl border-2 border-dashed border-[#6b7280]">
            {item.topic}
          </button>
          <Link href={`/myths/${item.id}`}>
            <ChevronRightIcon className="w-10 text-gray-400"/>
          </Link>
        </div>
      </div>

      {isModalOpen && (
        <MythUpdateModal item={item} onClose={() => setIsModalOpen(false)} onSubmit={handleUpdateSubmit} />
      )}
    </div>
  );
};
export default ListUi;
