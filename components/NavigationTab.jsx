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

      <TabsList className="bg-[#252728] flex items-center gap-[30px] px-10 h-[100px] fixed inset-x-0 bottom-0 border-t lg:absolute lg:bottom-auto lg:left-0 lg:top-0 lg:inset-x-auto lg:flex-col lg:h-full lg:hidden">
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


export default NavigationTabContent;
