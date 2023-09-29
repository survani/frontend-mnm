"use client";

import { useEffect } from "react";
import { useStore } from "../../state/useStore";
import Image from "next/image";
import Link from "next/link";

const SingleFeaturedCard = () => {
  const { myth, fetchSingleMyth } = useStore();
  const SLUG = "detox-diets-cleanse-your-body";

  useEffect(() => {
    fetchSingleMyth(SLUG);
  }, [fetchSingleMyth]);

  return (
    <section className="bg-gray-200 h-[400px] flex justify-center items-center">
      <div className="relative h-[380px] w-full flex justify-center items-center p-5 flex-col gap-5 bg-cover bg-center bg-[url('http://localhost:3000/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1495534%2Fpexels-photo-1495534.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D1260%26h%3D750%26dpr%3D1&w=1920&q=75')]">
        <p className="relative z-10 p-2 text-3xl font-bold text-white rounded bg-darkblue">
          {myth.title}
        </p>
        <Link href={`/myth/${myth.id}`}>
          <button className="w-[80px] p-2 border-2 border-dashed bg-darkblue font-medium text-white rounded relative z-10">
            View
          </button>
        </Link>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
    </section>
  );
};

export default SingleFeaturedCard;
