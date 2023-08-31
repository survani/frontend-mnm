// We used slug instead of id because we wanted the url to be /myths/slug instead of myths/id 100% (frontend). It will help search engine optimization.
// Please use slug for these purposes and id for other purposes.

import addLikes from '../../helpers/addLikes';

export const getMythSlice = (set) => ({
  myth: [],
  fetchSingleMyth: async (slug) => {
    const res = await fetch(`https://mnm-backend.onrender.com/myths/slug/${slug}`);
    set({ myth: await res.json() });
  },
  addLike: async (id) => {
    set(async (state) => {
      const updatedMyth = { ...state.myth };
      updatedMyth.likes += 1;

      await addLikes(updatedMyth, id);

      return {...state, myth: updatedMyth};
    });
  
  },
});

