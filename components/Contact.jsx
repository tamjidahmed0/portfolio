'use client'
import SendMessage from '@/lib/SendMessage'
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { motion } from "framer-motion";


const ContactContent = () => {
  const { toast } = useToast()


  const handleSubmit  = async(formData) =>{
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    const result = await SendMessage(name, email, message)
    if(result.status !== 400){
      toast({
        title: result.msg,
        description: "I will response soon.",
      })
    }else{
      toast({
        variant: "destructive",
        title: result.msg,
      })
    }


  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    initial: {},
    animate: { transition: { staggerChildren: 0.2 } },
  };


  return (
    <div className="bg-[#252728] px-[30px] py-[20px] rounded-xl">
    <Toaster />
    {/* Animated Heading */}
    <motion.div
      className="flex items-center gap-[20px] text-[25px] uppercase font-semibold lg:text-[40px]"
      {...fadeInUp}
    >
      <h1 className='text-white'>Contact</h1>
      <div className="bg-gradient-orange-red w-[73px] h-[2px] lg:w-[252px]" />
    </motion.div>

    {/* Animated Form Container */}
    <motion.div
      className="flex justify-center items-center lg:px-20 lg:py-10 py-10"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="w-full p-6  rounded-lg shadow-md"
        {...fadeInUp}
      >
        <p className="text-gray-400 text-lg">
          I am always open to discussing{" "}
          <strong className="text-white">
            new projects, opportunities in tech world, and more so
          </strong>{" "}
          <strong className="text-white">partnership</strong>.
        </p>

        {/* Animated Form */}
        <motion.form
          className="mt-6"
          action={handleSubmit}
          {...fadeInUp}
        >
          {/* Name Field */}
          <motion.div className="mb-4" {...fadeInUp}>
            <label
              htmlFor="name"
              className="block text-gray-200 font-medium"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="mt-1 w-full border text-white bg-[#252728] border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </motion.div>

          {/* Email Field */}
          <motion.div className="mb-4" {...fadeInUp}>
            <label
              htmlFor="email"
              className="block text-gray-200 font-medium"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="mt-1 w-full border text-white border-gray-300 bg-[#252728] rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </motion.div>

          {/* Message Field */}
          <motion.div className="mb-4" {...fadeInUp}>
            <label
              htmlFor="message"
              className="block text-gray-200 font-medium"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              className="mt-1 w-full border text-white border-gray-300 bg-[#252728] rounded-lg p-2.5 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="px-6 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  </div>
  )
}

export default ContactContent