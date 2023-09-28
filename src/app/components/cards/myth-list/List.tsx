"use client";

import { useEffect, useState } from "react";
import React from "react";
import { useStore } from "../../../state/useStore";
import ListSkeleton from "../../skeletons/list-skeleton";
import ListUI from "./ListUI";
import { ListProps, myth } from "../../../types/types";

const List: React.FC<ListProps> = ({
  title,
  subText,
  startIndex,
  endIndex: initialEndIndex,
  isLoadMore,
}) => {
  const { myths, fetchMyths, setSortBy } = useStore();
  console.log("🚀 ~ file: List.tsx:18 ~ myths:", myths);
  const [endIndex, setEndIndex] = useState(initialEndIndex);

  // Function to update the indices when clicking "Load More"
  const handleLoadMore = () => {
    const newEndIndex = endIndex + 8;
    // Ensure that the newEndIndex doesn't exceed the length of myths array
    if (newEndIndex <= myths.length) {
      setEndIndex(newEndIndex);
    }
  };

  useEffect(() => {
    fetchMyths();
  }, [fetchMyths]);

  return (
    <section className="container mx-auto">
      <section className="px-4 my-12 lg:px-0">
        <h2 className="text-2xl font-extrabold text-darkblue">{title}</h2>
        <p>{subText}</p>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 place-items-center lg:place-items-start">
        {myths.content?.map((item: myth) => (
          <React.Fragment key={item.id}>
            <ListUI myth={item} />
          </React.Fragment>
        ))}
      </section>
      <div className="flex items-center justify-center">
        {isLoadMore && (
          <button
            onClick={() => handleLoadMore()}
            className="w-1/4 p-2 bg-gray-100 border-2 border-dashed"
          >
            See all
          </button>
        )}
      </div>
    </section>
  );
};

export default List;
