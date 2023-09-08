"use client";

import ListUI from "../../components/cards/myth-list/ListUI";
import { useStore } from "../../state/useStore";
import React, { useEffect } from "react";
import FeaturedCardSkeleton from "../../components/skeletons/featured-card-skeleton";
import { useSearchParams } from "next/navigation";
import sortByFilter from "../../helpers/sortByFilter";
import {
  AdjustmentsHorizontalIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import myth from "../../types/types";

const Topics = ({ params }) => {
  const {
    myths,
    fetchMyths,
    sortBy,
    setSortBy,
    showSortOptions,
    toggleSortOptions,
  } = useStore();

  useEffect(() => {
    fetchMyths();
  }, [fetchMyths]);

  const topic = params.slug;

  const isTopic = myths.filter(
    (myth: myth) => myth.topic.toUpperCase() === topic.toUpperCase()
  );

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
    sortByFilter(event.target.value, myths);
  };

  const sortedData = [...isTopic];

  return (
    <section className="container mx-auto">
      <section className="px-10 lg:px-0 mt-14">
        <section className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold uppercase">{topic}</h1>
          <section className="flex items-center gap-2">
            <h2 className="mr-2">Sort By</h2>
            {showSortOptions && (
              <select
                value={sortBy}
                onChange={handleSortChange}
                className="p-1 text-black rounded-md"
              >
                <option value="choose" className="text-black" disabled>
                  Choose
                </option>
                <option value="asc" className="text-black">
                  Newest
                </option>
                <option value="desc" className="text-black">
                  Oldest
                </option>
              </select>
            )}
            <button className="w-5" onClick={toggleSortOptions}>
              {!showSortOptions ? (
                <AdjustmentsHorizontalIcon className="w-5" />
              ) : (
                <XMarkIcon className="w-6" />
              )}
            </button>
          </section>
        </section>
        <hr />
      </section>
      <section className="grid grid-cols-1 mt-8 lg:grid-cols-1 xl:grid-cols-4 place-items-center lg:place-items-start">
        {sortedData.length > 0 ? (
          sortedData?.map((item) => (
            <React.Fragment key={item.id}>
              <ListUI myth={item} />
            </React.Fragment>
          ))
        ) : (
          <div className="flex flex-col text-white">
            <p className="">Loading Myths...</p>
            <FeaturedCardSkeleton />
          </div>
        )}
      </section>
    </section>
  );
};

export default Topics;
