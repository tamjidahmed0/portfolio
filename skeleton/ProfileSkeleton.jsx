const ProfileSkeleton = () => {
    return (
      <div className="w-full flex flex-col items-center justify-center lg:sticky">
        <div className="bg-[#252728] w-full flex flex-col items-center justify-evenly gap-[10px] rounded-2xl py-10 px-3 animate-pulse">
          {/* Skeleton for Profile Image and Details */}
          <div className="flex flex-col items-center">
            <div className="w-[200px] h-[200px] rounded-xl bg-gray-500"></div>
            <div className="w-[150px] h-[25px] bg-gray-500 mt-3"></div>
            <div className="w-[150px] h-[25px] bg-gray-500 mt-3"></div>
            <div className="w-[100px] h-[20px] bg-gray-500 mt-2"></div>
            <div className="flex gap-[20px] mt-6">
              <div className="w-[40px] h-[40px] rounded bg-gray-500"></div>
              <div className="w-[40px] h-[40px] rounded bg-gray-500"></div>
              <div className="w-[40px] h-[40px] rounded bg-gray-500"></div>
            </div>
          </div>
  
          {/* Skeleton for Contact Info and Resume Button */}
          <div className="bg-gray-600 flex flex-col items-center rounded-2xl py-7 gap-[20px] w-full">
            {/* Phone */}
            <div className="w-full flex gap-[20px] items-center border-b px-3">
              <div className="w-[20px] h-[20px] bg-gray-500 rounded"></div>
              <div className="flex flex-col w-full">
                <div className="w-[60px] h-[15px] bg-gray-500"></div>
                <div className="w-full h-[13px] bg-gray-200 mt-1"></div>
              </div>
            </div>
            {/* Email */}
            <div className="w-full flex gap-[20px] items-center border-b px-3">
              <div className="w-[20px] h-[20px] bg-gray-500 rounded"></div>
              <div className="flex flex-col w-full">
                <div className="w-[60px] h-[15px] bg-gray-500"></div>
                <div className="w-full h-[13px] bg-gray-200 mt-1"></div>
              </div>
            </div>
            {/* Location */}
            <div className="w-full flex gap-[20px] items-center border-b px-3">
              <div className="w-[20px] h-[20px] bg-gray-500 rounded"></div>
              <div className="flex flex-col w-full">
                <div className="w-[60px] h-[15px] bg-gray-500"></div>
                <div className="w-full h-[13px] bg-gray-200 mt-1"></div>
              </div>
            </div>
            {/* Resume Button */}
            <div className="w-[167px] h-[36px] bg-gray-500 rounded-2xl"></div>
          </div>
        </div>
      </div>
    );
  };


  export default ProfileSkeleton