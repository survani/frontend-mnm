
export const createMythSlice = (set: (updater: (state: Partial<IAppState>) => Partial<IAppState>) => void) => ({
  myths: [],
  featured: false,
  sortBy: "choose", // Add sortBy state
  showSortOptions: false, // Add showSortOptions state
  fetchMyths: async () => {
    const res = await fetch("https://mnm-backend.onrender.com/myths");
    const data = await res.json();
    set((prevState) => ({ ...prevState, myths: data }));
  },
  // Add setSortBy and toggleSortOptions functions
  setSortBy: (sortBy: string) => {
    set((prevState) => ({ ...prevState, sortBy }));
  },
  toggleSortOptions: () => {
    set((state: Partial<IAppState>) => ({ showSortOptions: !state.showSortOptions }));
  },
});

