"use client";
import Link from "next/link";
import React from "react";

export default function Home() {
  const data = [
    { label: "Products", link: "user/Inventory" },
    { label: "Return", link: "user/Return" },
    { label: "Contact Us", link: "user/Contact" },
  ];

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="bg-[url('/bg.svg')] -mt-10 bg-no-repeat w-full h-[222px] flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-white font-medium">
            <span className="text-lg md:text-2xl lg:text-3xl">Welcome</span>
            <span className="text-xl md:text-3xl lg:text-4xl italic">User Name Here</span>
          </div>
        </div>

        <div className="flex flex-col items-center mt-10 gap-10 w-full max-w-lg">
          {data.map((elm, i) => (
            <Link key={i} href={elm.link}>
              <div className="w-full block p-5 md:p-6 lg:p-8 rounded-lg cursor-pointer text-center font-semibold bg-cyan-500 text-white text-base md:text-lg lg:text-xl">
                {elm.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
