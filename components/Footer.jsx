import React from 'react'

const Footer = () => {
    return (
        <footer className='py-2 flex justify-center mb-24 lg:mb-0 bg-[#1C1C1D]'>
            <div className=" text-gray-400 text-center py-4  text-[14px] lg:text-[16px]">
                &copy; 2021 - {new Date().getFullYear()} <span className="font-semibold">Tamjid Ahmed</span>. All rights reserved.
            </div>

        </footer>
    )
}

export default Footer