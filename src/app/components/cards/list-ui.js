import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const ListUi = ({ item }) => {
  return (
    <div key={item.id} className="py-6 border-b border-gray-300">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-[#192231] rounded-full flex items-center justify-center mr-3">
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex-1">
          <Link href={`/myths/${item.id}`}>
            <p className="text-xl">{item.title}</p>
          </Link>
          <p className="mt-1 text-sm text-gray-500">{item.description}</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-[#192231] p-2 rounded-xl border-2 border-dashed">
            {item.topic}
          </button>
          <Link href={`/myths/${item.id}`} className="w-10">
            <ChevronRightIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ListUi;
