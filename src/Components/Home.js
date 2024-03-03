import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { homeData } from "../Utils&Constants/constants";
import { useDispatch } from "react-redux";
import { getform } from "../Redux/formSlice";

const Home = () => {
  const dispatch = useDispatch();

  const handleGetForm = () => {
    dispatch(getform());
  };

  return (
    <div id="home" className=" relative font-mono font-semibold w-full h-full pb-20">
      
      <video autoPlay loop muted className="absolute h-full w-full object-cover">
        <source src="bgAbout.mp4" type="video/mp4" />
      </video>
      
      <div className="h-40"></div>

      <div className="text-white grid grid-cols-12 mx-6 bg-black bg-opacity-80 rounded-lg z-10 relative">
        <div className="col-span-6 flex justify-center my-24">
          <div>
            <div className="flex justify-center">
              <img
                className="rounded-full w-64 shadow-md shadow-green-500"
                alt=""
                src="photo.jpeg"
              ></img>
            </div>
            <div className="flex justify-center text-3xl my-10  text-green-500">
              <Typewriter
                words={[
                  "< Samarth Bhardwaj />",
                  "< Full-Stack Web-Developer />",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </div>
          </div>
        </div>

        <div className="col-span-6 my-auto mx-20 text-2xl text-green-400">
          <div className="font-mono">{homeData}</div>
          <div className=" my-10">
            <button
              onClick={() => {
                handleGetForm();
              }}
              className="bg-black border border-green-500 px-4 py-1 rounded-lg hover:cursor-pointer hover:text-green-300 hover:border-green-300 hover:text-3xl transition-all translate-300"
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
