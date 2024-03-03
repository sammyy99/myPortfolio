import React from "react";

const Blogs = () => {
  return (
      <div id="blogs" className="text-green-500 mt-6 mx-2 md:mx-6 py-6 md:py-10 bg-black bg-opacity-50 rounded-lg font-mono">
        <div className="flex justify-center text-3xl md:text-4xl font-semibold">Blogs</div>

        <div className="flex justify-center py-6 md:py-12">
          <a target="blank" href="https://dev.to/sammyy99/integrating-your-react-projects-with-openai-building-a-netflix-type-platform-4kn">
          <div className="md:w-[36rem] hover:border hover:border-green-500 shadow-md hover:shadow-green-500 md:hover:w-[40rem] p-8 rounded-xl transition-all translate-300 hover:cursor-pointer">
            
              <img className="rounded-xl" src="openAI.png" alt=""></img>
              <div className="pt-6 text-xl text-center md:text-left">Integrating Your React Projects with OpenAI </div>
              <div className="pt-3 md:py-3 text-md text-gray-400 text-center md:text-left">This blog post will walk you through the journey of integrating OpenAI into a React project...</div>

          </div>
          </a>
        </div>
      </div>
  );
};

export default Blogs;
