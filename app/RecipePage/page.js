import React from "react";
import Image from "next/image";
import avatar from "@/assets/avatar.png";
import grenade from "@/assets/grenade.png";
import forkKnife from "@/assets/ForkKnife.png";
import share from "@/assets/share.png";
import printer from "@/assets/printer.png";
import recipeImage from "@/assets/recipeImage.png";
import baconPasta from "@/assets/baconPasta.png";
import creamCheese from "@/assets/creamCheese.png";
import rice from "@/assets/rice.png";
import adFoodImage from "@/assets/adFoodImage.png";
import star from '@/assets/star 1.png'
import {Lobster } from '@next/font/google'

const lobster = Lobster({ subsets: ['latin'], weight:'400' });
const Recipe = () => {
  return (
    <>
      <section className=" sm:w-[1280px] my-5 mx-auto pb-10">
        <div className="flex justify-between">
          <header className="flex flex-col gap-y-3">
            <h1 className="font-semibold text-[44px]">
              Health Japanese Fried Rice
            </h1>
            <div className="flex gap-x-5">
              <div className="flex items-center gap-x-3">
                <Image src={avatar} alt="profile" />
                <div className="flex flex-col gap-y-1">
                  <p className="text-[14px] font-bold">John Smith</p>
                  <p className="text-[14px] font-medium text-[#8392A7] ">
                    15 March 2022
                  </p>
                </div>
              </div>
              <div className="border h-[50px]"></div>
              <div className="flex items-center gap-x-3">
                <Image src={grenade} />
                <div className="flex flex-col gap-y-1">
                  <p className="uppercase font-bold text-[12px]">prep time</p>
                  <p className="text-[14px] font-medium text-[#8392A7]">
                    15 minutes
                  </p>
                </div>
              </div>
              <div className="border h-[50px]"></div>
              <div className="flex items-center gap-x-3">
                <Image src={grenade} />
                <div className="flex flex-col gap-y-1">
                  <p className="uppercase  font-bold text-[12px]">cook time</p>
                  <p className="text-[14px] font-medium text-[#8392A7]">
                    15 minutes
                  </p>
                </div>
              </div>
              <div className="border h-[50px]"></div>
              <div className="flex items-center gap-x-3">
                <Image src={forkKnife} />
                <p className="text-[#8392A7]">chicken</p>
              </div>
            </div>
          </header>
          <div className="flex">
            <Image className="w-[20px]" src={printer} />
            <Image src={share} />
          </div>
        </div>

        <div className="flex justify-between mt-5">
          <div>
            <Image src={recipeImage} className="w-[700px]" />
          </div>
          <div className="bg-[#E7FAFE] w-[300px] rounded-[10px] px-3 py-3 mr-10">
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
            <p className="text-center text-[#8392A7] pt-32 ">
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.{" "}
            </p>
          </div>
        </div>
        <p className="pt-10 text-[#8392A7]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <section className="sm:w-[1280px] flex flex-col gap-y-10 my-5 mx-auto pb-10 ">
        <div className="flex justify-between gap-x-5">
          {/* left */}
          <div className="flex flex-col gap-y-2 w-[60%]">
            <p className="font-semibold text-[30px]">Ingredients</p>
            <p className="mt-3 font-bold text-[18px]">For main dish</p>
            <div className="flex gap-x-4 pt-5">
              <input
                type="checkbox"
                className="text-black peer-checked:bg-black rounded"
              />
              <label htmlFor="" className="line-through text-[#8392A7]">
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
          <div className="flex flex-col gap-y-2">
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
        <div className="flex">
          {/* left */}
          <div className="flex flex-col gap-y-2 w-[60%]">
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
          <div className="adBackground relative rounded-[10px] w-[400px] h-[400px] ">
            <p className={`${lobster.className} text-white text-center mt-4 text-[20px]`}>Don’t forget to eat <br /> healthy food</p>
            <Image src={adFoodImage} className="absolute z-20 top-12 left-5" />
            <Image src={star} className="absolute top-[20px] left-10 z-10 w-[300px]" />
            <p className="adText text-center absolute bottom-5 left-32">www.foodieland.com</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recipe;
