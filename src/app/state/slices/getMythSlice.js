export const getMythSlice = (set) => ({
  myth: [],
  fetchSingleMyth: async (tbid) => {
    const res = await fetch(`https://mnm-backend.onrender.com/myths/${tbid}`);
    set({ myth: await res.json() });
  },
});
