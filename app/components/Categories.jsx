import React from "react";

const Categories = () => {
  return (
    <section className='bg-gradient-to-b from-cozy-light-tan to-white mt-4 p-4'>
      <div className='max-w-[1080px] m-auto'>
        <h1 className='text-cozy-purple text-lg mb-4 text-center'>
          Shop Our Teas
        </h1>
        <div className='grid grid-cols-2 md:grid-cols-4 '>
          <div className='flex flex-col items-center'>
            <img
              src='https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=800'
              alt='tea1'
              className='w-[150px] h-[150px] object-cover rounded-2xl'
            />
            <p>Green Teas</p>
          </div>
          <div className='flex flex-col items-center'>
            <img
              src='https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=800'
              alt='tea1'
              className='w-[150px] h-[150px] object-cover rounded-2xl'
            />
            <p>Black Teas</p>
          </div>
          <div className='flex flex-col items-center'>
            <img
              src='https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=800'
              alt='tea1'
              className='w-[150px] h-[150px] object-cover rounded-2xl'
            />
            <p>Herbal Teas</p>
          </div>
          <div className='flex flex-col items-center'>
            <img
              src='https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=800'
              alt='tea1'
              className='w-[150px] h-[150px] object-cover rounded-2xl'
            />
            <p>Chai Teas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
