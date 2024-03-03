import React from "react";

const Blogs = () => {
  return (
      <div id="blogs" className="text-green-500 mt-6  mx-6 py-10 bg-black bg-opacity-50 rounded-lg font-mono">
        <div className="flex justify-center text-4xl font-semibold">Blogs</div>

        <div className="flex justify-center py-12">
          <a target="blank" href="https://dev.to/sammyy99/integrating-your-react-projects-with-openai-building-a-netflix-type-platform-4kn">
          <div className="w-[36rem] hover:border hover:border-green-500 shadow-md hover:shadow-green-500 hover:w-[40rem] p-8 rounded-xl transition-all translate-300 hover:cursor-pointer">
            
              <img className="rounded-xl" src="openAI.png" alt=""></img>
              <div className="pt-6 text-xl">Integrating Your React Projects with OpenAI </div>
              <div className="py-3 text-md text-gray-400">This blog post will walk you through the journey of integrating OpenAI into a React project...</div>

          </div>
          </a>
        </div>
      </div>
  );
};

export default Blogs;
