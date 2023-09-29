// We used slug instead of id because we wanted the url to be /myths/slug instead of myths/id 100% (frontend). It will help search engine optimization.
// Please use slug for these purposes and id for other purposes.

import addLikes from "../../helpers/addLikes";

export const getMythSlice = (
  set: (
    updater: (state: Partial<ISingleMythProps>) => Partial<ISingleMythProps>
  ) => void
) => ({
  myth: [],
  fetchSingleMyth: async (slug: string) => {
    try {
      const res = await fetch(
        `https://mnm-backend.onrender.com/myths/slug/${slug}`
        // `http://localhost:8080/myths/slug/${slug}`
      );
      console.log(res);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      set((prevState) => ({ ...prevState, myth: data }));
    } catch (error) {
      console.error("An error occurred:", error);
    }
  },
  addLike: async (id: number) => {
    set((prevState) => {
      const updatedMyth = { ...prevState.myth };
      updatedMyth.likes += 1;
      addLikes(updatedMyth, id);

      return { ...prevState, myth: updatedMyth };
    });
  },
});
