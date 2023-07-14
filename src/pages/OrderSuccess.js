import React, { useEffect } from "react";
import { NavLink, Navigate, useParams } from "react-router-dom";
import { resetCart } from "../features/cart/cartAPI";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemsByUserIdAsync, resetCartAsync } from "../features/cart/cartSlice";
import { selectLoggedInUsers } from "../features/auth/authSlice";
import { resetOrder } from "../features/order/orderSlice";

function OrderSuccess() {
  const params = useParams()
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUsers)

  useEffect(()=>{
    dispatch(resetCartAsync(user?.id))
    dispatch(fetchItemsByUserIdAsync(user?.id))
    dispatch(resetOrder())
  },[dispatch,user?.id])
  return (
    <>
    {!params.id && <Navigate to="/" replace={true}></Navigate>}
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Order Successfull Placed
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Order Number #{params.id}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <NavLink
              to="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Continue shoping
            </NavLink>
          </div>
        </div>
      </main>
    </>
  );
}

export default OrderSuccess;
