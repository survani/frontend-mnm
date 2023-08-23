export const createMythSlice = (set) => ({
  myths: [],
  fetchMyths: async () => {
    const res = await fetch("https://mnm-backend.onrender.com/myths");
    set({ myths: await res.json() });
  },
});
