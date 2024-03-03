import React from "react";

const Footer = () => {
  return (
    <div>
      <div className=" mt-6  mx-6 py-10 bg-black  rounded-lg font-mono">
        <div className="flex justify-between mx-8">
          <div>
            <div className="text-gray-400">Hello !</div>
            <div className="text-white text-xl">bsammy.1399@gmail.com</div>
          </div>
          <div className="flex space-x-4 py-4">
            <a href="https://github.com/sammyy99" target="blank">
              <img
                className="w-6 hover:w-8 hover:cursor-pointer transition-all translate-300"
                alt=""
                src="footer/github.svg"
              ></img>
            </a>
            <a
              href="https://www.linkedin.com/in/samarth-bhardwaj-60b398201/"
              target="blank"
            >
              <img
                className="w-6 hover:w-8 hover:cursor-pointer transition-all translate-300"
                alt=""
                src="footer/linkedin.svg"
              ></img>
            </a>
            <a href="https://discordapp.com/users/Sammy8000/ " target="blank">
              <img
                className="w-6 hover:w-8 hover:cursor-pointer transition-all translate-300"
                alt=""
                src="footer/discord.svg"
              ></img>
            </a>
            <a href="https://twitter.com/Sam_8000_" target="blank">
              <img
                className="w-6 hover:w-8 hover:cursor-pointer transition-all translate-300"
                alt=""
                src="footer/x.svg"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center text-gray-400 font-mono py-4">
          <div>
            <div>Developed by- <span className="underline"> Samarth Bhardwaj</span></div>
            <div className="flex justify-center"><img className="w-4" src="footer/copyright.svg" alt=""></img><div>2022 All rights reserved.</div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
