import React, { useEffect, useState } from "react";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import BookIcon from "@mui/icons-material/Book";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-scroll";
import { useDispatch } from "react-redux";
import { getform } from "../Redux/formSlice";

const Header = () => {
  const [scrollStatus, setScrollStatus] = useState(false);
  const [activeLink, setActiveLink] = useState('home')

  const dispatch = useDispatch()

  const handleGetForm = ()=>{
    dispatch(getform())
  }

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrollStatus(true);
    } else {
      setScrollStatus(false);
    }
  };

  const handleActiveLink = (to)=>{
        setActiveLink(to);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full grid grid-cols-12  bg-black py-5 rounded-md ${
        scrollStatus ? "bg-opacity-100" : "bg-opacity-50"
      } shadow-lg shadow-green-500 text-xl font-mono font-bold z-20`}
    >
      <div className="flex justify-center col-span-2 text-green-500 hover:cursor-pointer text-xl font-bold">
        <div className="mr-4">
          <CodeOffIcon />
        </div>
        <div>SAMARTH</div>
      </div>
      <div className="col-span-8 flex justify-center">
        <ul className="flex space-x-10 text-green-500 hover:cursor-pointer text-xl">
        <Link
            activeClass="text-green-300 bg-green-300 bg-opacity-5 text-2xl transition-all translate-300"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onSetActive={()=>{handleActiveLink('home')}}
          >
          <li className={activeLink==='home' ? 'text-green-300 text-2xl':'hover:text-green-300 hover:text-2xl transition-all translate-300'}>
            <HomeIcon /> Home
          </li>
          </Link>

          <Link
            key={'about'}
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onSetActive={()=>{handleActiveLink('about')}}
          >
            <li className={activeLink==='about' ? 'text-green-300 text-2xl':'hover:text-green-300 hover:text-2xl transition-all translate-300'}>
            <InfoIcon /> About
           </li>
          </Link>
          

          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onSetActive={()=>{handleActiveLink('projects')}}
          >
            <li className={activeLink==='projects' ? 'text-green-300 text-2xl':'hover:text-green-300 hover:text-2xl transition-all translate-300'}>
              <WorkIcon /> Projects
            </li>
          </Link>

          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onSetActive={()=>{handleActiveLink('services')}}
          >
          <li className={activeLink==='services' ? 'text-green-300 text-2xl':'hover:text-green-300 hover:text-2xl transition-all translate-300'}>
            <SupportAgentIcon /> Services
          </li>
          </Link>

          <Link
            activeClass="active"
            to="blogs"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onSetActive={()=>{handleActiveLink('blogs')}}
          >
          <li className={activeLink==='blogs' ? 'text-green-300 text-2xl':'hover:text-green-300 hover:text-2xl transition-all translate-300'}>
            <BookIcon /> Blogs
          </li>
          </Link>
        </ul>
      </div>
      <div className="flex justify-center col-span-2 text-green-500 text-xl font-bold hover:cursor-pointer hover:text-green-300 hover:text-2xl transition-all translate-300">
        <button onClick={()=>{handleGetForm()}} className="bg-black border border-green-500 px-4 py-1 rounded-lg">
          Contact me
        </button>
      </div>
    </div>
  );
};

export default Header;
