const FeaturedCardSkeleton = () => {
  return (
    <>
      <div className="flex flex-col flex-1 w-full">
        <div className="flex-row items-center justify-center mt-2 space-x-1 animate-pulse ">
          <div className="flex flex-col space-y-2">
            <div className="w-11/12 h-6 bg-gray-500 rounded-md "></div>
            <div className="w-10/12 h-6 bg-gray-500 rounded-md "></div>
            <div className="w-9/12 h-6 bg-gray-500 rounded-md "></div>
            <div className="w-9/12 h-6 bg-gray-500 rounded-md "></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FeaturedCardSkeleton;
