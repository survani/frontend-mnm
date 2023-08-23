"use client";

import { useStore } from "../../state/useStore";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const FeaturedCard = () => {
  const { myths, fetchMyths, featured } = useStore();

  useEffect(() => {
    fetchMyths();
  }, [fetchMyths]);

  const isFeatured = myths.filter((myth) => myth.featured === true);

  console.log("featured", isFeatured);

  return (
    <>
      <div className="p-6 mt-20 bg-[#131a27] rounded-lg">
        <h2 className="mb-4 text-xl font-semibold text-white">
          Featured Content
        </h2>
        {isFeatured.map((myth) => (
          <div className="flex">
            <div className="flex items-center justify-center w-20 h-20 rounded-lg">
              <>
                <div key={myth.id} className="bg-white p-1 w-full">
                  <Image
                    src={myth?.imageUrl}
                    alt="Featured Myth"
                    width={700}
                    height={800}
                    className=""
                  />
                </div>
              </>
            </div>
            <div className="flex flex-col">
              <Link href={`/myths/${myth.id}`}>
                <p className="mt-3 ml-5 text-sm text-white">{myth.title}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default FeaturedCard;
