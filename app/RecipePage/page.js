import React from "react";
import Image from "next/image";
import avatar from "@/assets/avatar.png";
import grenade from "@/assets/grenade.png";
import forkKnife from "@/assets/ForkKnife.png";
import share from "@/assets/share.png";
import printer from "@/assets/printer.png";
import recipeImage from "@/assets/recipeImage.png";
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
                <p className="text-[14px] font-medium">15 March 2022</p>
              </div>
            </div>
            <div className="border h-[50px]"></div>
            <div className="flex items-center gap-x-3">
              <Image src={grenade} />
              <div className="flex flex-col gap-y-1">
                <p className="uppercase font-bold text-[12px]">prep time</p>
                <p className="text-[14px] font-medium">15 minutes</p>
              </div>
            </div>
            <div className="border h-[50px]"></div>
            <div className="flex items-center gap-x-3">
              <Image src={grenade} />
              <div className="flex flex-col gap-y-1">
                <p className="uppercase  font-bold text-[12px]">cook time</p>
                <p className="text-[14px] font-medium">15 minutes</p>
              </div>
            </div>
            <div className="border h-[50px]"></div>
            <div className="flex items-center gap-x-3">
              <Image src={forkKnife} />
              <p>chicken</p>
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
              <p>calories</p>
              <p className="font-semibold">219.9 kcal</p>
            </div>
            <div className="border"></div>
            <div className="flex justify-between">
              <p>Total Fat</p>
              <p className="font-semibold">10.7 g</p>
            </div>
            <div className="border"></div>
            <div className="flex justify-between">
              <p>protein</p>
              <p className="font-semibold">7.9 g</p>
            </div>
            <div className="border"></div>
            <div className="flex justify-between">
              <p>carbohydrate</p>
              <p className="font-semibold">22.3 g</p>
            </div>
            <div className="border"></div>
            <div className="flex justify-between">
              <p>cholesterol</p>
              <p className="font-semibold">37.4 mg</p>
            </div>
            <div className="border"></div>
          </div>
          <p className="text-center pt-32 ">
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.{" "}
          </p>
        </div>
      </div>
      <p className="pt-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </section>
    <section className="flex flex-col">
      <div className="flex">

      </div>
      <div></div>

    </section>
    </>
  );
};

export default Recipe;
