'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import './globals.css'



const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen px-6 bg-gradient-to-br from-blue-100 to-purple-200">
            {/* Animated "404" Heading */}
            <motion.h1
                className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
                404
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                className="mt-4 text-xl font-medium text-gray-700 lg:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                Oops! The page you&apos;re looking for doesn&apos;t exist.
            </motion.p>

            {/* Decorative Animation */}
            <motion.div
                className="relative w-[200px] h-[200px] mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, rotate: 360 }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            >
                <div className="absolute w-full h-full border-4 border-dashed rounded-full border-purple-500 animate-spin-slow"></div>
                <div className="absolute w-16 h-16 bg-blue-500 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
            >
                <Link
                    href="/"
                    className="px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-lg hover:shadow-xl hover:opacity-90 transition"
                >
                    Go Back Home
                </Link>
            </motion.div>
        </div>
    )
}

export default NotFoundPage
