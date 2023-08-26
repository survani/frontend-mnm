import addLikes from '../../helpers/addLikes';

export const getMythSlice = (set) => ({
  myth: [],
  fetchSingleMyth: async (id) => {
    const res = await fetch(`https://mnm-backend.onrender.com/myths/${id}`);
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

