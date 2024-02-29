import React from "react";
import CodeOffIcon from '@mui/icons-material/CodeOff';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import BookIcon from '@mui/icons-material/Book';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import HomeIcon from '@mui/icons-material/Home';

const Header = () => {
  return (
      <div className="flex bg-black justify-between px-12 py-4 m-4 rounded-md bg-opacity-70 shadow-lg shadow-green-500 text-xl font-serif">
        <div className="flex text-green-500 hover:cursor-pointer text-xl font-semibold">
          <div className="mr-4"><CodeOffIcon/></div>
          <div>Samarth</div>
        </div>
        <div>
          <ul className="flex space-x-10 text-green-500 hover:cursor-pointer text-xl">
            <li className="hover:text-green-300 hover:bg-green-300 hover:bg-opacity-5 rounded-full"><HomeIcon/> Home</li>
            <li className="hover:text-green-300 hover:bg-green-300 hover:bg-opacity-5 rounded-full"><InfoIcon/> About</li>
            <li className="hover:text-green-300 hover:bg-green-300 hover:bg-opacity-5 rounded-full"><WorkIcon/> Work</li>
            <li className="hover:text-green-300 hover:bg-green-300 hover:bg-opacity-5 rounded-full"><SupportAgentIcon/> Services</li>
            <li className="hover:text-green-300 hover:bg-green-300 hover:bg-opacity-5 rounded-full"><BookIcon/> Blogs</li>
          </ul>
        </div>
        <div className="text-green-500 hover:cursor-pointer text-xl hover:text-green-300 hover:bg-green-300 hover:bg-opacity-5 rounded-full"><AlternateEmailIcon/> Contact</div>
      </div>
  );
};

export default Header;
