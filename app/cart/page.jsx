"use client";
import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/Context";
import Rating from "../components/Ratings";

import Link from "next/link";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div className='shopping-cart'>
      <h2 className='text-lg m-4'>Shoppin Cart</h2>
      <div className='lg:flex max-w-[1080px] m-auto'>
        <ul className='lg:w-3/5'>
          {cart.map((prod) => (
            <li key={prod.id} className='grid grid-cols-4 m-4'>
              <div>
                <img
                  src={prod.image}
                  alt={prod.name}
                  className='w-[100px] h-[100px] object-cover rounded-2xl'
                />
              </div>
              <div>
                <span className='text-sm font-light'>{prod.name}</span>
              </div>

              {/* add or remove from cart */}
              <div>
                <select
                  id='select'
                  value={prod.qty}
                  onChange={(e) =>
                    dispatch({
                      type: "CHANGE_CART_QTY",
                      payload: {
                        id: prod.id,
                        qty: e.target.value,
                      },
                    })
                  }
                >
                  {[...Array(prod.inStock).keys()].map((x) => (
                    <option key={x + 1}>{x + 1}</option>
                  ))}
                </select>
                <div
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: prod,
                    })
                  }
                >
                  <span className='text-blue-300 text-sm cursor-pointer'>
                    Remove{" "}
                  </span>
                </div>
              </div>
              <div>$ {prod.price}</div>
            </li>
          ))}
        </ul>
        {/* order summary */}
        <div className='bg-zinc-50 p-4 m-4 leading-10 rounded-2xl lg:w-2/5'>
          <div className='flex justify-between'>
            <span className='title'>Subtotal ({cart.length}) items</span>
            <span style={{ fontWeight: 400, fontSize: 20 }}>
              Total: $ {Number(total).toFixed(2)}
            </span>
          </div>
          <div className='mx-auto'>
            <button
              disabled={cart.length === 0}
              className='bg-blue-600 p-1 text-white rounded-xl w-full'
            >
              Proceed to Checkout
            </button>
            <Link href='/shop'>
              {" "}
              <p className='text-blue-400 cursor-pointer'>
                or Continue Shopping
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
