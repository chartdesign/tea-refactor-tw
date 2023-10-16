"use client";
import React from "react";
import { products } from "../data";
import SingleProduct from "../components/SingleProduct";
import Link from "next/link";

const PopularItems = () => {
  const items = products.filter((prod) => prod.ratings > 4);

  return (
    <section className='bg-gradient-to-t from-cozy-light-tan to-white p-8 mt-8'>
      <div className='max-w-[980px] m-auto'>
        <div className='flex justify-between mb-4'>
          <span className='text-cozy-purple'>Pupular Teas</span>
          <Link href='/shop'>
            {" "}
            <span className='text-cozy-purple cursor-pointer'>View All</span>
          </Link>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 m-auto'>
          {items.slice(0, 4).map((prod) => (
            <SingleProduct product={prod} key={prod.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularItems;
