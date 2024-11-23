

const ResumeSkeleton = () => {
  return (
    <div className="px-[30px] py-[20px] flex flex-col gap-[30px] bg-white rounded-xl lg:w-full">
      {/* Section Header */}
      <div className="flex items-center gap-[20px] text-[25px] uppercase font-semibold lg:text-[40px]">
        <div className="w-[100px] lg:w-[200px] h-[30px] lg:h-[40px] bg-gray-300 rounded-lg animate-pulse" />
        <div className="bg-gray-300 w-[73px] h-[2px] lg:w-[252px] animate-pulse"></div>
      </div>

      {/* Education and Experience Sections */}
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-28">
        {/* Education Section */}
        <div className="lg:w-1/2">
          <div className="w-[150px] h-[30px] bg-gray-300 rounded-lg mb-4 animate-pulse" />
          <div>
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="px-4 py-3 bg-gray-200 rounded-xl mb-3 animate-pulse"
                >
                  <div className="w-[50px] h-[15px] bg-gray-300 rounded mb-2" />
                  <div className="w-[100px] h-[20px] bg-gray-300 rounded mb-2" />
                  <div className="w-[150px] h-[15px] bg-gray-300 rounded" />
                </div>
              ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="lg:w-1/2">
          <div className="w-[150px] h-[30px] bg-gray-300 rounded-lg mb-4 animate-pulse" />
          <div>
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="px-4 py-3 bg-gray-200 rounded-xl mb-3 animate-pulse"
                >
                  <div className="w-[50px] h-[15px] bg-gray-300 rounded mb-2" />
                  <div className="w-[100px] h-[20px] bg-gray-300 rounded mb-2" />
                  <div className="w-[150px] h-[15px] bg-gray-300 rounded" />
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Skills and Soft Skills Section */}
      <div className="flex flex-col lg:flex-row bg-[#F8FBFB] gap-7 lg:gap-28">
        {/* Work Skills Section */}
        <div className="lg:w-1/2">
          <div className="w-[150px] h-[30px] bg-gray-300 rounded-lg mb-4 animate-pulse" />
          <div className="mt-3 flex flex-wrap gap-[10px]">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="px-3 py-2 bg-gray-200 rounded-xl w-[80px] h-[30px] animate-pulse"
                />
              ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="lg:w-1/2">
          <div className="w-[150px] h-[30px] bg-gray-300 rounded-lg mb-4 animate-pulse" />
          <div className="mt-3 flex flex-wrap gap-[10px]">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="px-3 py-2 bg-gray-200 rounded-xl w-[80px] h-[30px] animate-pulse"
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSkeleton;
