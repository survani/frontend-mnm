"use client";

import { useEffect } from "react";
import React from "react";
import {
  AdjustmentsHorizontalIcon,
  ChevronRightIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { useStore } from "../../../state/useStore";
import ListSkeleton from "../../skeletons/list-skeleton";
import sortByFilter from "../../../helpers/sortByFilter";
import { useUser } from "@clerk/nextjs";
import ListUI from "./ListUI";

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

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
    sortByFilter(event.target.value, myths);
  };

  //Only 8 Myths for the home page
  const sortedData = [...myths.slice(0, 8)];

  useEffect(() => {
    fetchMyths();
  }, [fetchMyths]);

  if (!isLoaded) {
    return null;
  }

  return (
    <section className="container mx-auto">
      <section className="px-4 my-12 lg:px-0">
        <h2 className="text-2xl font-extrabold text-darkblue">
          Myth Debunkers Unleashed: Separating Fact from Fiction
        </h2>
        <p>Platform to discover all the myths from around the world</p>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 place-items-center lg:place-items-start">
        {sortedData.length > 0 ? (
          sortedData?.map((item) => (
            <React.Fragment key={item.id}>
              {<ListUI myth={item} />}
            </React.Fragment>
          ))
        ) : (
          <div className="flex flex-col">
            <p className="">Loading Myths... May take up to 3 min. </p>
            <ListSkeleton />
            <ListSkeleton />
            <ListSkeleton />
          </div>
        )}
      </section>
    </section>
  );
};

export default List;
