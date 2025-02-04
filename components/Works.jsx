'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { getProjects } from '@/sanity/lib/projects/getProject'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import WorkSkeleton from '@/skeleton/WorkSkeleton'



const Work = () => {
    const [project, setProject] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const api = async () => {
            setLoading(true)
            try {
                const result = await getProjects()
                setProject(result)

            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        api()
    }, [])


    if (loading) {
        return <WorkSkeleton />
    }





    return (
        <motion.div
            className='px-[30px] py-[20px] bg-[#252728] rounded-xl'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                className="flex items-center gap-[20px] text-[25px] uppercase font-semibold lg:text-[40px]"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h1 className='text-white'>Works</h1>
                <motion.div
                    className="bg-gradient-orange-red w-[73px] h-[2px] lg:w-[252px]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                />
            </motion.div>

          

                {project.length === 0 ? (
                    <div className='flex justify-center mt-20 font-semibold'> 
                        <h1>No works available ☹️</h1>
                    </div>
                ) : (
                  
                      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-7 mt-10'>
                      {project.map((value, index) => (
                            <motion.div
                                className="w-full"
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.2, // Stagger animation for each item
                                }}
                            >
                                <div className=" flex justify-center">
                                    <Link href={`/projects/${value.slug.current}`} className="relative group">
                                        <Image
                                            src={urlFor(value.projectThumbnail).url()}
                                            alt="tamjid"
                                            width={1000}
                                            height={1000}
                                            className="rounded-xl border lg:w-[500px] md:w-[700px] w-[291px] h-[400px] object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute bottom-0 bg-[#FFE3BF] w-full opacity-85 rounded-b-xl lg:h-20 flex flex-col justify-center items-center transition-all duration-300 group-hover:bg-[#FFD5A3] group-hover:translate-y-[-10px]">
                                            <span className="capitalize lg:text-[20px] text-gray-600 group-hover:text-gray-800">
                                                {value.type}
                                            </span>
                                            <span className="capitalize lg:text-[20px] font-bold group-hover:text-gray-900">
                                                {value.title}
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                      </div>

                 
                 
                )

                }


            
        </motion.div>
    )
}

export default Work
