'use client';
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { getProfileDetails } from "@/sanity/lib/profile/getProfileDetails";
import ProfileSkeleton from "@/skeleton/ProfileSkeleton";
import { Icon } from '@iconify/react';





const Profile = () => {
  const profileRef = useRef(null);
  // const isInView = useInView(profileRef, { once: true });
  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState(true); // Start with loading as `true`




  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const result = await getProfileDetails();
        setProfileData(result);
      } catch (error) {
        console.error("Error fetching profile details:", error);
      } finally {
        setLoading(false); // Loading is finished
      }
    };

    fetchProfileData();
  }, []);




  if (loading) {
    // Show a loading spinner or message while data is being fetched
    return (
      <ProfileSkeleton />
    );
  }

  return (

    <motion.div
      className="w-full flex flex-col items-center justify-center mt-10 lg:mt-0 "
      ref={profileRef}
      initial={{ opacity: 0, y: 50 }}
      animate={!loading ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-[#252728] w-full flex flex-col items-center justify-evenly gap-[10px] rounded-2xl py-10 px-3">
        {/* Profile Image and Details */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={!loading ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Image src={profileData.mainImage.imageUrl} alt={profileData.mainImage.alt} width={1000} height={1000} className="w-[150px] h-[150px] rounded-xl" />
          <div className="flex items-center relative">
            <h1 className="text-[30px] font-bold mt-3 text-white">{profileData?.Name}</h1>
          </div>
          <p className="text-[16px] font-normal text-gray-300">{profileData?.Stack}</p>

          {profileData.available ?
            <span className="text-[13px] border border-[#219bff]  px-2 rounded-full mt-3 flex items-center gap-[5px] text-[#1f7cc9] font-semibold animate-pulse "><Icon icon={'mdi:lightning-bolt'} /> Available now</span>
            :
            <span className="text-[13px] border border-gray-500  px-2 rounded-full mt-3 flex items-center gap-[5px] text-gray-500 font-semibold "><Icon icon={'mdi:lightning-bolt'} />Not available</span>
          }



          {/* Social Media Links */}
          <motion.div
            className="flex gap-[20px]  mt-6"
            initial={{ scale: 0 }}
            animate={!loading ? { scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <a href={profileData?.Facebook} target="_blank" rel="noopener noreferrer" className="p-3 bg-[#202020] rounded transition duration-300 hover:bg-[#1877F2] hover:text-white">
              <Icon icon="logos:facebook" className="text-[30px]" />
            </a>
            <a href={profileData?.Linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-[#202020] rounded transition duration-300 hover:bg-[#0077B5] hover:text-white">
              <Icon icon="devicon:linkedin" className="text-[30px]" />
            </a>
            <a href={profileData?.Github} target="_blank" rel="noopener noreferrer" className="p-3 bg-[#202020] rounded transition duration-300 hover:bg-[#000] text-white ">
              <Icon icon="simple-icons:github" className="text-[30px] " />
            </a>
          </motion.div>
        </motion.div>

        {/* Contact Info and Resume Button */}
        <motion.div
          className="bg-[#1C1C1D] flex flex-col items-center rounded-2xl py-7 gap-[20px] w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={!loading ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {/* Phone */}
          <motion.div
            className="w-full flex gap-[20px] items-center border-b px-3"
            initial={{ opacity: 0, x: -50 }}
            animate={!loading ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
          >

            <Icon icon="line-md:phone-call-loop" className=" text-[23px] text-white" />
            <div className="flex flex-col">
              <span className="text-[15px] font-bold text-gray-300">Phone</span>
              <span className="font-semibold text-[13px] text-white">{profileData.Phone}</span>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            className="w-full flex gap-[20px] items-center border-b px-3"
            initial={{ opacity: 0, x: -50 }}
            animate={!loading ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1.0, duration: 0.5 }}
          >

            <Icon icon="line-md:email" className=" text-[23px] text-white" />
            <div className="flex flex-col">
              <span className="text-[15px] font-bold text-gray-300">Email</span>
              <span className="font-semibold text-[13px] text-white">{profileData?.Email}</span>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            className="w-full flex gap-[20px] items-center border-b px-3"
            initial={{ opacity: 0, x: -50 }}
            animate={!loading ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.5 }}
          >

            <Icon icon="mynaui:location" className=" text-[23px] text-white" />
            <div className="flex flex-col">
              <span className="text-[15px] font-bold text-gray-300">Location</span>
              <span className="font-semibold text-[13px] text-white">{profileData?.Location}</span>
            </div>
          </motion.div>

          {/* Resume Button */}
          <motion.a
            href={profileData.pdfUrl} // Replace with your actual resume URL
            download="Tamjid_Ahmed_Resume.pdf" // Optional: Specify a default filename for the downloaded file
            target="_blank"
            rel="noopener noreferrer" // Security best practice
            className=" px-3 py-2 flex items-center justify-center gap-[8px] font-semibold text-white bg-gradient-orange-red rounded-2xl text-[15px]"
            initial={{ scale: 0 }}
            animate={!loading ? { scale: 1 } : {}}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            {/* <Download className="w-[15px]" /> */}
            <Icon icon="material-symbols:download" className="text-[20px]" />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Profile;
