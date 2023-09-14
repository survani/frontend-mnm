import { myth } from "../types/types";

const sortByFilter = (sortBy: string, sortedData: any) => {
  if (sortBy === "asc") {
    sortedData.sort((a: myth, b: myth) => a.id - b.id);
  } else if (sortBy === "desc") {
    sortedData.sort((a: myth, b: myth) => b.id - a.id);
  }
};
export default sortByFilter;
