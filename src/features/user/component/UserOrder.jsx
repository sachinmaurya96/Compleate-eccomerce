import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchloggedInUserOrdersAsync, selectUserInfo, selectUserOrder } from '../userSlice'
import { selectLoggedInUsers } from '../../auth/authSlice'
import { NavLink } from 'react-router-dom'
function UserOrder() {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(true);
    const user = useSelector(selectUserInfo)
    const userOrder = useSelector(selectUserOrder)
    console.log(userOrder)
    useEffect(()=>{
        dispatch(fetchloggedInUserOrdersAsync(user?.id))
    },[])
  return (
    <>
    {
       userOrder && userOrder.map((order)=>(
            <div className="mx-auto mt-10 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <h2 className=" my-12 text-4xl tracking-tight font-bold text-gray-900">Order # {order.id}</h2>
            <h3 className=" my-12 text-2xl tracking-tight font-bold text-red-900">Order Status {order.status}</h3>
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {order.products.map((product) => (
                    <li key={product.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
       
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href={product.thumbnail}>{product.title}</a>
                            </h3>
                            <p className="ml-4">${product.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.rating}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          
                         <div>
                         <p className="text-gray-500 inline mr-5">{product.quantity} </p>
                         </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
       
            <div className="border-t border-gray-200  py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>${order.totalamount}</p>
              </div>
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Total items in cart </p>
                <p>{order.totalItems} items</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>
            </div>
            <li className="flex justify-between gap-x-6 py-5">
                    <div className="flex gap-x-4 ">
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                          {order.selectedAddress.name}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          {order.selectedAddress.street}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          {order.selectedAddress.pinCode}
                        </p>
                      </div>
                    </div>
                    <div className="hidden sm:flex sm:flex-col sm:items-end">
                      <p className="text-sm leading-6 text-gray-900">
                        Phone: {order.selectedAddress.phone}
                      </p>
                      <p className="text-sm leading-6 text-gray-900">
                        City: {order.selectedAddress.city}
                      </p>
                      <p className="text-sm leading-6 text-gray-900">
                        State: {order.selectedAddress.state}
                      </p>
                    </div>
                  </li>
          </div>
        )

        )
    }
    </>
  )
}

export default UserOrder
