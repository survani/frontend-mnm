export const createMythSlice = (
  set: (updater: (state: Partial<IAppState>) => Partial<IAppState>) => void

) => ({
  myths: [],
  featured: false,
  sortBy: "choose",
  showSortOptions: false,
  currentPage: 0,
  totalPages: 0,
  listSize: 0,
  fetchMyths: async (currentPage) => {
    //const res = await fetch("https://mnm-backend.onrender.com/myths");
    const res = await fetch(`https://mnm-backend.onrender.com/myths?page=${currentPage}&size=10`);
    const data = await res.json();
    set((prevState) => ({ ...prevState, myths: data}));

    // Assuming the response contains a property named 'totalPages'
  if (typeof data.totalPages !== 'undefined') {
    set((prevState) => ({ ...prevState, myths: data, totalPages: data.totalPages }));
  } else {
    set((prevState) => ({ ...prevState, myths: data }));
  }
  },
  // Add setSortBy and toggleSortOptions functions
  setSortBy: (sortBy: string) => {
    set((prevState) => ({ ...prevState, sortBy }));
  },
  toggleSortOptions: () => {
    set((state: Partial<IAppState>) => ({
      showSortOptions: !state.showSortOptions,
    }));
  },

  // Update the current page
  setCurrentPage: (page) => {
    set((prevState) => ({ ...prevState, currentPage: page }));
  },

  // Update the total number of pages
  setTotalPages: (total) => {
    set((prevState) => ({ ...prevState, totalPages: total }));
  },

});
