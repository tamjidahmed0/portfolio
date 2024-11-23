const AboutSkeleton = () => {
    return (
      <div className="px-[30px] py-[20px] flex h-full flex-col gap-[30px] bg-white rounded-xl animate-pulse">
        {/* About Me Section Skeleton */}
        <div>
          <div className="flex items-center gap-[20px] text-[25px] uppercase font-semibold lg:text-[40px]">
            <div className="w-[150px] h-[25px] lg:w-[250px] lg:h-[40px] bg-gray-300 rounded"></div>
            
          </div>
          <div className="mt-4 space-y-2">
            <div className="w-full h-[15px] lg:h-[20px] bg-gray-300 rounded"></div>
            <div className="w-[90%] h-[15px] lg:h-[20px] bg-gray-300 rounded"></div>
            <div className="w-[80%] h-[15px] lg:h-[20px] bg-gray-300 rounded"></div>
          </div>
        </div>
  
        {/* Services Section Skeleton */}
        <div>
          <div className="text-[25px] capitalize font-semibold lg:text-[40px]">
            <div className="w-[150px] h-[25px] lg:w-[250px] lg:h-[40px] bg-gray-300 rounded"></div>
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] mt-4">
            {/* Render 4 placeholders */}
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="px-6 py-7 rounded-xl flex flex-col bg-gray-200"
              >
                {/* Title and Icon */}
                <div className="flex items-center gap-[10px] text-[18px] lg:text-[24px] font-poppins font-semibold">
                  <div className="w-[30px] h-[30px] bg-gray-300 rounded"></div>
                  <div className="w-[100px] h-[20px] bg-gray-300 rounded"></div>
                </div>
                {/* Description */}
                <div className="mt-2 space-y-2">
                  <div className="w-full h-[15px] lg:h-[20px] bg-gray-300 rounded"></div>
                  <div className="w-[90%] h-[15px] lg:h-[20px] bg-gray-300 rounded"></div>
                  <div className="w-[80%] h-[15px] lg:h-[20px] bg-gray-300 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutSkeleton;
  