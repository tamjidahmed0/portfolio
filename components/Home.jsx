'use client'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getHomeDetails } from "@/sanity/lib/home/getHomeDetails";
import AboutSkeleton from "@/skeleton/AboutSkeleton";
import { Icon } from '@iconify/react';





const Home = () => {
  const [aboutData, setAboutData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutData = async () => {
      setLoading(true)
      try {
        const result = await getHomeDetails();
        setAboutData(result);
      } catch (error) {
        console.error('Error fetching profile details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);



  if (loading) {
    return <AboutSkeleton />;
  }

  return (
    <motion.div className="px-[30px] py-[20px] flex flex-col gap-[30px] bg-[#252728] rounded-xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}

    >
      {/* About Me Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-[20px] text-[25px] uppercase font-semibold lg:text-[40px] text-white">
          <h1>About Me</h1>
          <motion.div
            className="bg-gradient-orange-red w-[73px] h-[2px] lg:w-[252px]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>
        <p className="font-raleway lg:leading-[25px] lg:text-[16px] text-[14px] text-gray-300">
          {aboutData?.about}
        </p>
      </motion.div>

      {/* Services Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-[25px] capitalize font-semibold lg:text-[40px] text-white">
          What I Do!
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
          {aboutData?.skillsdescription?.map((value, index) => (
            <motion.div
              key={index}
              className="px-6 py-7 rounded-xl flex flex-col shadow-xl"
              style={{ backgroundColor: value?.color?.value || "#ffffff" }} // Default to white if undefined
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-[10px] font-poppins font-semibold">
                <div className="text-[25px] lg:text-[35px]">
                  {value?.icons?.name && ( // Check if icon name exists
                    <Icon icon={value.icons.name} color={value?.iconColor?.value || "#000000"} /> // Default color to black if undefined
                  )}
                </div>
                <span className="capitalize text-[15px] lg:text-[24px] text-white">
                  {value?.title || "No Title"} {/* Fallback if title is undefined */}
                </span>
              </div>
              <p className="font-raleway font-normal lg:text-[16px] lg:leading-[20px] mt-1 break-words text-[13px] text-gray-200">
                {value?.description || "No description available."} {/* Fallback if description is undefined */}
              </p>
            </motion.div>
          ))}

        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
