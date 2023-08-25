"use client";

import { useEffect } from "react";
import {
  AdjustmentsHorizontalIcon,
  ChevronRightIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { useStore } from "../../state/useStore";
import ListSkeleton from "../../components/skeletons/list-skeleton";
import ListUi from "../../components/cards/list-ui";
import sortByFilter from "../../helpers/sortByFilter";
import { useUser } from "@clerk/nextjs";

const List = () => {
  const {
    myths,
    fetchMyths,
    sortBy,
    setSortBy,
    showSortOptions,
    toggleSortOptions,
  } = useStore();

  const { isLoaded, isSignedIn, user } = useUser();

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    sortByFilter(event.target.value, myths);
  };

  const sortedData = [...myths];

  useEffect(() => {
    fetchMyths();
  }, [fetchMyths, myths]);

  if (!isLoaded) {
    return null;
  }

  return (
    <div className="flex h-screen">
      <div className="flex-1 overflow-y-auto p-10 mt-[64px]">
        <div className="flex justify-between mb-4">
          {isSignedIn ? (
            <div className="flex gap-1">
              <UsersIcon className="w-5 text-gray-500 " />
              <h2 className="text-xl font-bold uppercase">{`Hi, ${user.firstName}`}</h2>
            </div>
          ) : (
            <div className="flex gap-1">
              <UsersIcon className="w-5 text-gray-500 " />
            <h2 className="text-xl font-bold uppercase">Hi, Guest</h2>
            </div>
          )}
          <div className="flex items-center gap-2">
            <h2 className="">Sort By</h2>
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
        {sortedData.length > 0 ? (
          sortedData?.map((item) => (
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
