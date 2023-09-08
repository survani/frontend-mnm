"use client";

import { useStore } from "../../state/useStore";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import FeaturedCardSkeleton from "../skeletons/featured-card-skeleton";
import myth from "../../types/types";

const FeaturedCard = () => {
  const { myths, fetchMyths } = useStore();

  useEffect(() => {
    fetchMyths();
  }, [fetchMyths]);

  const isFeatured = myths.filter((myth: myth) => myth.featured === true);

  return (
    <>
      <div className="p-6 mt-20 bg-[#131a27] rounded-lg">
        <h2 className="mb-4 text-xl font-semibold text-white">Featured Myth</h2>
        {isFeatured.length > 0 ? (
          isFeatured.map((myth) => (
            <div className="flex" key={myth.id}>
              <div className="flex items-center justify-center w-20 h-20 rounded-lg">
                <div className="w-full p-1 bg-white">
                  <Image
                    src={myth.imageUrl}
                    alt="Featured Myth"
                    width={700}
                    height={800}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <Link href={`/myths/${myth.id}`}>
                  <p className="mt-3 ml-5 text-sm text-white">{myth.title}</p>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col">
            <p className="">Loading Myths...</p>
            <FeaturedCardSkeleton />
          </div>
        )}
      </div>
    </>
  );
};
export default FeaturedCard;
