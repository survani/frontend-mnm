"use client";

import { HashtagIcon, SparklesIcon } from "@heroicons/react/20/solid";
import { useStore } from "../../state/useStore";
import Image from "next/image";
import { useEffect } from "react";

const Myth = ({ params }) => {
  const { myth, fetchSingleMyth } = useStore();

  useEffect(() => {
    fetchSingleMyth(params.slug);
  }, [fetchSingleMyth, params.slug]);

  return (
    <main className="container p-4 mx-auto mt-20">
      <section className="flex flex-col items-center">
        <section className="bg-[#131a27] w-fit p-2 prounded">
          <Image
            src={myth.imageUrl}
            width={1500}
            height={500}
            alt="Myth"
            className="object-cover rounded h-96"
          />
        </section>
      </section>
      <section className="flex">
        <section className="flex flex-col gap-4 mt-8">
          <div className="flex gap-1">
            <SparklesIcon className="w-5" />
            <h1 className="text-2xl font-bold">{myth.topic}</h1>
          </div>
          <section className="flex gap-5">
            <p>Likes: {myth.likes}</p>
            <p>Shocked Factor: {myth.shockedFactor}</p>
            <p className="text-gray-500">{myth.publishedDate}</p>
          </section>
        </section>
      </section>
      <article className="flex flex-col gap-5 mt-8">
        <section className="flex flex-col justify-between gap-5 lg:flex-row">
          <div className="text-justify text-lg bg-[#131a27] p-5 w-full">
            <p className="mr-2 text-xl font-extrabold uppercase">Myth</p>
            {myth.title}
          </div>

          <div className="text-justify text-lg w-full bg-[#131a27] p-5">
            <p className="mr-2 text-xl font-extrabold uppercase">Fact</p>
            {myth.fact}
          </div>
        </section>
        <section>
          <div className="flex gap-1">
            <HashtagIcon className="w-5" />
            <h3 className="my-5 text-xl font-extrabold">Explanation</h3>
          </div>
          {myth.content}
        </section>
      </article>
    </main>
  );
};
export default Myth;
