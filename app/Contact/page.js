import React from "react";
import Image from "next/image";
import chef from "@/assets/contactpageChef.png";
import img9 from "@/assets/image 26 (8).png";
import img10 from "@/assets/rucola-png.png";
import img11 from "@/assets/photo-plate.png";

const Contact = () => {
  return (
    <section className="px-3 sm:w-[1280px] mx-auto py-12 pb-10">
      <p className="text-center font-bold text-[44px]">contact us</p>
      <div className="flex flex-col sm:flex-row gap-x-16 mt-  sm:mt-10">
        <Image src={chef} className="recipebg rounded-[10px] sm:ml-5" />
        <div className="flex flex-col gap-y-5 sm:w-[80%]">
          <form className=" grid sm:grid-cols-2 py-2 gap-y-4 sm:h-[250px]">
            <div className="flex flex-col gap-y-2">
              <label
                className="uppercase text-[14px] text-[#8392A7]"
                htmlFor=""
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name..."
                className="border-2 py-3 px-4 rounded-[10px] sm:w-[80%]"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                className="uppercase text-[14px] text-[#8392A7]"
                htmlFor=""
              >
                email address
              </label>
              <input
                type="text"
                placeholder="Your email address..."
                className="border-2 py-3 px-4 rounded-[10px] sm:w-[80%]"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                className="uppercase text-[14px] text-[#8392A7]"
                htmlFor=""
              >
                subject
              </label>
              <input
                type="text"
                placeholder="Enter subject..."
                className="border-2 py-3 px-4 rounded-[10px] sm:w-[80%]"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                className="uppercase text-[14px] text-[#8392A7]"
                htmlFor=""
              >
                enquiry type
              </label>
              <select
                name=""
                id=""
                className="border-2 py-3 px-4 rounded-[10px] sm:w-[80%] outline-none"
              >
                <option value="">advertising</option>
                <option value="">advertising</option>
                <option value="">advertising</option>
              </select>
            </div>
          </form>
          <div className='flex flex-col gap-y-3'>
            <label htmlFor="" className="uppercase text-[14px] text-[#8392A7]">message</label>
            <textarea placeholder='Enter your message' className='border-2 sm:w-[80%] h-[100px] rounded-[10px] outline-none p-3'></textarea>
          </div>
          {/*  */}
          <button
            type="submit"
            className="items-center mt-5  px-8 rounded-[10px] py-3  bg-black text-white text-[12px] w-[120px]"
          >
            Submit
          </button>
        </div>
      </div>
      <div className="px-3 sm:w-[1280px] mt-16 mx-auto py-12 pb-10 rounded-[40px] bg-[#E7F9FD] relative">
        <div className="flex flex-col sm:w-[600px] mx-auto">
          <div>
            <p className="sm:text-[40px] text-[20px] font-semibold text-center">
              Deliciousness to your inbox
            </p>
            <p className="text-center sm:w-[600px] mx-auto py-2 text-[#8392A7]">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim{" "}
            </p>
          </div>
          <form className="flex sm:gap-x-10 mx-auto bg-white py-2 my-5 rounded-[10px] sm:px-4 items-center">
            <input
              className="border-none bg-none outline-none text-[14px]"
              type="email"
              placeholder="Your email address..."
            />
            <button
              type="submit"
              className="items-center px-8 rounded-[10px] py-3  bg-black text-white text-[12px]"
            >
              subscribe
            </button>
          </form>
        </div>
        <Image className="absolute sm:w-[250px] w-[100px] left-0 bottom-2" src={img9} />
        <Image className="absolute sm:top-[130px] top-[100px] right-0 sm:right-[320px] w-[100px] " src={img10} />
        <Image className="absolute bottom-0 sm:w-[200px] w-[100px] right-0" src={img11} />
      </div>
    </section>
  );
};

export default Contact;
