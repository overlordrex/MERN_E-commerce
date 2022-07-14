import React from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoBagCheckOutline } from 'react-icons/io5';
import { HiUserCircle } from 'react-icons/hi';

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);

  return (
    <nav className=" w-full sticky top-0 z-10 bg-white h-[50px] lg:h-[60px] py-[20px] px-[20px] flex items-center justify-between">
      <div className=" capitalize">
        <Link to={'/'}>
          <p className=" text-[30px] capitalize headText font-bold">
            ope's clothes
          </p>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link to={`/user/${user?._id}`}>
          <HiUserCircle fontSize={30} />
        </Link>

        <Link to={'/cart'} className=" relative flex items-center">
          <IoBagCheckOutline fontSize={25} />
          {quantity > 0 && (
            <div className="absolute -top-3 -right-3 min-h-[15px] w-[15px] min-w-[15px] h-[15px] flex items-center justify-center p-3 text-center text-white text-[12px]  bg-red-600  rounded-full">
              {quantity}
            </div>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
