'use client'
import { useState, useEffect } from "react"
import { getProjectsBySlug } from "@/sanity/lib/projects/getProject"
import { useParams } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { notFound } from "next/navigation";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"
import PostContent from "@/components/PostContent";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import BlogPostSkeleton from "@/skeleton/BlogPostSkeleton";





const DynamicPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState({})
  const [loading, setLoading] = useState(false)


  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);



  useEffect(() => {
    if (!api) return;


    setCurrent(api.selectedScrollSnap());

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    // Cleanup listener on unmount
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);





  useEffect(() => {


    const api = async () => {
      setLoading(true)
      try {
        const result = await getProjectsBySlug(slug)
        setBlog(result)
        setLoading(false)


     
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }

    api()


  }, [slug])


  if (loading) {
    return <BlogPostSkeleton />
  }


  if (blog === null) {
    notFound()
  }



  return (
    <motion.div
      className="px-9 py-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col lg:flex-row gap-[20px] lg:items-start">
        {/* Carousel Section */}
        <motion.div
          className="lg:w-[30%] bg-white lg:sticky lg:top-0 px-5 py-10 rounded-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Carousel
            setApi={setApi}
            opts={{ loop: true }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
          >
            <CarouselContent>
              {blog.carousel?.map((value, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={urlFor(value).url()}
                    width={500}
                    height={500}
                    alt="tamjid"
                    className="h-80 object-cover object-center rounded-xl"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>

        {/* Main Content Section */}
        <motion.div
          className="lg:w-[70%] bg-white p-9 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Blog Title */}
          <motion.h1
            className="text-[20px] lg:text-[40px] font-bold border-b"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {blog.title}
          </motion.h1>

          {/* Blog Content */}
          <motion.div
            className="mt-10 flex flex-col lg:flex-row gap-[30px] items-start justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Post Content */}
            <div className="lg:w-[80%]">
              <PostContent body={blog.body} />
            </div>

            {/* Links */}
            <div className="lg:w-[20%] flex flex-col flex-wrap lg:flex-row gap-[10px]">
              {blog.urls?.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Link
                    href={value.link}
                    className="px-4 py-1 rounded-full bg-blue-500 text-white font-semibold"
                  >
                    {value.text}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technologies Used */}
          <motion.div
            className={`mt-10 ${blog.technology === undefined && 'hidden'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-[16px] lg:text-[20px] font-poppins font-bold capitalize">
              Technologies used
            </h1>
            <div className="mt-3 flex flex-wrap gap-[10px]">
              {blog.technology?.map((value, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-2 bg-[#E1E8EF] rounded-xl transition-transform duration-500 ease-in-out transform"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {value.technology}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default DynamicPost