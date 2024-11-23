'use client'
import NavigationTab from "@/components/NavigationTab";
import Footer from "@/components/Footer";
import { Suspense } from "react";




export default function Home() {
  return (
   <div className=" px-9 pb-10  lg:pb-0   ">

<NavigationTab />
{/* <Suspense fallback ={
  <div>loading</div>
}>
  
</Suspense> */}


  
   </div>
  );
}
