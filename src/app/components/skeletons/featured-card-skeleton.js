const FeaturedCardSkeleton = () => {
  return (
    <>
      <div className="flex w-full flex-1 flex-col">
        <div className="mt-2 animate-pulse flex-row items-center justify-center space-x-1 ">
          <div className="flex flex-col space-y-2">
            <div className="h-6 w-11/12 rounded-md bg-gray-500 "></div>
            <div className="h-6 w-10/12 rounded-md bg-gray-500 "></div>
            <div className="h-6 w-9/12 rounded-md bg-gray-500 "></div>
            <div className="h-6 w-9/12 rounded-md bg-gray-500 "></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FeaturedCardSkeleton;
