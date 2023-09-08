/* 

Todos:
- [x] Reset likes on all myths after likes functionality is added 100% (backend and frontend).
- [x] Implement the shock factor functionality. (frontend).
- [x] Implement an updated date functionality. (backend and frontend).
*/

"use client";

import { HashtagIcon, SparklesIcon } from "@heroicons/react/20/solid";
import { useStore } from "../../state/useStore";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TwitterShareButton, TwitterIcon } from "next-share";

const Myth = ({ params }) => {
  const { myth, fetchSingleMyth, addLike } = useStore();
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    fetchSingleMyth(params.slug);
  }, [fetchSingleMyth, params.slug]);

  const handleLike = () => {
    if (!isLiked) {
      addLike(myth.id);
      setIsLiked(true);
    }
  };

  return (
    <main className="container p-4 mx-auto mt-10">
      <section className="flex flex-col items-center bg-gray-200 rounded">
        <section className="p-2 rounded w-fit">
          <Image
            src={myth.imageUrl}
            width={1500}
            height={500}
            alt="Myth"
            className="object-cover rounded h-96"
            priority={true}
          />
        </section>
      </section>
      <section className="flex ">
        <section className="flex flex-col gap-4 mt-8 ">
          <div className="flex items-baseline content-center gap-3">
            <p className="flex text-2xl font-bold ">{myth.title}</p>
            <div className="flex items-center gap-1">
              <SparklesIcon className="w-4 text-gray-500" />
              <h1 className="text-lg font-bold text-gray-500">{myth.topic}</h1>
              <div className="hidden lg:flex">
                <button
                  onClick={handleLike}
                  disabled={isLiked}
                  className="w-20 p-0.2 border-2 border-dashed rounded ml-5 hover:bg-gray-100 font-medium"
                >
                  {isLiked ? "Liked" : "Like"}
                </button>
                <TwitterShareButton
                  url={`https://mythsnomore.com/myth/${myth.slug}`}
                  title={`Myth Debunked: ${myth.title}`}
                >
                  <TwitterIcon
                    size={30}
                    round
                    className="w-20 p-1 ml-3 border-2 border-dashed rounded hover:bg-gray-100"
                  />
                </TwitterShareButton>
              </div>
            </div>
          </div>
          <section className="flex gap-5 font-medium text-gray-500">
            <p>Likes: {myth.likes}</p>
            <p>Shocked Factor: {myth.shockedFactor}</p>
            <p className="text-gray-500">{myth.publishedDate}</p>
          </section>
          <section className="flex lg:hidden">
            <button
              onClick={handleLike}
              disabled={isLiked}
              className="w-20 p-0.2 border-2 border-dashed rounded"
            >
              {isLiked ? "Liked" : "Like"}
            </button>
            <TwitterShareButton
              url={`https://mythsnomore.com/myth/${myth.slug}`}
              title={`Myth Debunked: ${myth.title}`}
            >
              <TwitterIcon
                size={30}
                round
                className="w-20 p-1 ml-3 border-2 border-dashed rounded"
              />
            </TwitterShareButton>
          </section>
        </section>
      </section>
      <article className="flex flex-col gap-5 mt-8">
        <section className="flex flex-col justify-between gap-5 lg:flex-row">
          <div className="w-full p-5 text-lg text-justify bg-gray-100 border-2 border-dashed rounded-md">
            <p className="mr-2 text-xl font-extrabold uppercase">Myth</p>
            {myth.description}
          </div>

          <div className="w-full p-5 text-lg text-justify bg-gray-100 border-2 border-dashed rounded-md">
            <p className="mr-2 text-xl font-extrabold uppercase">Fact</p>
            {myth.fact}
          </div>
        </section>
        <section className="w-full p-5 text-lg text-justify bg-gray-100 border-2 border-dashed rounded-md">
          <div className="flex gap-1 ">
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
