import { CartState } from "../context/Context";
import Rating from "./Ratings";

const SingleProduct = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className='border border-cozy-purple p-4 mx-1 max-w-[220px] flex flex-col justify-between gap-2 rounded-lg'>
      <div>
        <img
          className='w-full max-h-[100px] rounded-lg object-cover mx-auto'
          src={product.image}
          alt={product.name}
        />
      </div>
      <p className='font-medium leading-5'>{product.name}</p>
      <p className='flex items-center'>
        <span>
          <Rating
            rating={product.ratings}
            style={{ display: "inline-block" }}
          />
        </span>
        ({product.reviews}) <span className='text-sm'>Reviews</span>
      </p>
      <p className='font-light text-xs'>{product.description}</p>

      <p className='card-info'>Price: ${product.price}</p>

      {cart.some((p) => p.id === product.id) ? (
        <button
          className='bg-cozy-dark-tan text-cozy-purple rounded-xl py-1'
          onClick={() =>
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: product,
            })
          }
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className='bg-cozy-purple text-white rounded-xl py-1 hover:bg-white hover:text-cozy-purple hover:border border-cozy-purple'
          onClick={() =>
            dispatch({
              type: "ADD_TO_CART",
              payload: product,
            })
          }
          disabled={product.inStock === 0}
        >
          {product.inStock === 0 ? "Out of Stock" : "Add to Cart"}
        </button>
      )}

      {/* <button className='card-btn'>Add to Cart</button> */}
    </div>
  );
};

export default SingleProduct;
