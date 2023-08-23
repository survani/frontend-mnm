export const findHighestLikes = (myth) => {
  const maxMyths = 4;
  const wantedMyths = 3;
  if (myth.length > maxMyths) {
    myth.sort((a, b) => b.likes - a.likes);
    return myth.slice(0, wantedMyths);
  }
};
