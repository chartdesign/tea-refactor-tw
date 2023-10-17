"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch, BiSolidUpArrow } from "react-icons/bi";
import {
  AiOutlineCloseCircle,
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineCaretDown,
  AiOutlineClose,
  AiFillDelete,
} from "react-icons/ai";

import Link from "next/link";
import { CartState } from "../context/Context";
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // cart-dropdown-states
  const [isCartOpen, setCartOpen] = useState(false);
  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  return (
    <nav className='bg-white p-4 border-b border-gray-300'>
      <div className='container mx-auto flex items-center justify-between '>
        <div className=' text-xl font-bold w-1/4'>
          <Link href='/'>
            <span className='text-cozy-purple'>Cozy Tea Shop</span>
          </Link>
        </div>

        {/* Hamburger Menu Icon (visible on small screens) */}
        <div className='lg:hidden'>
          <div className='flex items-center'>
            <AiOutlineUser className='mr-4' />
            <AiOutlineShoppingCart className='mr-4' />
            <GiHamburgerMenu
              className='text-bg-gray-700 text-3xl cursor-pointer'
              onClick={toggleMobileMenu}
            />
          </div>
        </div>

        {/* Mobile Navigation Menu (hidden on larger screens) */}
        {isMobileMenuOpen && (
          <div className='lg:hidden absolute inset-0 bg-zinc-50 z-50'>
            <div className='lg:hidden grid justify-items-end mt-4 mr-4'>
              <div>
                <AiOutlineCloseCircle
                  className='text-bg-gray-700 text-3xl cursor-pointer '
                  onClick={toggleMobileMenu}
                />
              </div>
            </div>
            <div className='flex flex-col items-center  h-full space-y-4 mt-8'>
              <Link
                href='/shop'
                className='text-bg-gray-700 text-xl hover:text-gray-400 mt-4'
              >
                Shop
              </Link>
              <Link
                href='/cart'
                className='text-bg-gray-700 text-xl hover:text-gray-400 mt-4'
              >
                Cart
              </Link>
              <Link
                href='#'
                className='text-bg-gray-700 text-xl hover:text-gray-400 mt-4'
              >
                Account
              </Link>
              <div className='flex items-center space-x-4 '>
                <input
                  type='text'
                  placeholder='Search...'
                  className='bg-gray-700 text-bg-gray-700 px-3 py-1 '
                />
              </div>
            </div>
          </div>
        )}

        {/* Desktop Navigation Links (hidden on small screens) */}

        <div className='hidden lg:flex justify-between w-3/5 relative'>
          <div className='flex items-center space-x-4 border-b border-gray-400'>
            <input
              type='text'
              placeholder='Search...'
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
              className='bg-white text-bg-gray-700 px-3 py-1 rounded-md outline-none'
            />
            <BiSearch />
          </div>
          <div className='flex'>
            <a
              href='#'
              className='flex items-center text-bg-gray-700 hover:text-gray-400 ml-4'
            >
              <AiOutlineHeart className='mr-1' />
              WISHLIST
            </a>
            <a
              href='#'
              className='flex items-center text-bg-gray-700 hover:text-gray-400 ml-4'
            >
              <AiOutlineUser className='mr-1' />
              ACCOUNT
            </a>
            <span
              className='flex items-center text-bg-gray-700 hover:text-gray-400 ml-4 cursor-pointer'
              onClick={toggleCart}
            >
              <AiOutlineShoppingCart className='mr-1' />
              <span className='bg-cozy-purple text-white py-0 px-1 mr-1 rounded-full h-3/4 content-center'>
                {cart.length}
              </span>
              CART
              <AiOutlineCaretDown />
            </span>

            {/* cart-dropdown-menu */}
            {isCartOpen && (
              <div className='absolute bg-cozy-light-tan p-4 rounded-2xl z-40'>
                <div
                  className='flex justify-end my-4 cursor-pointer'
                  onClick={toggleCart}
                >
                  <div className='flex items-center gap-1'>
                    Close
                    <BiSolidUpArrow />
                  </div>
                </div>

                {cart.length > 0 ? (
                  <>
                    {cart.map((prod) => (
                      <div
                        className='grid grid-cols-3 my-8 border-t border-cozy-purple p-4 justify-between'
                        key={prod.id}
                      >
                        <img
                          src={prod.image}
                          className='w-[75px] h-[75px] object-cover rounded-full'
                          alt={prod.name}
                        />
                        <div className='w-[120px]'>
                          <p className='text-sm'>{prod.name}</p>
                          <p>${prod.price}</p>
                        </div>
                        <AiFillDelete
                          fontSize='20px'
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: prod,
                            })
                          }
                        />
                      </div>
                    ))}
                    <Link href='/cart'>
                      <div className='mx-auto w-9/12'>
                        <button className='bg-cozy-purple p-2 text-white w-full'>
                          Go To Cart
                        </button>
                      </div>
                    </Link>
                  </>
                ) : (
                  <span style={{ padding: 10 }}>Cart is Empty!</span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* bottom row links */}
      <div className='hidden lg:flex container mx-auto items-center justify-center mt-4 border-t border-gray-300 pt-2'>
        <Link href='/shop' className='text-bg-gray-700 hover:text-gray-400 '>
          SHOP
        </Link>
        <a href='#' className='text-bg-gray-700 hover:text-gray-400 ml-8'>
          SUBSCRIBE
        </a>
        <a href='#' className='text-bg-gray-700 hover:text-gray-400 ml-8'>
          ABOUT US
        </a>
        <a href='#' className='text-bg-gray-700 hover:text-gray-400 ml-8'>
          FAQ/CONTACT
        </a>
      </div>
    </nav>
  );
};

export default Header;
