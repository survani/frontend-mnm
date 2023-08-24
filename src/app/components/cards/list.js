"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  AdjustmentsHorizontalIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { useStore } from "../../state/useStore";
import ListSkeleton from "../../components/skeletons/list-skeleton";
import ListUi from "../../components/cards/list-ui";

const List = () => {
  const [sortBy, setSortBy] = useState("default");
  const [showSortOptions, setShowSortOptions] = useState(false);
  const { myths, fetchMyths } = useStore();

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const toggleSortOptions = () => {
    setShowSortOptions(!showSortOptions);
  };

  const sortedData = [...myths];
  if (sortBy === "asc") {
    sortedData.sort((a, b) => a.id - b.id);
  } else if (sortBy === "desc") {
    sortedData.sort((a, b) => b.id - a.id);
  }

  useEffect(() => {
    fetchMyths();
  }, [fetchMyths]);

  return (
    <div className="flex h-screen">
      <div className="flex-1 overflow-y-auto p-10 mt-[64px]">
        <div className="flex justify-between mb-4 text-xl">
          <h2>All Myths</h2>
          <div className="flex items-center gap-2">
            <h2>Sort By</h2>
            {showSortOptions && (
              <select
                value={sortBy}
                onChange={handleSortChange}
                className="text-black rounded-md p-1"
              >
                <option value="default" className="text-black">
                  Default
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
          </div>
        </div>
        {sortedData.length > 0 ? (
          sortedData.map((item) => (
            <div key={item.id}>{<ListUi item={item} />}</div>
          ))
        ) : (
          <div className="flex flex-col">
            <p className="">Loading Myths... May take up to 3 min. </p>
            <ListSkeleton />
            <ListSkeleton />
            <ListSkeleton />
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
