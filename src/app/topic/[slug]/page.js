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
      <section className="px-10 mt-32 text-white">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold uppercase">{topic}</h1>
          <div className="flex items-center gap-2">
            <h2 className="mr-2">Sort By</h2>
            {showSortOptions && (
              <select
                value={sortBy}
                onChange={handleSortChange}
                className="p-1 text-black rounded-md"
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
      <section className="px-10 mt-5">
        {sortedData.length > 0 ? (
          sortedData?.map((item) => (
            <div key={item.id}>
              <ListUi item={item} />
            </div>
          ))
        ) : (
          <div className="flex flex-col text-white">
            <p className="">Loading Myths...</p>
            <FeaturedCardSkeleton />
          </div>
        )}
      </section>
    </>
  );
};

export default Topics;
