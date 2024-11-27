'use client'
import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getResumeDetails } from "@/sanity/lib/resume/getResumeDetails";
import ResumeSkeleton from "@/skeleton/ResumeSkeleton";
import { Icon } from "@iconify/react";



const Resume = () => {

  const [resumeDetails, setResumeDetails] = useState({})
  const [loading, setLoading] = useState(true)


  // References for In-View Animations
  // const educationRef = useRef(null);
  // const experienceRef = useRef(null);

  // const isEducationInView = useInView(educationRef, { once: true });
  // const isExperienceInView = useInView(experienceRef, { once: true });

  useEffect(() => {

    const fetchResume = async () => {
      setLoading(true)
      try {
        const result = await getResumeDetails()
        setResumeDetails(result)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchResume()



  }, [])


  if (loading) {
    return <ResumeSkeleton />
  }





  return (
    <div className="px-[30px] py-[20px] flex flex-col gap-[30px] bg-white rounded-xl lg:w-full">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-[20px] text-[25px] uppercase font-semibold lg:text-[40px]">
        <h1>Resume</h1>
        <motion.div
          className="bg-gradient-orange-red w-[73px] h-[2px] lg:w-[252px]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>

      {/* Education and Experience Sections */}
      <div className="flex flex-col lg:flex-row gap-5  lg:gap-28">


        {/* Experience Section */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="flex items-center text-[30px] font-semibold mb-4">
            <Icon icon="pajamas:work" className="text-orange-500 me-2 text-[30px]" />
            Experience
          </h2>
          <div>
            {resumeDetails.experience?.map((value, index) => (
              <motion.div
                className="px-4 py-3 rounded-xl mb-3"
                key={index}
                style={{ backgroundColor: value.color?.value }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <span className="text-gray-500">{value.year}</span>
                <div className="font-semibold text-[20px] mb-2">
                  <span>{value.field}</span>
                </div>
                <p>{value.company}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>






        {/* Education Section */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="flex items-center text-[30px] font-semibold mb-4">
            {/* <GraduationCap size={30} className="text-orange-500 me-2" /> */}
            <Icon icon="simple-line-icons:graduation" className="text-orange-500 me-2 text-[30px]" />
            Education
          </h2>
          <div>
            {resumeDetails.education?.map((value, index) => (
              <motion.div
                className="px-4 py-3 rounded-xl mb-3"
                key={index}
                style={{ backgroundColor: value.color?.value }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <span className="text-gray-500">{value.year}</span>
                <div className="font-semibold text-[20px] mb-2">
                  <span>{value.subject}</span>
                </div>
                <p>{value.institute}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>



      {/* skills and soft skills section */}

      <motion.div
        className="flex flex-col lg:flex-row bg-[#F8FBFB] gap-7 lg:gap-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Work Skills Section */}
        <motion.div
          className="lg:w-1/2"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-[20px] lg:text-[27px] font-poppins capitalize">Work Skills</h1>
          <div className="mt-3 flex flex-wrap gap-[10px]">
            {resumeDetails.skills?.map((value, index) => (
              <motion.span
                key={index}
                className="px-3 py-2 bg-[#E1E8EF] rounded-xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {value.skills}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div
          className="lg:w-1/2"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-[20px] lg:text-[27px] font-poppins capitalize">Soft Skills</h1>
          <div className="mt-3 flex flex-wrap gap-[10px]">
            {resumeDetails.soft_skills?.map((value, index) => (
              <motion.span
                key={index}
                className="px-3 py-2 bg-[#E1E8EF] rounded-xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {value.soft_skills}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>



    </div>
  );
};

export default Resume;
