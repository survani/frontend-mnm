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
}) => {
  const { myths, fetchMyths, setSortBy, currentPage, totalPages, setCurrentPage, setTotalPages } = useStore();

  const correctedPageIndex = 1;

  useEffect(() => {
    fetchMyths(currentPage - correctedPageIndex);
  }, [fetchMyths, currentPage]);

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const getPageNumbers = () => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    const isCurrentPage = currentPage === i;
    const isFirstPage = i === 1;

    // Define a class to apply to the button based on conditions
    const buttonClass = `mx-1 px-3 py-1 rounded-md ${
      isCurrentPage ? "bg-gray-200" : "bg-gray-100"
    } ${isFirstPage ? "firstPageNumber" : ""}`;

    pageNumbers.push(
      <button
        key={i}
        onClick={() => handlePageClick(i)}
        className={buttonClass}
      >
        {i}
      </button>
    );
  }
  return pageNumbers;
};

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
      <div className="flex items-center justify-center mt-4">
        {getPageNumbers()}
      </div>
    </section>
  );
};

export default List;
