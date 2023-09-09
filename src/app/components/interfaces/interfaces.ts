interface IAppState { 
    myths: any[];
    featured: boolean;
    sortBy: string;
    showSortOptions: boolean;
    setMyths: (myths: any[]) => void;
    setFeatured: (featured: boolean) => void;
    setSortBy: (sortBy: string) => void;
    toggleSortOptions: () => void;
    fetchMyths: () => Promise<void>;
 };


interface ISingleMythProps {
    myth: any;
    fetchSingleMyth: () => Promise<void>;
    addLike: () => Promise<void>;
    isLiked: boolean;
   };