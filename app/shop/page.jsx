"use client";
import React, { useState } from "react";
import { CartState } from "../context/Context";
import Header from "../components/Header";
import FilterForm from "../components/FilterForm";
import SingleProduct from "../components/SingleProduct";
import { FcPrevious, FcNext } from "react-icons/fc";

const Shop = () => {
  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();

  // const itemsPerPage = 5; // Number of items to display per page
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  // Calculate the range of products to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = transformProducts().slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  return (
    <>
      <Header />
      <div className='flex'>
        <FilterForm />
        <div className='container flex flex-col mt-8'>
          <div className='grid gap-1 grid-cols-3 max-w-3xl'>
            {paginatedProducts.map((prod) => (
              <SingleProduct product={prod} key={prod.id} />
            ))}
          </div>

          <div className='flex mt-8 gap-4'>
            <label>
              Items per Page:
              <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
                <option value={3}>3</option>
                <option value={6}>6</option>
              </select>
            </label>
            <button
              className='flex items-center'
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <FcPrevious /> <span>PREV</span>
            </button>
            <button
              className='flex items-center'
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={endIndex >= transformProducts().length}
            >
              <span>NEXT</span> <FcNext />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
