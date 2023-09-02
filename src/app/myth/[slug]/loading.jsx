const Loading = () => {
    return ( 
        <div className="flex flex-col gap-4 flex-1 justify-center items-center mt-20">
            <p className="text-white">Loading the Myth...</p>
            <div className="flex flex-col gap-2 justify-center items-center">
                <div className="animate-ping rounded-md h-6 w-[140px] bg-zinc-100 border-b-2 border-gray-900"/>
                <div className="h-[1px] w-32 bg-gray-900"/>
            </div>
            <div className="animate-ping rounded-md bg-zinc-100 h-4 w-[200px]"/>
        </div>
    )
 };

export default Loading;