export const createMythSlice = (set) => ({
  myths: [],
  featured: false,
  sortBy: "choose", // Add sortBy state
  showSortOptions: false, // Add showSortOptions state
  fetchMyths: async () => {
    const res = await fetch("https://mnm-backend.onrender.com/myths");
    set({ myths: await res.json() });
  },
  // Add setSortBy and toggleSortOptions functions
  setSortBy: (sortBy) => {
    set({ sortBy });
  },
  toggleSortOptions: () => {
    set((state) => ({ showSortOptions: !state.showSortOptions }));
  },
});
