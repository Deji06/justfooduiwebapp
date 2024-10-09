import React from "react";
import Image from "next/image";
import rectangle from "@/assets/rectangle 5.png";
import rectangle2 from "@/assets/rectangle 6.jpg";
import brown from "@/assets/brown.jpg";
import chickenDish from "@/assets/chickenPlatePic.jpg";
import avatar from "@/assets/avatar.png";
import grenade from "@/assets/grenade.png";
import forkKnife from "@/assets/ForkKnife.png";
import videoPlayerIcon from "@/assets/PlayCircle.png";
import breakfast from "@/assets/breakfast.png"
import vegan from "@/assets/vegan.png"
import meat from "@/assets/meat.png"
import onion from "@/assets/onion.png"
import ginger from "@/assets/ginger.png"
import dessert from "@/assets/dessert.png"
import lunch from "@/assets/lunch.png"
import chocolate from "@/assets/chocolate.png"
import hamburger from "@/assets/harmburger.png"
import heart from "@/assets/Heart.png"
import leaf from "@/assets/col2img.png"
import pancake from "@/assets/pancake.png"
import salad from "@/assets/salad.png"
import creamCheese from "@/assets/creamCheese.png"
import blueBerry from "@/assets/blueberrypan.png"
import rice from "@/assets/rice.png"
import baconPasta from "@/assets/baconpasta.png"
import whiteHeart from "@/assets/whiteHeart.png"
import chef from "@/assets/chef.png"
import post from "@/assets/post.png"
import post2 from "@/assets/post2.png"
import post3 from "@/assets/post3.png"
import post4 from "@/assets/post4.png"
import instagram from "@/assets/instagram.jpg"
import img from "@/assets/image 26.png"
import img2 from "@/assets/image 26 (1).png"
import img3 from "@/assets/image 26 (2).png"
import img4 from "@/assets/image 26 (3).png"
import img5 from "@/assets/image 26 (4).png"
import img6 from "@/assets/image 26 (5).png"
import img7 from "@/assets/image 26 (6).png"
import img8 from "@/assets/image 26 (7).png"
import img9 from "@/assets/image 26 (8).png"
import img10 from "@/assets/rucola-png.png"
import img11 from "@/assets/photo-plate.png"
import {Lobster } from 'next/font/google'
import adFoodImage from "@/assets/adFoodImage.png";
import star from "@/assets/star 1.png";


const lobster = Lobster({ subsets: ["latin"], weight: "400" });

