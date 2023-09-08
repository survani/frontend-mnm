//TODOS:
// 1. Add type for myth parameter.

import myth from "../types/types";

export const findHighestLikes = (myth:any) => {
  const maxMyths = 4;
  const wantedMyths = 3;
  if (myth.length > maxMyths) {
    myth.sort((a:myth, b:myth) => b.likes - a.likes);
    return myth.slice(0, wantedMyths);
  }
};
