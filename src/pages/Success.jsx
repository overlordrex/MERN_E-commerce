import React from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Success = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <div className=" flex flex-col items-center justify-center">
        <GiShoppingCart className=" text-green-600" fontSize={150} />
        <div className="  font-semibold mb-2 capitalize text-[1.3rem]">
          thanks for shopping with us
        </div>
        <div className=" flex items-center gap-3 mt-3 text-center">
          <Link to={'/'}>
            <div className=" outline-none rounded-full w-[100px] md:w-[120px] border-2 border-black     lg:w-[150px] bg-black text-white p-2 ">
              Home
            </div>
          </Link>
          <Link to={`/user/${user?._id}`}>
            <div className=" outline-none rounded-full   w-[100px] md:w-[120px]    lg:w-[150px] p-2 border-2 border-black bg-black text-white capitalize">
              Orders
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
