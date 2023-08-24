"use client";

import ListUi from "../../components/cards/list-ui";
import { useStore } from "../../state/useStore";
import { useEffect } from "react";
import FeaturedCardSkeleton from "../../components/skeletons/featured-card-skeleton";
import { useSearchParams } from "next/navigation";

const Topics = ({ params }) => {
  const searchParams = useSearchParams();
  const { myths, fetchMyths } = useStore();

  useEffect(() => {
    fetchMyths();
  }, [fetchMyths]);

  const topic = params.slug;

  const isTopic = myths.filter(
    (item) => item.topic.toUpperCase() === topic.toUpperCase(),
  );

  return (
    <>
      <section className="mt-32 px-10">
        <h1 className="uppercase text-3xl font-bold">{topic}</h1>
        <hr />
      </section>
      <section className="mt-5 px-10">
        {isTopic.length > 0 ? (
          isTopic.map((item) => (
            <div key={item.id}>
              <ListUi item={item} />
            </div>
          ))
        ) : (
          <div className="flex flex-col">
            <p className="">Loading Myths...</p>
            <FeaturedCardSkeleton />
          </div>
        )}
      </section>
    </>
  );
};

export default Topics;
