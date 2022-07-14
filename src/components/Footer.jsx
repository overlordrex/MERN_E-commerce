import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" bg-[#24262b] py-[70px] ">
      <div className=" px-[15px] max-w-[1170px] m-auto">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="mb-[25px]  ">
            <h4 className=" text-[18px] text-white capitalize mb-[10px] font-semibold ">
              company
            </h4>
            <ul className=" list-none">
              <li className=" mb-[10px] text-[15px] capitalize text-[#bbbbbb] block">
                FAQ
              </li>
              <li className=" mb-[10px] text-[15px] capitalize text-[#bbbbbb] block">
                payment method
              </li>
              <li className=" mb-[10px] text-[15px] capitalize text-[#bbbbbb] block">
                affiliate program
              </li>
            </ul>
          </div>
          <div className=" mb-[25px] ">
            <h4 className=" text-[18px] text-white capitalize mb-[10px] font-semibold ">
              get help
            </h4>
            <ul className=" list-none">
              <li className=" mb-[10px] text-[15px] capitalize text-[#bbbbbb] block">
                about us
              </li>
              <li className=" mb-[10px] text-[15px] capitalize text-[#bbbbbb] block">
                our services
              </li>
              <li className=" mb-[10px] text-[15px] capitalize text-[#bbbbbb] block">
                privacy policy
              </li>
              <li className=" mb-[10px] text-[15px] capitalize text-[#bbbbbb] block">
                delivery
              </li>
              <li className=" mb-[10px] text-[15px] capitalize text-[#bbbbbb] block">
                order status
              </li>
              <li className="  text-[15px] capitalize text-[#bbbbbb] block">
                returns
              </li>
            </ul>
          </div>
          <div className="mb-[25px]  ">
            <h4 className=" text-[18px] text-white capitalize mb-[10px] font-semibold ">
              products
            </h4>
            <ul className=" list-none">
              <li className=" mb-[10px] text-[15px] capitalize text-[#bbbbbb] block">
                shirts
              </li>
              <li className=" mb-[10px] text-[15px] capitalize text-[#bbbbbb] block">
                trousers
              </li>
              <li className=" mb-[10px] text-[15px] capitalize text-[#bbbbbb] block">
                jackets
              </li>
              <li className="  text-[15px] capitalize text-[#bbbbbb] block">
                shoes
              </li>
            </ul>
          </div>
          <div className="mb-[25px] ">
            <h4 className=" text-[18px] text-white capitalize mb-[10px] font-semibold ">
              follow us
            </h4>
            <div className=" flex items-center">
              <div className="  w-[40px] h-[40px]  bg-[rgba(255,255,255,0.2)] mr-[10px] mb-[10px] text-center flex justify-center items-center rounded-full text-white ">
                <FaFacebookF fontSize={20} />
              </div>
              <div className="  w-[40px] h-[40px]  bg-[rgba(255,255,255,0.2)] mr-[10px] mb-[10px] text-center flex justify-center items-center rounded-full text-white ">
                <FaTwitter fontSize={20} />
              </div>
              <div className="  w-[40px] h-[40px]  bg-[rgba(255,255,255,0.2)] mr-[10px] mb-[10px] text-center flex justify-center items-center rounded-full text-white ">
                <FaInstagram fontSize={20} />
              </div>
              <div className="  w-[40px] h-[40px]  bg-[rgba(255,255,255,0.2)] mr-[10px] mb-[10px] text-center flex justify-center items-center rounded-full text-white ">
                <FaEnvelope fontSize={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// {
//   /* <div className="text-sm lg:flex items-center justify-between p-4 bg-gray-300">
//

//       <div className=" mt-5">
//         <div className="text-[18px] font-bold mb-1">Useful Links</div>
//         <div className=" capitalize text-base ">trousers</div>
//         <div className=" capitalize text-base">shirts</div>
//         <div className=" capitalize text-base">jackets</div>
//         <div className=" capitalize text-base">shoes</div>
//       </div>
//     </div> */
// }
