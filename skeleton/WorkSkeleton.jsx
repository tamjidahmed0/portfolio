const WorkSkeleton = () => {
    return (
        <div className="px-[30px] py-[20px] bg-[#252728] rounded-xl animate-pulse">
            {/* Skeleton for Header */}
            <div className="flex items-center gap-[20px]">
                <div className="h-[40px] w-[120px] bg-gray-500 rounded animate-pulse" />
                <div className="h-[2px] w-[73px] lg:w-[252px] bg-gray-500 animate-pulse" />
            </div>

            {/* Skeleton for Grid Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
                {Array(6)
                    .fill(0)
                    .map((_, index) => (
                        <div className="w-full" key={index}>
                            <div className=" flex justify-center">
                                <div className="relative group w-full lg:w-[500px] md:w-[700px]  h-[400px] rounded-xl border overflow-hidden animate-pulse bg-gray-400">
                                    {/* Simulate text */}
                                    <div className="absolute bottom-0 bg-gray-500 w-full opacity-85 rounded-b-xl lg:h-20 flex flex-col justify-center items-center">
                                        <div className="w-1/3 h-4 bg-gray-400 rounded mb-1" />
                                        <div className="w-1/2 h-4 bg-gray-400 rounded" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default WorkSkeleton