const page = () => {
  return (
    <>
    {/* main container */}
     <div className="pb-2  w-[350px] sm:w-fit mx-auto">
      <div className="flex justify-evenly sm:mx-0 mx-auto gap-x-6 mt-3 w-[100%] sm:w-[100%]">
          <Image className="h-[510px] hidden sm:block" src={rectangle} alt="" />
          <div className=" flex flex-col-reverse sm:flex-row justify-between rounded-[600px] w-[100%]">
            {/* left */}
            <div className="py-10 sm:px-6 sm:h-[510px]  bg-[#E7FAFE] px-3 ">
              <div className="flex gap-x-2 items-center w-[150px] bg-white rounded-[8px] py-2 px-4">
                <Image className="w-[15px]" src={brown} />
                <p className="font-semibold text-[14px]">Hot Recipes</p>
              </div>
              <p className="font-semibold text-[18px] sm:text-[64px]">
                Spicy delicious chicken wings
              </p>
              <p className="mt-5 text-[12px] sm:text-[16px] text-[#8392A7]">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
                minim{" "}
              </p>

              <div className="flex sm:flex-row  gap-y-3 items-center gap-x-5 mt-4">
                <div className="flex items-center gap-x-2 border bg-[#DCE3ED] rounded-[10px] px-3 py-1 ">
                  <Image src={grenade} alt="bomb" />
                  <p>30 Minutes</p>
                </div>
                <div className="flex items-center gap-x-2 border bg-[#DCE3ED] rounded-[10px] px-3 py-1">
                  <Image src={forkKnife} alt="fork and knife" />
                  <p>Chicken</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-y-6 justify-between mt-14">
                <div className="flex items-center gap-x-3">
                  <Image src={avatar} alt="profile" />
                  <div className="flex flex-col gap-y-2">
                    <p className="text-[14px] font-bold">John Smith</p>
                    <p className="text-[14px] font-medium text-[#8392A7]">15 March 2022</p>
                  </div>
                </div>
                <button className="flex items-center py-3  sm:py-0 px-3 w-[200px] border gap-x-3 rounded-[10px] bg-black">
                  <p className="text-[#fff]">View Recipes</p>
                  <Image src={videoPlayerIcon} />
                </button>
              </div>
            </div>

            {/* right */}
            <div className="">
              <Image className="h-[510px] " src={chickenDish} />
            </div>
          </div>
          <Image className="h-[510px] hidden sm:block" src={rectangle2} alt="" />
        </div>

        <section className="mt-12 sm:w-[1280px] w-[350px] px-2 sm:mx-auto">
          <div className="flex items-center gap-x-16 justify-between sm:px-6">
            <p className="font-semibold sm:text-[44px]">Categories</p>
            <p className="border bg-[#E7FAFE] rounded-[10px] font-semibold px-2 py-1">View All Categories</p>
          </div>
          <div className="mt-5 sm:px-10 gap-y-4 gap-x-10 sm:gap-x-0 flex flex-wrap sm:flex-nowrap justify-between">
            <div className="flex flex-col gap-y-3 bg-pink-300 rounded-[10px]">
              <Image className="sm:w-[100px] w-[80px]" src={breakfast} />
              <p className="font-semibold sm:text-[16px] text-[12px] text-center">breakfast</p>
            </div>
            <div className="flex flex-col gap-y-3 vegan rounded-[10px]">
              <Image src={vegan} className="sm:w-[100px] w-[80px]" />
              <p className="font-semibold text-[16px] px-4">vegan</p>
            </div>
            <div className="flex flex-col gap-y-3 meat rounded-[10px]">
              <Image className="sm:w-[100px] w-[80px]" src={meat} />
              <p className="font-semibold text-[16px] px-4">meat</p>
            </div>
            <div className="flex flex-col gap-y-3 bg-red-300 rounded-[10px]">
              <Image src={dessert} className="sm:w-[100px] w-[80px]" />
              <p className="font-semibold text-[16px] px-4">dessert</p>
            </div>
            <div className="flex flex-col gap-y-3 bg-pink-300 rounded-[10px]">
              <Image src={lunch} className="sm:w-[100px] w-[80px]" />
              <p className="font-semibold text-[16px] px-4">lunch</p>
            </div>
            <div className="flex flex-col gap-y-3 bg-red-300 rounded-[10px] w-[80px] sm:w-[100px]">
              <Image src={chocolate} className="sm:w-[100px] w-[70px]" />
              <p className="font-semibold text-[16px] px-1 sm:px-2 py-2">chocolate</p>
            </div>
          </div>
        </section>
{/* second section */}
        <section className="px-3 sm:w-[1280px] w-[350px] my-12 sm:mx-auto">
          <p className="sm:text-[44px] text-[22px] font-semibold text-center">Simple and tasty recipes</p>
          <h3 className="text-center py-2 text-[#8392A7]">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut <br /> 
            labore et dolore magna aliqut enim ad minim 
          </h3>
          <div className="grid sm:grid-cols-3 gap-x-36  gap-y-6 px-10 sm:px-0 pt-10">
            <div className="w-[250px] rounded-[10px] px-2 relative recipebg">
              <Image className="mx-auto my-2 rounded-[10px]" src={hamburger} alt="hamburger"/>
              <Image className="absolute top-5 right-7 rounded-[50%] w-[26px] pt-1 " src={heart} alt="heart shape" />
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
            <div className="w-[250px] rounded-[10px] recipebg px-2 relative">
              <Image className="mx-auto my-2 rounded-[10px]" src={leaf} alt="hamburger"/>
              <Image className="absolute top-5 right-7 border rounded-[50%] " src={whiteHeart} alt="heart shape" />
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
            <div className="w-[250px] rounded-[10px] recipebg px-2 relative">
              <Image className="mx-auto my-2 rounded-[10px]" src={pancake} alt="hamburger"/>
              <Image className="absolute top-5 right-7 border bg-white rounded-[50%]  " src={whiteHeart} alt="heart shape" />
              <p className="font-semibold text-[15px] text-left  py-4">Strawberry Oatmeal Pancake with Honey Syrup</p>
              <div className="flex gap-x-5">
                <div className="flex items-center gap-x-2">
                  <Image src={grenade} alt="bomb" />
                  <p className="text-[14px] font-medium">30 Minutes</p>
                </div>
                <div className="flex items-center gap-x-1 ">
                  <Image src={forkKnife} alt="fork and knife" />
                  <p className="text-[14px] font-medium">Breakfast</p>
                </div>
              </div>
            </div>
            <div className="w-[250px] rounded-[10px] recipebg px-2 relative">
              <Image className="mx-auto my-2 rounded-[10px]" src={salad} alt="hamburger"/>
              <Image className="absolute top-5 right-7 border bg-white rounded-[50%] w-[26px] pt-1 " src={heart} alt="heart shape" />
              <p className="font-semibold text-[15px] text-left py-4">Fresh and Healthy Mixed Mayonnaise Saladr</p>
              <div className="flex gap-x-5 pb-5">
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
            <div className="w-[250px] rounded-[10px] recipebg px-2 relative">
              <Image className="mx-auto my-2 rounded-[10px]" src={creamCheese} alt="hamburger"/>
              <Image className="absolute top-5 right-7 border bg-white rounded-[50%]" src={whiteHeart} alt="heart shape" />
              <p className="font-semibold text-[15px] text-left px- py-4">Chicken Meatballs with Cream Cheese</p>
              <div className="flex gap-x-5 ">
                <div className="flex items-center gap-x-2">
                  <Image src={grenade} alt="bomb" />
                  <p className="text-[14px] font-medium">30 Minutes</p>
                </div>
                <div className="flex items-center gap-x-1 ">
                  <Image src={forkKnife} alt="fork and knife" />
                  <p className="text-[14px] font-medium">Meat</p>
                </div>
              </div>
            </div>
            {/* speacial ads */}
            <div className="adBackground relative w-[250px] h-[300px] ">
              <p
                className={`${lobster.className} text-white text-center mt-4 text-[20px]`}
              >
                Don’t forget to eat <br /> healthy food
              </p>
              <Image src={adFoodImage} className="absolute z-10 top-18 left-" />
              <Image
                src={star}
                className=" star absolute top-[16px] left- z-5 w-[450px]"
              />
              <p className="adText text-center text-[14px] absolute bottom-3 left-16">
                www.foodieland.com
              </p>
            </div>
            <div className="w-[250px] rounded-[10px] recipebg px-2 relative">
              <Image className="mx-auto my-2 rounded-[10px]" src={blueBerry} alt="hamburger"/>
              <Image className="absolute top-5 right-7 border bg-white rounded-[50%] w-[26px] pt-1 " src={heart} alt="heart shape" />
              <p className="font-semibold text-[15px] text-left px- py-4">Fruity Pancake with Orange & Blueberry</p>
              <div className="flex gap-x-5 pb-4 ">
                <div className="flex items-center gap-x-2">
                  <Image src={grenade} alt="bomb" />
                  <p className="text-[14px] font-medium">30 Minutes</p>
                </div>
                <div className="flex items-center gap-x-1 ">
                  <Image src={forkKnife} alt="fork and knife" />
                  <p className="text-[14px] font-medium">Sweet</p>
                </div>
              </div>
            </div>
            <div className="w-[250px] rounded-[10px] recipebg px-2 relative">
              <Image className="mx-auto my-2 rounded-[10px]" src={rice} alt="hamburger"/>
              <Image className="absolute top-5 right-7 border bg-white rounded-[50%]" src={whiteHeart} alt="heart shape" />
              <p className="font-semibold text-[15px] text-left px- py-4">The Best Easy One Pot Chicken and Rice</p>
              <div className="flex gap-x-5 ">
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
            <div className= "w-[250px] rounded-[10px] recipebg px-2 relative">
              <Image className="mx-auto my-2 rounded-[10px]" src={baconPasta} alt="hamburger"/>
              <Image className="absolute top-5 right-7 border bg-white rounded-[50%]" src={whiteHeart} alt="heart shape" />
              <p className="font-semibold text-[15px] text-left px- py-4">The Creamiest Creamy Chicken and Bacon Pasta Noodles</p>
              <div className="flex gap-x-5">
                <div className="flex items-center gap-x-2">
                  <Image src={grenade} alt="bomb" />
                  <p className="text-[14px] font-medium">30 Minutes</p>
                </div>
                <div className="flex items-center gap-x-1 ">
                  <Image src={forkKnife} alt="fork and knife" />
                  <p className="text-[14px] font-medium">Noodles</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sm:px-3 sm:w-[1280px]  my-16 mx-auto flex sm:flex-row flex-col gap-y-4 items-center justify-between">
          <div className='w-[100%] pb-2 px-3 sm:px-0'>
            <p className="sm:text-[44px] text-[20px] sm:w-[60%] font-semibold">Everyone can be a chef in their own kitchen</p>
            <p className="sm:w-[508px] py-3 text-[#8392A7]">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            <button className="mt-8 px-8 rounded-[10px] py-3  bg-black text-white text-[12px]">Learn More</button>
          </div>
          <div className="relative ">
            <Image className="w-[500px]" src={chef} alt="happy chef" />
            <Image className="absolute top-16 left-16 w-[70px]" src={meat} />
            <Image className="absolute top-28 w-[60px] right-0" src={vegan} alt="lettuce" />
            <Image className="absolute top-16 w-[50px] right-28 " src={onion} alt="onion" />
            <Image className="absolute bottom-20 w-[50px] left-4" src={ginger} alt="ginger" />
          </div>
        </section>

        <section className="px-3 sm:w-[1280px] my-16 mx-auto pb-10 recipebg">
          <p className="text-[44px] font-semibold text-center">Check out @foodieland on Instagram</p>
          <p className="text-center py-2 text-[#8392A7]">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqut enim ad minim </p>
          <div className="flex sm:flex-row flex-col gap-y-3 justify-between sm:px-0 px-10  mt-8">
            <Image src={post} />
            <Image src={post2} />
            <Image src={post3} />
            <Image src={post4} />
          </div>
          <button className=" flex mx-auto items-center gap-x-2 mt-12 px-8 rounded-[10px] py-3  bg-black text-white text-[12px]">Visit Our Instagram <Image src={instagram} /> </button>
        </section>

        <section className="px-3 sm:w-[1280px] my-16 mx-auto pb-10" >
          <div className="flex flex-col sm:flex-row items-center gap-y-4 justify-between">
            <p className="text-[40px] font-semibold">Try this delicious recipe make your day</p>
            <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
          </div>
          <div className="grid sm:grid-cols-4 my-5 gap-y-5 ">
          <div className="w-[250px] rounded-[10px] px-2 relative">
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
            <div className="w-[250px]  rounded-[10px] px-2 relative">
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
            <div className="w-[250px] rounded-[10px] px-2 relative">
              <Image className="mx-auto my-2 rounded-[10px]" src={img5} alt="hamburger"/>
              <Image className="absolute top-5 right-7 border bg-white rounded-[50%]" src={heart} alt="heart shape" />
              <p className="font-semibold text-[15px] text-left px- py-4">Chicken Meatballs with Cream Cheese</p>
              <div className="flex gap-x-5 ">
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
              <Image className="mx-auto my-2 rounded-[10px]" src={img6} alt="hamburger"/>
              <Image className="absolute top-5 right-7 border bg-white rounded-[50%] w-[26px] pt-1 " src={whiteHeart} alt="heart shape" />
              <p className="font-semibold text-[15px] text-left px- py-4">Fruity Pancake with Orange & Blueberry</p>
              <div className="flex gap-x-5 pb-4 ">
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
              <Image className="mx-auto my-2 rounded-[10px]" src={img7} alt="hamburger"/>
              <Image className="absolute top-5 right-7 border bg-white rounded-[50%]" src={whiteHeart} alt="heart shape" />
              <p className="font-semibold text-[15px] text-left px- py-4">The Best Easy One Pot Chicken and Rice</p>
              <div className="flex gap-x-5 ">
                <div className="flex items-center gap-x-2">
                  <Image src={grenade} alt="bomb" />
                  <p className="text-[14px] font-medium">30 Minutes</p>
                </div>
                <div className="flex items-center gap-x-1 ">
                  <Image src={forkKnife} alt="fork and knife" />
                  <p className="text-[14px] font-medium">Seafood</p>
                </div>
              </div>
            </div>
            <div className="w-[250px] rounded-[10px] px-2 relative">
              <Image className="mx-auto my-2 rounded-[10px]" src={img8} alt="hamburger"/>
              <Image className="absolute top-5 right-7 border bg-white rounded-[50%]" src={heart} alt="heart shape" />
              <p className="font-semibold text-[15px] text-left px- py-4">The Creamiest Creamy Chicken and Bacon Pasta Noodles</p>
              <div className="flex gap-x-5">
                <div className="flex items-center gap-x-2">
                  <Image src={grenade} alt="bomb" />
                  <p className="text-[14px] font-medium">30 Minutes</p>
                </div>
                <div className="flex items-center gap-x-1 ">
                  <Image src={forkKnife} alt="fork and knife" />
                  <p className="text-[14px] font-medium">Japanese</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-3 sm:w-[1280px] mx-auto sm:py-12 py-6 rounded-[40px] border bg-[#E7F9FD] relative">
          <div className="flex flex-col sm:w-[600px] mx-auto">
            <div>
              <p className="sm:text-[40px] text-[20px] font-semibold text-center">Deliciousness to your inbox</p>
              <p className="text-center sm:w-[600px] mx-auto py-2 text-[#8392A7]">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
            <form className="flex sm:gap-x-10 sm:mx-auto bg-white py-2 my-5 rounded-[10px] px-2 sm:px-4 items-center">
              <input className="border-none bg-none outline-none text-[14px]" type="email"  placeholder="Your email address..."/>
              <button type='submit' className="items-center px-8 rounded-[10px] py-3  bg-black text-white text-[12px]" >subscribe</button>
            </form>
          </div>
          <Image className="absolute sm:w-[250px] w-[100px] left-0 bottom-2" src={img9} />
          <Image className="absolute sm:top-[130px] top-[100px] sm:right-[320px] right-0 w-[100px] " src={img10} />
          <Image className="absolute bottom-0 sm:w-[200px] w-[80px] right-0" src={img11} />
        </section>

     </div>
    </>
  );
};

export default page;
