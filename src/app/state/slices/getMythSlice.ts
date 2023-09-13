// We used slug instead of id because we wanted the url to be /myths/slug instead of myths/id 100% (frontend). It will help search engine optimization.
// Please use slug for these purposes and id for other purposes.

import addLikes from '../../helpers/addLikes';

export const getMythSlice = (set: (updater: (state: Partial<ISingleMythProps>) => Partial<ISingleMythProps>) => void) => ({
  myth: [],
  fetchSingleMyth: async (slug) => {
    const res = await fetch(`https://mnm-backend.onrender.com/myths/slug/${slug}`);
    const data = await res.json();
    set((prevState) => ({ ...prevState, myth: data }));
  },
  addLike: async (id: number) => {
    set((prevState) => {
      const updatedMyth = { ...prevState.myth };
      updatedMyth.likes += 1;
      addLikes(updatedMyth, id);

      return { ...prevState, myth: updatedMyth};
    });
  },
});


