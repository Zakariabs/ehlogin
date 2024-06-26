import { Product } from "../../../../../types/Product";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from 'next/link';
async function getAsingleProduct(id: number) {
  try {
    let res = await fetch(`https://dummyjson.com/products/${id}`);

    if (res) {
      let r = await res.json();
      return r;
    }
  } catch (e) {
    console.log(e);
  }
}

export default async function page({ params }: { params: { id: any } }) {
  let data: Product = await getAsingleProduct(params.id);

  return (
    <>
      <div className="flex flex-col justify-center items-center h-[600px] ">
        <div className="flex flex-col justify-center gap-2">
          <div className="bg-white rounded-3xl p-10">
            <img
              alt={data.title}
              height="150"
              src={data.images[0]}
              width="400"
              style={{ border: "2px solid #ea5d5d" }} // Add border style here
            />
          </div>
          <p className="font-bold text-3xl ml-4">{data.title}</p>
          <p className="ml-4">{data.stock} units</p>
        </div>
        <Link href="/user/return">
          <Button variant={'secondary'} className="bg-cyan-500">reserve</Button>
        </Link>
      </div>
    </>
  );
}
