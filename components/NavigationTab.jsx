'use client';

import { Suspense } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Profile from "@/components/Profile";
import Home from "@/components/Home";
import DesktopNavigation from "./DesktopNavigation";
import Resume from "@/components/Resume";
import Works from "./Works";
import ContactContent from "./Contact";
import { Icon } from "@iconify/react";
import { useSearchParams, useRouter } from "next/navigation";

const NavigationTabContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get the current tab from the query params or default to "home"
  const activeTab = searchParams.get("tab") || "home";

  // Update the query parameter when the tab changes
  const handleTabChange = (value) => {
    router.push(`?tab=${value}`, { scroll: false }); // Update the URL without reloading
  };

  return (
    <Tabs defaultValue={activeTab} className="relative" onValueChange={handleTabChange}>
      <div className="sticky top-0 z-50">
        <DesktopNavigation TabsList={TabsList} TabsTrigger={TabsTrigger} />
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between gap-[25px] lg:py-9 lg:items-start">
        <div className="w-full lg:w-[40%] xl:w-[25%] lg:sticky lg:top-0">
          <Profile />
        </div>

        <div className="w-full lg:w-[60%] xl:w-[75%]">
          <TabsContent value="home">
            <Home />
          </TabsContent>

          <TabsContent value="resume">
            <Resume />
          </TabsContent>

          <TabsContent value="works">
            <Works />
          </TabsContent>

          <TabsContent value="contact">
            <ContactContent />
          </TabsContent>
        </div>
      </div>

      <TabsList className="bg-[#F2F7FC] flex items-center gap-[30px] px-10 h-[100px] fixed inset-x-0 bottom-0 border-t lg:absolute lg:bottom-auto lg:left-0 lg:top-0 lg:inset-x-auto lg:flex-col lg:h-full lg:hidden">
        <TabsTrigger
          value="home"
          className="flex flex-col w-[50px] h-[50px] bg-[#E1E8EF] font-poppins font-normal text-[#1A1003]"
        >
          <Icon icon="material-symbols:home" className="text-[20px]" />
          <span className="text-[10px]">Home</span>
        </TabsTrigger>

        <TabsTrigger
          value="resume"
          className="flex flex-col w-[50px] h-[50px] bg-[#E1E8EF] font-poppins font-normal text-[#1A1003]"
        >
          <Icon icon="mdi:resume" className="text-[20px]" />
          <span className="text-[10px]">Resume</span>
        </TabsTrigger>

        <TabsTrigger
          value="works"
          className="flex flex-col w-[50px] h-[50px] bg-[#E1E8EF] font-poppins font-normal text-[#1A1003]"
        >
          <Icon icon="ic:baseline-work" className="text-[20px]" />
          <span className="text-[10px]">Works</span>
        </TabsTrigger>

        <TabsTrigger
          value="contact"
          className="flex flex-col w-[50px] h-[50px] bg-[#E1E8EF] font-poppins font-normal text-[#1A1003]"
        >
          <Icon icon="mdi:contact" className="text-[20px]" />
          <span className="text-[10px]">Contact</span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

// const NavigationTab = () => {
//   return (
//     <Suspense fallback={

//       <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
//       <svg
//         className="w-16 h-16 animate-spin text-gray-900/50"
//         viewBox="0 0 64 64"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//       >
//         <path
//           d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
//           stroke="currentColor"
//           strokeWidth="5"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
//           stroke="currentColor"
//           strokeWidth="5"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="text-gray-900"
//         />
//       </svg>
//     </div>
//     }>
//       <NavigationTabContent />
//     </Suspense>
//   );
// };

export default NavigationTabContent;
