"use client";

import { useStore } from "../../state/useStore";
import Image from "next/image";
import { useEffect } from "react";

const Myth = ({ params }) => {
  const { myth, fetchSingleMyth } = useStore();

  useEffect(() => {
    fetchSingleMyth(params.slug);
  }, []);

  return (
    <main className="container mx-auto mt-20 p-4">
      <section className="flex flex-col items-center">
        <section className="bg-[#131a27] w-fit p-2 prounded">
          <Image
            src={myth.imageUrl}
            width={1500}
            height={500}
            alt="Myth"
            className="rounded h-96 object-cover"
          />
        </section>
      </section>
      <section className="flex">
        <section className="flex flex-col gap-4 mt-8">
          <h1 className="text-4xl font-bold">{myth.topic}</h1>
          {/*<h3>{myth.description}</h3>*/}
          <section className="flex gap-5">
            <p>Likes: {myth.likes}</p>
            <p>Shocked Factor: {myth.shockedFactor}</p>
            <p className="text-gray-500">{myth.publishedDate}</p>
          </section>
        </section>
      </section>
      <article className="flex flex-col gap-5 mt-8">
        <section className="flex justify-between gap-5">
          <div className="text-justify text-lg w-fit bg-[#131a27] p-5">
            <p className="font-extrabold text-xl uppercase mr-2">Myth</p>
            {myth.title}
          </div>

          <div className="text-justify text-lg w-fit bg-[#131a27] p-5">
            <p className="font-extrabold text-xl uppercase mr-2">Fact</p>
            {myth.fact}
          </div>
        </section>
        <section>
          <h3 className="my-5">Explanation</h3>
          {myth.content}
        </section>
      </article>
    </main>
  );
};
export default Myth;
