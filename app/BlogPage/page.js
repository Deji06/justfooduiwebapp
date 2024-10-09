import React from "react";
import Image from "next/image";
import img from "@/assets/image 26 (9).png";
import img1 from "@/assets/image 26 (10).png";
import img2 from "@/assets/image 26 (11).png";
import img3 from "@/assets/image 26 (12).png";
import img4 from "@/assets/image 26 (13).png";
import img5 from "@/assets/image 26 (14).png";
import img9 from "@/assets/image 26 (8).png";
import img10 from "@/assets/rucola-png.png";
import img11 from "@/assets/photoPlate.png";
import avatar from "@/assets/Ellipse 2.png";
import creamCheese from "@/assets/creamCheese.png";
import baconPasta from "@/assets/baconpasta.png";
import rice from "@/assets/rice.png";
import { Lobster } from "next/font/google";
import adFoodImage from "@/assets/adFoodImage.png";
import star from "@/assets/Star 1.png";
import { MdNavigateNext } from "react-icons/md";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });

const Blog = () => {
  return (
    <section className="px-3 sm:w-[1280px] mx-auto py-12 pb-10">
      <div className="mx-auto w-[px]">
        <p className="capitalize text-center font-bold text-[40px] ">
          Blog & article
        </p>
        <p className="py-3 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
        <div className="flex flex-col sm:w-[600px] sm:mx-auto">
          <form className="flex gap-x-10 mx-auto border bg-white py-2 my-5 rounded-[10px] sm:px-4 px-1 items-center">
            <input
              className="border-none bg-none outline-none text-[14px] sm:w-[300px]"
              type="email"
              placeholder="Search article, news or recipe..."
            />
            <button
              type="submit"
              className="items-center px-8 rounded-[10px] py-3  bg-black text-white text-[12px]"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between mt-10">
        <div className="sm:w-[60%] px-3 flex flex-col gap-y-5 py-2">
          {/* left */}
          <div className="flex flex-col sm:flex-row gap-x-5">
            <Image src={img} alt="" className="rounded-[10px]" />
            <div className="space-y-3 py-3">
              <p className="font-bold text-[20px]">
                Crochet Projects for Noodle Lovers
              </p>
              <p className="text-[#8392A7] text-[14px]">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim{" "}
              </p>
              <div className="flex sm:gap-x-5 gap-x-2 items-center py-4">
                <Image src={avatar} />
                <p className="font-bold">Wade Warren</p>
                <div className="border  h-[25px]"></div>
                <p>12 November 2021</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-x-5">
            <Image src={img1} alt="" className="rounded-[10px]" />
            <div className="space-y-3 py-3">
              <p className="font-bold text-[20px]">
                10 Vegetarian Recipes To Eat This Month
              </p>
              <p className="text-[#8392A7] text-[14px]">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim{" "}
              </p>
              <div className="flex sm:gap-x-5 gap-x-2 items-center py-4">
                <Image src={avatar} />
                <p className="font-bold">Wade Warren</p>
                <div className="border  h-[25px]"></div>
                <p>12 November 2021</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-x-5">
            <Image src={img2} alt="" className="rounded-[10px]" />
            <div className="space-y-3 py-3">
              <p className="font-bold text-[20px]">
                Full Guide to Becoming a Professional Chef
              </p>
              <p className="text-[#8392A7] text-[14px]">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim{" "}
              </p>
              <div className="flex sm:gap-x-5 gap-x-2 items-center py-4">
                <Image src={avatar} />
                <p className="font-bold">Wade Warren</p>
                <div className="border  h-[25px]"></div>
                <p>12 November 2021</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-x-5">
            <Image src={img3} alt="" className="rounded-[10px]" />
            <div className="space-y-3 py-3">
              <p className="font-bold text-[20px]">
                Simple & Delicious Vegetarian Lasagna
              </p>
              <p className="text-[#8392A7] text-[14px]">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim{" "}
              </p>
              <div className="flex sm:gap-x-5 gap-x-2 items-center py-4">
                <Image src={avatar} />
                <p className="font-bold">Wade Warren</p>
                <div className="border  h-[25px]"></div>
                <p>12 November 2021</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-x-5">
            <Image src={img4} alt="" className="rounded-[10px]" />
            <div className="space-y-3 py-3">
              <p className="font-bold text-[20px]">
                Plantain and Pinto Stew with Aji Verde
              </p>
              <p className="text-[#8392A7] text-[14px]">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim{" "}
              </p>
              <div className="flex sm:gap-x-5 gap-x-2 items-center py-4">
                <Image src={avatar} />
                <p className="font-bold">Wade Warren</p>
                <div className="border  h-[25px]"></div>
                <p>12 November 2021</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-x-5">
            <Image src={img5} alt="" className="rounded-[10px]" />
            <div className="space-y-3 py-3">
              <p className="font-bold text-[20px]">
                We’re Hiring a Communications Assistant!
              </p>
              <p className="text-[#8392A7] text-[14px]">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim{" "}
              </p>
              <div className="flex sm:gap-x-5 gap-x-2 items-center py-4">
                <Image src={avatar} />
                <p className="font-bold">Wade Warren</p>
                <div className="border  h-[25px]"></div>
                <p>12 November 2021</p>
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col gap-y-12 px-2 sm:px-0">
          <div className="flex flex-col gap-y-2">
            <p className="font-semibold text-[30px]">Tasty Recipes</p>
            <div className="flex items-center gap-x-3 mt-5">
              <Image src={creamCheese} className="rounded-[10px] w-[120px]" />
              <div className="">
                <p className="font-semibold text-[18px]">
                  Chicken Meatball <br /> with Creamy Chees...
                </p>
                <p className="text-[#8392A7] pt-2 pb-0">By Andreas Paula</p>
              </div>
            </div>
            <div className="flex items-center gap-x-3 mt-5">
              <Image src={baconPasta} className="rounded-[10px] w-[120px]" />
              <div className="">
                <p className="font-semibold text-[18px]">
                  The Creamiest <br /> Creamy Chicken an...
                </p>
                <p className="text-[#8392A7] pt-2 pb-0">By Andreas Paula</p>
              </div>
            </div>
            <div className="flex items-center gap-x-3 mt-5">
              <Image src={rice} className="rounded-[10px] w-[120px]" />
              <div className="">
                <p className="font-semibold text-[18px]">
                  The Best Easy One <br /> Pot Chicken and Rice
                </p>
                <p className="text-[#8392A7] pt-2 pb-0">By Andreas Paula</p>
              </div>
            </div>
          </div>
          <div className="adBackground relative w-[320px] h-[350px] ">
            <p
              className={`${lobster.className} text-white text-center mt-4 text-[20px]`}
            >
              Don’t forget to eat <br /> healthy food
            </p>
            <Image src={adFoodImage} className="absolute z-10 top-16 left-" />
            <Image
              src={star}
              className=" star absolute top-[16px] left- z-5 w-[350px]"
            />
            <p className="adText text-center text-[14px] absolute bottom-5 left-24">
              www.foodieland.com
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="mt-10 flex sm:gap-x-3 gap-x-2 items-center justify-center">
        <button className="bg-black rounded-[10px] px-4 py-2">
          <p className="text-white">1</p>
        </button>
        <button className="border rounded-[10px] px-4 py-2">
          <p className="">2</p>
        </button>
        <button className="border rounded-[10px] px-4 py-2">
          <p className="">3</p>
        </button>
        <button className="border rounded-[10px] px-4 py-2">
          <p className="">4</p>
        </button>
        <button className="border rounded-[10px] px-4 py-2">
          <p className="">5</p>
        </button>
        <button className="border rounded-[10px] px-3 py-2">
          <p className="">....</p>
        </button>
        <button className="border rounded-[10px] px-3 py-3">
          <MdNavigateNext />
        </button>
      </div>
      {/*  */}
      <div className="px-3 sm:w-[1280px] mt-10 mx-auto sm:py-12 py-6 pb-10 rounded-[40px] bg-[#E7F9FD] relative">
        <div className="flex flex-col  sm:w-[600px] mx-auto">
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
        <Image className="absolute sm:top-[130px] top-[100px] sm:right-[320px] right-0 w-[100px]  " src={img10} />
        <Image className="absolute bottom-0 sm:w-[200px] right-0 w-[80px]" src={img11} />
      </div>
    </section>
  );
};

export default Blog;
