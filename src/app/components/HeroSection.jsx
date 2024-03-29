"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import getHeroData from "../../../lib/getHeroData";
import getAnimatedData from "../../../lib/getAnimatedData";
import { urlFor } from "../../../sanity/lib/client";

const HeroSection = () => {
  const [result, setResult] = useState([]);
  const [AnimatedText, setAnimatedText] = useState([]);

  useEffect(() => {
    const data = async () => {
      try {
        const heroData = await getHeroData();
        const AnimatedData = await getAnimatedData();

        setResult(heroData);

        const sequence = AnimatedData.map((name) => [name.Text, 1000]).flat();
        setAnimatedText(sequence);
      } catch (error) {}
    };

    data();
  }, []);


  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            {result.map((value, index)=>{
                const{ color1 , color2} = value
              return (
              //   <span key={index} className={`text-transparent bg-clip-text bg-gradient-to-r from-[${color}] to-secondary-600`}>
              //   {value.title}
              // </span>
                <span key={index} className={` text-4xl `} >
                HELLO, MY NAME IS
                <h1 className=" text-white text-7xl" style={{
                  background: `linear-gradient(to right, ${ color1.hex} 0%, ${color2.hex} 100%)`,
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}>{value.title}</h1>
                
               
              </span>
              
              )
            })}




       
            <TypeAnimation sequence={[ "Web Developer", 1000, 'App developer', 1000]} wrapper="span" speed={50} repeat={Infinity} />
          </h1>
          {result.map((value, i)=>(
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl" key={i}>{value.desc}</p>
          ))}
          
          <div>
            <Link href="/#contact" className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
              Hire Me
            </Link>
    
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="col-span-4 place-self-center mt-4 lg:mt-0">
          {result.map((value, i)=>(
     <div className={`rounded-full bg-${value.imageBgColor.hex} w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative`} style={{backgroundColor: value.imageBgColor.hex}} key={i}>
     <Image src={urlFor(value.image.asset._ref).url()} alt="hero image" className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" width={300} height={300} />
       
     </div>
          ))}
     
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
