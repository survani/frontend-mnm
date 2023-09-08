import FeaturedCard from "../featured/featured-card";

const RightSidebar = () => {
  return (
    <aside className="w-[400px] text-white bg-[#192231] border-l-2 border-gray-700 lg:block hidden h-[100vh]">
      <div className="p-4">
        <FeaturedCard />
        {/* <div className="p-6 mt-10 bg-[#131a27] rounded-lg text-white">
          <h2 className="mb-4 text-xl font-semibold">Trending</h2>
          <div className="flex">
            <div className="flex items-center justify-center w-24 h-24 bg-gray-600 rounded-lg">
            </div>
            <p className="mt-3 ml-5 text-sm text-white">Coming Soon...</p>
          </div>
        </div> */}
        {/* <div className="p-6 mt-10 bg-[#131a27] rounded-lg text-white">
          <h2 className="mb-4 text-xl font-semibold">Most Shocking</h2>
          <div className="flex">
            <div className="flex items-center justify-center w-24 h-24 bg-gray-600 rounded-lg">
            </div>
            <p className="mt-3 ml-5 text-sm text-white">Coming Soon...</p>
          </div>
        </div> */}
      </div>
    </aside>
  );
};

export default RightSidebar;
