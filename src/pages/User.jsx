import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { IoBagCheckOutline } from 'react-icons/io5';
import { BsReceipt } from 'react-icons/bs';

const User = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [userOrder, setUserOrder] = useState([]);
  const quantity = useSelector((state) => state.cart.quantity);

  useEffect(() => {
    if (user) {
      const userId = user._id;
      const getOrder = async () => {
        try {
          const { data } = await axios.get(
            user && `https://opes-store.herokuapp.com/api/orders/find/${userId}`
          );
          setUserOrder(data);
        } catch (err) {
          console.log(err);
        }
      };
      getOrder();
    }
  }, [user]);

  return (
    <div className=" bg-slate-100 w-full h-screen ">
      <div className=" bg-[#24262b] p-4 sticky w-full top-0">
        <div>
          <div className=" flex justify-between items-center gap-5 capitalize mb-6 text-white text-[24px] font-bold">
            <Link to={'/'}>
              <BiArrowBack fontSize={25} />
            </Link>
            <span>Account</span>

            <Link to={'/cart'} className=" relative flex items-center">
              <IoBagCheckOutline fontSize={25} />
              {quantity > 0 && (
                <div className="absolute -top-3 -right-3 min-h-[15px] w-[15px] min-w-[15px] h-[15px] flex items-center justify-center p-3 text-center text-white text-[12px]  bg-red-600  rounded-full">
                  {quantity}
                </div>
              )}
            </Link>
          </div>

          <div className="text-[18px]  text-white capitalize  font-semibold">
            welcome {user?.username}
          </div>
          <div className="-mt-2 mb-[10px] text-[15px]  text-[#bbbbbb] block">
            {user?.email}
          </div>
        </div>
      </div>
      <div className="  mx-4 my-[20px] flex items-center ">
        <div className="  w-[40px] h-[40px]  bg-[#24262b] mr-[10px] mb-[10px] text-center flex justify-center items-center rounded-full text-white ">
          <BsReceipt fontSize={20} />
        </div>
        <div className="text-[18px] ml-2"> Order reciepts</div>
      </div>

      <div className=" px-4">
        {userOrder.map((order) => (
          <div key={order._id} className=" bg-white p-4 mb-3">
            <div className=" font-bold mb-[1px] lg:mb-1 capitalize text-[0.85rem] lg:text-[1rem]">
              Order ID:
              <span className=" text-gray-600 font-normal ml-2  capitalize text-[0.75rem] lg:text-[0.85rem]">
                {order._id}
              </span>
            </div>
            <div className=" font-bold mb-[1px] lg:mb-1 capitalize text-[0.85rem] lg:text-[1rem]">
              Quantity:
              <span className=" text-gray-600 font-normal ml-2  capitalize text-[0.75rem] lg:text-[0.85rem]">
                {order.quantity}
              </span>
            </div>
            <div className=" font-bold mb-[1px] lg:mb-1 capitalize text-[0.85rem] lg:text-[1rem]">
              Amount:
              <span className=" text-gray-600 font-normal ml-2  capitalize text-[0.75rem] lg:text-[0.85rem]">
                {order.amount}
              </span>
            </div>
            <div className=" font-bold mb-[1px] lg:mb-1 capitalize text-[0.85rem] lg:text-[1rem]">
              Address:
              <span className=" text-gray-600 font-normal ml-2  capitalize text-[0.75rem] lg:text-[0.85rem]">
                {order.address} , {order.city} , {order.state}
              </span>
            </div>
            <div className=" font-bold mb-[1px] lg:mb-1 capitalize text-[0.85rem] lg:text-[1rem]">
              Order Date:
              <span className=" text-gray-600 font-normal ml-2   capitalize text-[0.75rem] lg:text-[0.85rem]">
                {new Date(order.createdAt).toDateString()}
              </span>
            </div>
            <div className=" font-bold mb-[1px] lg:mb-1 capitalize text-[0.85rem] lg:text-[1rem]">
              Order Status:
              <span className=" font-normal ml-2 text-orange-600  capitalize text-[0.75rem] lg:text-[0.85rem]">
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
