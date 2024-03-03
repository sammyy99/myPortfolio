import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { cancelform, submitform } from "../Redux/formSlice";

const Contact = () => {
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const query = useRef(null);

  const handleFormData = () => {
    dispatch(
      submitform({
        name: name.current.value,
        email: email.current.value,
        phone: phone.current.value,
        query: query.current.value,
      })
    );
    dispatch(cancelform());
    name.current.value = "";
    email.current.value = "";
    phone.current.value = "";
    query.current.value = "";
  };

  const handleCloseForm = () => {
    dispatch(cancelform());
  };

  return (
    <div id="contact" className="fixed my-auto h-screen w-full flex justify-center z-30">
      <div className="my-auto mx-6 w-1/2 z-40 ">
        <div className=" bg-black py-8 px-2 font-mono text-green-500 border border-green-500 rounded-xl">

          <div className="flex justify-end">
            <img
              onClick={() => {
                handleCloseForm();
              }}
              className="w-8 hover:cursor-pointer shadow-md shadow-green-500"
              src="cross.svg"
              alt=""
            ></img>
          </div>
          <div className="flex justify-center text-2xl">Hi there !</div>

          <div className="p-6">
            <div className=" pb-6">
              <div className="text-md mb-1">Name</div>
              <input
                ref={name}
                className="w-full px-4 py-2 rounded-md outline-none bg-zinc-800 text-white"
                typeof="text"
                placeholder="Full name"
              ></input>
            </div>

            <div className="pb-6">
              <div className="text-md mb-1">E-mail</div>
              <input
                ref={email}
                className="w-full px-4 py-2 rounded-md outline-none bg-zinc-800 text-white"
                typeof="text"
                placeholder="Email id"
              ></input>
            </div>

            <div className=" pb-6">
              <div className="text-md mb-1">Contact no.</div>
              <input
                ref={phone}
                className="w-full px-4 py-2 rounded-md outline-none bg-zinc-800 text-white"
                typeof="text"
                placeholder="Phone no."
              ></input>
            </div>

            <div className="pb-6">
              <div className="text-md mb-1">Your Requirement</div>
              <textarea
                ref={query}
                rows={3}
                className="w-full px-4 py-2 rounded-md outline-none bg-zinc-800 text-white"
                typeof="textarea"
                placeholder="Please let us know about your expectations."
              ></textarea>
            </div>

            <div className="mt-2  flex justify-center text-green-500 text-lg font-bold ">
              <button
                onClick={() => {
                  handleFormData();
                }}
                className=" bg-black border border-green-500 px-14 py-1 rounded-lg hover:cursor-pointer hover:text-green-300 hover:text-xl transition-all translate-300"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
