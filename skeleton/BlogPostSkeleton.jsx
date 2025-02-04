'use client';

import Image from 'next/image';
import Link from 'next/link';

const BlogPostSkeleton = () => {
  return (
    <div className="px-9 py-10 bg-[#1C1C1D]">
      <div className="flex flex-col lg:flex-row gap-[20px] lg:items-start">
        {/* Carousel Section Skeleton */}
        <div className="lg:w-[30%] bg-[#252728] lg:sticky lg:top-0 px-5 py-10 rounded-xl">
          <div className="relative h-80 bg-gray-500 rounded-xl overflow-hidden animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-400 animate-pulse" />
          </div>
         
        </div>

        {/* Main Content Section Skeleton */}
        <div className="lg:w-[70%] bg-[#252728] p-9 rounded-xl">
          {/* Blog Title Skeleton */}
          <div className="animate-pulse">
            <div className="h-8 bg-gray-500 w-3/4 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 w-1/3 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 w-1/2 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 w-2/3 rounded mb-4"></div>
          </div>

          {/* Blog Content Skeleton */}
          <div className="mt-10 flex flex-col lg:flex-row gap-[30px] items-start justify-between animate-pulse">
            {/* Post Content Skeleton */}
            <div className="lg:w-[80%]">
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-full mb-3 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 mb-3 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3 mb-3 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-3 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
              </div>
            </div>

            {/* Links Skeleton */}
            <div className="lg:w-[20%] flex flex-col gap-2">
              <div className="h-8 bg-gray-500 rounded-full animate-pulse"></div>
              <div className="h-8 bg-gray-500 rounded-full animate-pulse"></div>
              <div className="h-8 bg-gray-500 rounded-full animate-pulse"></div>
              <div className="h-8 bg-gray-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Technologies Used Skeleton */}
          <div className="mt-10">
            <div className="animate-pulse">
              <div className="h-6 bg-gray-500 w-1/4 rounded mb-5"></div>
              <div className="mt-3 flex flex-wrap gap-[10px]">
                <div className="h-10 w-20 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-10 w-20 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-10 w-20 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-10 w-20 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostSkeleton;
