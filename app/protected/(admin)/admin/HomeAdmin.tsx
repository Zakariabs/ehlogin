"use client";

import Link from "next/link";
import React from "react";

export default function Header() {
  const data = [
    { label: "Manage Reservation", link: "http://localhost:3000/protected/admin/manage-reservation" },
    { label: "Manage Users", link: "http://localhost:3000/admin/manage-users" },
    { label: "Manage Products", link: "http://localhost:3000/admin/manage-products" },
  ];

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="bg-[url('/bg.svg')] -mt-10 bg-no-repeat w-full h-[222px] flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-white font-medium">
            <span>Welcome</span>
            <span className="text-xl">Admin Name Here</span>
          </div>
        </div>

        <div className="flex flex-col items-center mt-10 gap-10 w-full max-w-lg">
          {data.map((elm, i) => (
            <Link key={i} href={elm.link}>
              <div className="w-full block p-5 md:p-6 lg:p-8 rounded-lg cursor-pointer text-center font-semibold bg-[#ea5d5d] text-white text-base md:text-lg lg:text-xl">
                {elm.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
