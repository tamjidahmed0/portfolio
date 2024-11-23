
import { Icon } from "@iconify/react";

const DesktopNavigation = ({TabsList, TabsTrigger}) => {
  return (
    <div className="max-lg:hidden w-full h-[80px] flex  justify-end   ">
          <TabsList className=" bg-[#F2F7FC]   gap-[30px]     py-3 px-10 border  ">
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
            {/* <FileUser className="text-[10px]" /> */}
            <Icon icon="mdi:resume"  className="text-[20px]"/>
            <span className="text-[10px]">Resume</span>
          </TabsTrigger>

          <TabsTrigger
            value="works"
            className="flex flex-col w-[50px] h-[50px] bg-[#E1E8EF] font-poppins font-normal text-[#1A1003]"
          >
            {/* <BriefcaseBusiness className="text-[10px]" /> */}
            <Icon icon="ic:baseline-work"  className="text-[20px]" />
            <span className="text-[10px]">Works</span>
          </TabsTrigger>

          <TabsTrigger
            value="contact"
            className="flex flex-col w-[50px] h-[50px] bg-[#E1E8EF] font-poppins font-normal text-[#1A1003]"
          >
            {/* <Contact className="text-[10px]" /> */}
            <Icon icon="mdi:contact"   className="text-[20px]"/>
            <span className="text-[10px]">Contact</span>
          </TabsTrigger>
        </TabsList>
    </div>
  )
}

export default DesktopNavigation