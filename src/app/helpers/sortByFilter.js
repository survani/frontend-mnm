const sortByFilter = (sortBy, sortedData) => {
  if (sortBy === "asc") {
    sortedData.sort((a, b) => a.id - b.id);
  } else if (sortBy === "desc") {
    sortedData.sort((a, b) => b.id - a.id);
  }
};
export default sortByFilter;
