"use client"
import React from "react";
import Image from "next/image";
import avatar from "@/assets/avatar.png";
import grenade from "@/assets/grenade.png";
import forkKnife from "@/assets/ForkKnife.png";
import recipeImage from "@/assets/recipeImage.png";
import baconPasta from "@/assets/baconpasta.png";
import creamCheese from "@/assets/creamCheese.png";
import rice from "@/assets/rice.png";
import adFoodImage from "@/assets/adFoodImage.png";
import star from "@/assets/Star 1.png";
import womanChef from "@/assets/womanChef.png";
import img9 from "@/assets/image 26 (8).png"
import img10 from "@/assets/rucola-png.png"
import img11 from "@/assets/plate.png"
import { Lobster } from "next/font/google";
import img from "@/assets/image 26.png"
import img2 from "@/assets/image 26 (1).png"
import img3 from "@/assets/image 26 (2).png"
import img4 from "@/assets/image 26 (3).png"
import whiteHeart from "@/assets/whiteHeart.png"
import heart from "@/assets/Heart.png"
import { IoShareOutline } from "react-icons/io5";
import { FiPrinter } from "react-icons/fi";

// import Share  from 'lucide-react';
// import { Share } from 'lucide-react';

// import { X } from "lucide-react";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });
const Recipe = () => {
  return (
    <>
      <section className="sm:w-[1280px] my-5 mx-auto pb-10">
        <div className="flex flex-col sm:flex-row justify-between gap-y-2">
          <header className="flex flex-col gap-y-3">
            <h1 className="font-semibold sm:text-[44px] px-2 sm:px-0 text-[25px]">
              Health Japanese Fried Rice
            </h1>
            <div className="flex sm:flex-row g sm:items-center gap-x-2  sm:gap-x-5">
              <div className="flex items-center gap-x-3">
                <Image src={avatar} alt="profile" />
                <div className="flex flex-col  gap-y-1">
                  <p className="sm:text-[14px] text-[8px] font-bold">John Smith</p>
                  <p className="sm:text-[14px] text-[8px] font-medium text-[#8392A7] ">
                    15 March 2022
                  </p>
                </div>
              </div>
              <div className="border hidden sm:block h-[50px]"></div>
              <div className="flex items-center gap-x-1 sm:gap-x-3">
                <Image src={grenade} />
                <div className="flex flex-col gap-y-1">
                  <p className="uppercase font-bold text-[8px] sm:text-[12px]">prep time</p>
                  <p className="sm:text-[14px] text-[8px] font-medium text-[#8392A7]">
                    15 minutes
                  </p>
                </div>
              </div>
              <div className="border hidden sm:block h-[50px]"></div>
              <div className="flex items-center gap-x-1 sm:gap-x-3">
                <Image src={grenade} />
                <div className="flex flex-col gap-y-1">
                  <p className="uppercase  font-bold sm:text-[12px] text-[8px]">cook time</p>
                  <p className="sm:text-[14px] text-[8px] font-medium text-[#8392A7]">
                    15 minutes
                  </p>
                </div>
              </div>
              <div className="border hidden sm:block h-[50px]"></div>
              <div className="flex items-center gap-x-3">
                <Image src={forkKnife} />
                <p className="text-[#8392A7]">chicken</p>
              </div>
            </div>
          </header>
          <div className="items-center gap-x-4" >
            <button className='rounded-full p-4  bg-[#E7FAFE]'>
             <FiPrinter className='text-[20px]' /> 
            </button>
            <button className='rounded-full p-4  bg-[#E7FAFE]'>
              <IoShareOutline className='text-[20px]' />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-y-2 justify-between mt-5">
          <div>
            <Image src={recipeImage} className="sm:w-[700px] sm:px-0 px-2" />
          </div>
          <div className="bg-[#E7FAFE] sm:w-[300px] mx-2 sm:mx-0 rounded-[10px] px-3 py-3">
            <h1 className="font-semibold py-2">Nutrition Information</h1>
            <div className="flex flex-col gap-y-3 mt-3">
              <div className="flex justify-between">
                <p className="text-[#8392A7]">calories</p>
                <p className="font-semibold">219.9 kcal</p>
              </div>
              <div className="border"></div>
              <div className="flex justify-between">
                <p className="text-[#8392A7]">Total Fat</p>
                <p className="font-semibold">10.7 g</p>
              </div>
              <div className="border"></div>
              <div className="flex justify-between">
                <p className="text-[#8392A7]">protein</p>
                <p className="font-semibold">7.9 g</p>
              </div>
              <div className="border"></div>
              <div className="flex justify-between">
                <p className="text-[#8392A7]">carbohydrate</p>
                <p className="font-semibold">22.3 g</p>
              </div>
              <div className="border"></div>
              <div className="flex justify-between">
                <p className="text-[#8392A7]">cholesterol</p>
                <p className="font-semibold">37.4 mg</p>
              </div>
              <div className="border"></div>
            </div>
            <p className="text-center text-[#8392A7] pt-28 ">
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.{" "}
            </p>
          </div>
        </div>
        <p className="pt-10 px-2 sm:px-0 text-[#8392A7]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <section className="sm:w-[1280px] flex flex-col gap-y-10 my-5 mx-auto pb-10">
        <div className="flex flex-col sm:flex-row px-2 sm:px-0 justify-between gap-x-5">
          {/* left */}
          <div className="flex flex-col gap-y-2 sm:w-[60%]">
            <p className="font-semibold text-[30px]">Ingredients</p>
            <p className="mt-3 font-bold text-[18px]">For main dish</p>
            <div className="flex gap-x-4 pt-5">
              <input
                type="checkbox"
                className="text-black peer-checked:bg-black rounded"
              />
              <label htmlFor="" className="line-through text-[#8392A7] ">
                Lorem ipsum dolor sit amet
              </label>
            </div>
            <div className="border mt-2"></div>
            <div className="flex gap-x-4 pt-5">
              <input
                type="checkbox"
                className="text-black peer-checked:bg-black rounded"
              />
              <label htmlFor="">Lorem ipsum dolor sit amet</label>
            </div>
            <div className="border mt-2"></div>
            <div className="flex gap-x-4 pt-5">
              <input
                type="checkbox"
                className="text-black peer-checked:bg-black"
              />
              <label htmlFor="">Lorem ipsum dolor sit amet</label>
            </div>
            <div className="border mt-2"></div>
            <div className="flex gap-x-4 pt-5">
              <input
                type="checkbox"
                className="text-black peer-checked:bg-black rounded"
              />
              <label htmlFor="">Lorem ipsum dolor sit amet</label>
            </div>
            <div className="border mt-2"></div>
            <div className="flex gap-x-4 pt-5">
              <input
                type="checkbox"
                className="text-black peer-checked:bg-black rounded"
              />
              <label htmlFor="">Lorem ipsum dolor sit amet</label>
            </div>
            <div className="border mt-2"></div>
          </div>
          {/* right */}
          <div className="flex flex-col gap-y-2 my-4 sm:my-0">
            <p className="font-semibold text-[30px]">Other Recipe</p>
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
        </div>
        {/* second section */}
        <div className="flex flex-col sm:flex-row justify-between px-2 sm:px-0">
          {/* left */}
          <div className="flex flex-col gap-y-2 sm:w-[60%]">
            <h1 className="font-bold text-[18px]">For the source</h1>
            <div className="flex gap-x-4 pt-5">
              <input
                type="checkbox"
                className="text-black peer-checked:bg-black rounded"
              />
              <label htmlFor="" className="">
                Lorem ipsum dolor sit amet
              </label>
            </div>
            <div className="border mt-2"></div>
            <div className="flex gap-x-4 pt-5">
              <input
                type="checkbox"
                className="text-black peer-checked:bg-black rounded"
              />
              <label htmlFor="">Lorem ipsum dolor sit amet</label>
            </div>
            <div className="border mt-2"></div>
            <div className="flex gap-x-4 pt-5">
              <input
                type="checkbox"
                className="text-black peer-checked:bg-black"
              />
              <label htmlFor="">Lorem ipsum dolor sit amet</label>
            </div>
            <div className="border mt-2"></div>
          </div>
          {/* right ads */}
          <div className="adBackground relative mt-2 sm:mt-0 w-[320px] h-[350px] ">
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
      </section>

      <section className="sm:w-[1280px] flex flex-col gap-y-3 my-5 mx-2 sm:mx-auto pb-10">
        <p className="font-bold text-[20px]">Directions</p>
        <div className="flex items-center gap-x-3 ">
          <input type="checkbox" />
          <p className="font-semibold text-[18px]">
            1. Lorem ipsum dolor sit amet{" "}
          </p>
        </div>
        <p className="mx-6 my-2 text-[#8392A7] sm:w-[700px]">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
          tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem.
        </p>
        <Image src={womanChef} className="sm:w-[650px] w-[300px] ml-5" />
        <p className="mx-6 my-2 text-[#8392A7] sm:w-[700px]">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia c
          onsequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. N
          eque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
          adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
        <div className="border sm:w-[700px] mx-6"></div>
        <div className="flex items-center gap-x-3 ">
          <input type="checkbox" />
          <p className="font-semibold text-[18px]">
            2. Lorem ipsum dolor sit amet{" "}
          </p>
        </div>
        <p className="mx-6 my-2 text-[#8392A7] sm:w-[700px]">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
          tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem.
        </p>
        <div className="border sm:w-[700px] mx-6"></div>
        <div className="flex items-center gap-x-3 ">
          <input type="checkbox" />
          <p className="font-semibold text-[18px]">
            3. Lorem ipsum dolor sit amet{" "}
          </p>
        </div>
        <p className="mx-6 my-2 text-[#8392A7] sm:w-[700px]">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
          tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem.
        </p>
        <div className="border sm:w-[700px] mx-6"></div>
      </section>

      <section className="px-3 sm:w-[1280px] mx-auto sm:py-12 py-6 pb-10 rounded-[40px] bg-[#E7F9FD] relative">
          <div className="flex flex-col sm:w-[600px] mx-auto">
            <div>
              <p className="sm:text-[40px] text-[20px] font-semibold text-center">Deliciousness to your inbox</p>
              <p className="text-center sm:w-[600px] mx-auto py-2 text-[#8392A7]">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
            <form className="flex sm:gap-x-10 mx-auto bg-white py-2 my-5 rounded-[10px] sm:px-4 items-center">
              <input className="border-none bg-none outline-none text-[14px]" type="email"  placeholder="Your email address..."/>
              <button type='submit' className="items-center px-8 rounded-[10px] py-3  bg-black text-white text-[12px]" >subscribe</button>
            </form>
          </div>
          <Image className="absolute sm:w-[250px] w-[100px] left-0 bottom-2" src={img9} />
          <Image className="absolute sm:top-[130px] sm:right-[320px] top-[100px] right-0 w-[100px] " src={img10} />
          <Image className="absolute bottom-0 sm:w-[200px]  right-0 w-[100px]" src={img11} />
        </section>

        <section className="sm:w-[1280px] my-10 mx-auto ">
          <p className="text-center font-semibold sm:text-[30px] text-[20px]">You may like these recipe too</p>
          <div className="grid sm:grid-cols-4 my-5 gap-y-16 ml-5">
            <div className="w-[250px] rounded-[10px] sm:px-2 relative">
                <Image className="mx-auto my-2 rounded-[10px]" src={img} alt="hamburger"/>
                <Image className="absolute top-5 right-7 bg-white rounded-[50%] w-[26px] pt-1 " src={heart} alt="heart shape" />
                <p className="font-semibold text-[15px] text-left py-4">Big and Juicy Wagyu Beef Cheeseburger</p>
                <div className="flex gap-x-5 pb-4">
                  <div className="flex items-center gap-x-2">
                    <Image src={grenade} alt="bomb" />
                    <p className="text-[14px] font-medium">30 Minutes</p>
                  </div>
                  <div className="flex items-center gap-x-1 ">
                    <Image src={forkKnife} alt="fork and knife" />
                    <p className="text-[14px] font-medium">Snack</p>
                  </div>
                </div>
              </div>
              <div className="w-[250px] rounded-[10px] px-2 relative">
              <Image className="mx-auto my-2 rounded-[10px]" src={img2} alt="hamburger"/>
              <Image className="absolute top-5 right-7 border bg-white rounded-[50%] " src={whiteHeart} alt="heart shape" />
              <p className="font-semibold text-[15px] text-left  py-4">Fresh Lime Roasted Salmon with Ginger Sauce</p>
              <div className="flex gap-x-5">
                <div className="flex items-center gap-x-2">
                  <Image src={grenade} alt="bomb" />
                  <p className="text-[14px] font-medium">30 Minutes</p>
                </div>
                <div className="flex items-center gap-x-1 ">
                  <Image src={forkKnife} alt="fork and knife" />
                  <p className="text-[14px] font-medium">Fish</p>
                </div>
              </div>
            </div>
            <div className="w-[250px] rounded-[10px] px-2 relative">
              <Image className="mx-auto my-2 rounded-[10px]" src={img3} alt="hamburger"/>
              <Image className="absolute top-5 right-7 border bg-white rounded-[50%]  " src={heart} alt="heart shape" />
              <p className="font-semibold text-[15px] text-left  py-4">Strawberry Oatmeal Pancake with Honey Syrup</p>
              <div className="flex gap-x-5">
                <div className="flex items-center gap-x-2">
                  <Image src={grenade} alt="bomb" />
                  <p className="text-[14px] font-medium">30 Minutes</p>
                </div>
                <div className="flex items-center gap-x-1 ">
                  <Image src={forkKnife} alt="fork and knife" />
                  <p className="text-[14px] font-medium">Healthy</p>
                </div>
              </div>
            </div>
            <div className="w-[250px] rounded-[10px] px-2 relative">
              <Image className="mx-auto rounded-[10px]" src={img4} alt="hamburger"/>
              <Image className="absolute top-5 right-7 border bg-white rounded-[50%] w-[26px] pt-1 " src={whiteHeart} alt="heart shape" />
              <p className="font-semibold text-[15px] text-left py-4">Fresh and Healthy Mixed Mayonnaise Saladr</p>
              <div className="flex gap-x-5 pb-5">
                <div className="flex items-center gap-x-2">
                  <Image src={grenade} alt="bomb" />
                  <p className="text-[14px] font-medium">30 Minutes</p>
                </div>
                <div className="flex items-center gap-x-1 ">
                  <Image src={forkKnife} alt="fork and knife" />
                  <p className="text-[14px] font-medium">Eastern</p>
                </div>
              </div>
            </div>

          </div>

        </section>
    </>
  );
};

export default Recipe;
