const Loading = () => {
    return ( 
        <div className="flex flex-col items-center justify-center flex-1 gap-4 mt-20">
            <p className="">Loading the Myth...</p>
            <div className="animate-ping rounded-md bg-zinc-100 h-4 w-[200px]"/>
        </div>
    )
 };

export default Loading;