"use client";
import { headers } from "@/next.config";
import Image from "next/image";
import { Cinzel } from "next/font/google";
import { useState } from "react";

const cinzel = Cinzel({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const snow = "https://i.ibb.co/DbKS19P/snow.png";

const bg =
  "https://i.pinimg.com/564x/e7/70/77/e770778d703c029c687a05304291376c.jpg";

export default function Home() {
  const [star, setStar] = useState(false);
  const [light, setLight] = useState(false);
  const [decor, setDecor] = useState(false);
  return (
    <>
      <header
        className="min-h-screen bg-no-repeat  bg-cover  relative"
        style={{
          backgroundImage: `url(/bg2.png)`,
        }}
      >
        <div
          className="snow absolute top-0 left-0 w-[100%] h-[100%] z-10 bg-left-top "
          style={{
            backgroundImage: `url(${snow})`,
          }}
        ></div>
        <div
          className="snow2 absolute top-0 left-0 w-[100%] h-[100%] z-10 bg-left-top "
          style={{
            backgroundImage: `url(${snow})`,
          }}
        ></div>
        <div className="text"></div>
        {/* star */}

        <div className="star flex justify-center mr-10">
          <img
            className={` absolute h-12 w-12 top-[28vh] transition duration-150 ease-in  ${
              star ? "opacity-100" : "opacity-0"
            } `}
            src="/star3.png"
            alt=""
          />
        </div>

        {/* light group 1 */}
        <div className="l1 flex justify-center">
          <img
            className={`absolute h-52 w-52 top-[68vh] z-50 transition duration-150 ease-in  ${
              light ? "opacity-100" : "opacity-0"
            } `}
            src="/l1.png"
            alt=""
          />
        </div>

        {/* Light group 2 */}

        <div className="l2 flex justify-center">
          <img
            className={`absolute h-52 w-52 z-50 top-[70vh] transition duration-150 ease-in  ${
              light ? "opacity-100" : "opacity-0"
            } `}
            src="/l2.png"
            alt=""
          />
        </div>
        <div className="l2 flex justify-center">
          <img
            className={`absolute h-40 w-44 z-50 top-[50vh] transition duration-150 ease-in  ${
              light ? "opacity-100" : "opacity-0"
            }`}
            src="/l2.png"
            alt=""
          />
        </div>

        {/* light group 3 */}
        <div className="l3 flex justify-center">
          <img
            className={`absolute h-96 w-60 top-[43vh] z-50 transition duration-150 ease-in  ${
              decor ? "opacity-40" : "opacity-0"
            } `}
            src="/l3.png"
            alt=""
          />
        </div>

        {/*Tree  */}
        <div className=" flex justify-center ">
          <img
            className="z-30 h-[70vh] absolute bottom-0"
            src="/tree.png"
            alt=""
          />
        </div>
        {/* button group */}
        <div className="z-50 relative flex gap-10 items-center flex-col">
          <div>
            <h1
              className={`${cinzel.className} text-white text-3xl md:text-5xl mt-10`}
            >
              DECORATE MY TREE
            </h1>
          </div>
          <div className="flex gap-10">
            <button
              onClick={() => {
                light ? setLight(false) : setLight(true);
                console.log(light);
              }}
              className={` btn1 transition duration-300  ${cinzel.className} transition  bg-gradient-to-r from-purple-500 to-pink-500 py-2 px-3 md:py-4 md:px-6 md:text-3xl text-white text-sm  rounded-md hover:opacity-80 hover:ease-out`}
            >
              lights
            </button>
            <button
              onClick={() => {
                star ? setStar(false) : setStar(true);
                console.log(star);
              }}
              className={`btn1 ${cinzel.className} transition bg-gradient-to-r from-purple-500 to-pink-500 py-2 px-3 md:py-4 md:px-6 md:text-3xl text-white text-sm  rounded-md hover:opacity-80`}
            >
              Star
            </button>
            <button
              onClick={() => {
                decor ? setDecor(false) : setDecor(true);
                console.log(decor);
              }}
              className={`btn1 ${cinzel.className} transition bg-gradient-to-r from-purple-500 to-pink-500 py-2 px-3 md:py-4 md:px-6 md:text-3xl text-white text-sm  rounded-md hover:opacity-80`}
            >
              Decor
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            className="absolute bottom-0 h-20 ml-36 z-50 opacity-55 "
            src="/s-cat.gif"
          ></img>
        </div>
      </header>
    </>
  );
}
