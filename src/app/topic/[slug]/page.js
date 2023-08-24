"use client";

import ListUi from "../../components/cards/list-ui";
import { useStore } from "../../state/useStore";
import { useEffect } from "react";
import FeaturedCardSkeleton from "../../components/skeletons/featured-card-skeleton";
import { useSearchParams } from "next/navigation";
import sortByFilter from "../../helpers/sortByFilter";
import {
  AdjustmentsHorizontalIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";

const Topics = ({ params }) => {
  const searchParams = useSearchParams();
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
    (item) => item.topic.toUpperCase() === topic.toUpperCase(),
  );

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    sortByFilter(event.target.value, myths);
  };

  const sortedData = [...isTopic];

  return (
    <>
      <section className="mt-32 px-10">
        <div className="flex justify-between items-center mb-4">
          <h1 className="uppercase text-3xl font-bold">{topic}</h1>
          <div className="flex items-center gap-2">
            <h2 className="mr-2">Sort By</h2>
            {showSortOptions && (
              <select
                value={sortBy}
                onChange={handleSortChange}
                className="text-black rounded-md p-1"
              >
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
          </div>
        </div>
        <hr />
      </section>
      <section className="mt-5 px-10">
        {sortedData.length > 0 ? (
          sortedData?.map((item) => (
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
