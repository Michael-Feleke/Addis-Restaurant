import { Link } from "react-router-dom";
import SearchOder from "../features/order/SearchOder";
import Username from "../features/user/Username";
import { Tooltip } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import {
  getTotalCartPrice,
  getTotalCartQuantity,
} from "../features/cart/cartSlice";

function Header() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  return (
    <header className="uppercase pt-2 flex justify-around items-center font-pizza bg-slate-900 flex-col gap-2">
      <Link to="/" className="tracking-widest font-semibold text-md text-white">
        Addis
        <span className="text-yellow-400"> Restaurant</span>
      </Link>
      <SearchOder />
      <div className="flex items-center justify-between space-x-10">
        <Link to="/cart">
          <Tooltip
            content={`${totalCartQuantity === 0 ? "Add items to your cart and start ordering!" : `${totalCartQuantity} ${totalCartQuantity === 1 ? "item" : "items"} in your cart, $${totalCartPrice}. Click to order us!`}`}
            placement="bottom"
          >
            <div className="relative py-2 text-white cursor-pointer">
              <div className="t-0 absolute left-3">
                <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                  {totalCartQuantity}
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="file: mt-4 h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
          </Tooltip>
        </Link>

        {totalCartQuantity && (
          <div className="text-white">${totalCartPrice}</div>
        )}

        <Username />
      </div>
    </header>
  );
}

export default Header;
