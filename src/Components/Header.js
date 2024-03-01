import React, { useState } from "react";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import BookIcon from "@mui/icons-material/Book";
import HomeIcon from "@mui/icons-material/Home";

const Header = () => {
  const [scrollStatus, setScrollStatus] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrollStatus(true);
    } else {
      setScrollStatus(false);
    }
  };

  useState(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full grid grid-cols-12  bg-black py-5 rounded-md ${
        scrollStatus ? "bg-opacity-100" : "bg-opacity-50"
      } shadow-lg shadow-green-500 text-xl font-mono font-bold z-50`}
    >
      <div className="flex justify-center col-span-2 text-green-500 hover:cursor-pointer text-xl font-bold">
        <div className="mr-4">
          <CodeOffIcon />
        </div>
        <div>SAMARTH</div>
      </div>
      <div className="col-span-8 flex justify-center">
        <ul className="flex space-x-10 text-green-500 hover:cursor-pointer text-xl">
          <li className="hover:text-green-300 hover:bg-green-300 hover:bg-opacity-5 rounded-full hover:text-2xl transition-all translate-300">
            <HomeIcon /> Home
          </li>
          <li className="hover:text-green-300 hover:bg-green-300 hover:bg-opacity-5 rounded-full hover:text-2xl transition-all translate-300">
            <InfoIcon /> About
          </li>
          <li className="hover:text-green-300 hover:bg-green-300 hover:bg-opacity-5 rounded-full hover:text-2xl transition-all translate-300">
            <WorkIcon /> Projects
          </li>
          <li className="hover:text-green-300 hover:bg-green-300 hover:bg-opacity-5 rounded-full hover:text-2xl transition-all translate-300">
            <SupportAgentIcon /> Services
          </li>
          <li className="hover:text-green-300 hover:bg-green-300 hover:bg-opacity-5 rounded-full hover:text-2xl transition-all translate-300">
            <BookIcon /> Blogs
          </li>
        </ul>
      </div>
      <div className="flex justify-center col-span-2 text-green-500 text-xl font-bold hover:cursor-pointer hover:text-green-300 hover:text-2xl transition-all translate-300">
        <button className="bg-black border border-green-500 px-4 py-1 rounded-lg">Contact me</button>
      </div>
    </div>
  );
};

export default Header;
