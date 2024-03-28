import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>LOGO</span>
        <p className="text-slate-600">© All Rights Reserved 2021 - { new Date().getFullYear()} | Tamjid Ahmed</p>
      </div>
    </footer>
  );
};

export default Footer;
