"use client";
import React from "react";
import { CartState } from "../context/Context";
import Rating from "./Ratings";

const FilterForm = () => {
  const {
    productDispatch,
    productState: { byStock, byFastDelivery, sort, byRating },
  } = CartState();

  return (
    <div className='m-8 border-y border-cozy-purple leading-8 lg:min-w-[200px]'>
      <h2 className='text-2xl text-cozy-purple mt-2'>Sort By</h2>
      <div>
        <label>
          <input
            type='radio'
            name='sortOrder'
            value='ascending'
            checked={sort === "lowToHigh" ? true : false}
            onChange={() =>
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: "lowToHigh",
              })
            }
          />
          <span className='ml-2 text-sm'>Ascending</span>
        </label>
      </div>
      <div>
        <label>
          <input
            type='radio'
            name='sortOrder'
            value='descending'
            checked={sort === "highToLow" ? true : false}
            onChange={() =>
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: "highToLow",
              })
            }
          />
          <span className='ml-2 text-sm'>Descending</span>
        </label>
      </div>
      <div>
        <label>
          <input
            type='checkbox'
            name='includeOutOfStock'
            checked={byStock}
            onChange={() =>
              productDispatch({
                type: "FILTER_BY_STOCK",
              })
            }
          />
          <span className='ml-2 text-sm'>Include out of stock</span>
        </label>
      </div>
      <div>
        <Rating
          rating={byRating}
          onClick={(i) =>
            productDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
          style={{ cursor: "pointer", display: "inline-block" }}
        />
        <span className='ml-2 text-sm'>By Ratings</span>
      </div>

      <button
        className='bg-cozy-light-tan p-2 w-full my-2 text-sm'
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FilterForm;
