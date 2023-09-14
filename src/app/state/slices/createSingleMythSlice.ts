export const createSingleMythSlice = (set: (updater: (state: Partial<ISingleMythProps>) => Partial<ISingleMythProps>) => void) => ({
  myth: [],
  fetchSingleMythById: async (id:number) => {
    try {
      const res = await fetch(`https://mnm-backend.onrender.com/myths/${id}`);
      console.log(res)
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      set((prevState) => ({ ...prevState, myth: data }));
    } catch (error) {
      console.error('An error occurred:', error);
    }
  },
});


