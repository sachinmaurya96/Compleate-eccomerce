import { Fragment, useState ,useEffect} from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartAsync, selectItems, updateCartAsync } from "./cartSlice";


// const products = [
//   {
//     id: 1,
//     name: "Throwback Hip Bag",
//     href: "#",
//     color: "Salmon",
//     price: "$90.00",
//     quantity: 1,
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
//     imageAlt:
//       "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
//   },
//   {
//     id: 2,
//     name: "Medium Stuff Satchel",
//     href: "#",
//     color: "Blue",
//     price: "$32.00",
//     quantity: 1,
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
//     imageAlt:
//       "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
//   },
//   // More products...
// ];

export default function Cart() {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(true);
  const products = useSelector(selectItems)
 const totalamount = products.reduce((amount,item)=>item.price*item.quantity+amount,0)
 const totalItems =  products.reduce((total,item)=>item.quantity+total,0)

 const handleQuantity = (e,item)=>{
  dispatch(updateCartAsync({...item,quantity:+e.target.value}))
 }
  return (
    <>
      <div className="mx-auto mt-10 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
     
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <h2 className=" my-12 text-4xl tracking-tight font-bold text-gray-900">Cart</h2>
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {products && products.map((product) => (
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
                     <p className="text-gray-500 inline mr-5">Qty  </p>
                     <select onChange={(e)=>handleQuantity(e,product)} value={product.quantity}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                     </div>
                    

                      <div className="flex">
                        <button
                        onClick={()=>dispatch(deleteCartAsync(product.id))}
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Remove
                        </button>
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
            <p>${totalamount}</p>
          </div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Total items in cart </p>
            <p>{totalItems} items</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <NavLink
              to="/checkout"
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Checkout
            </NavLink>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or
              <NavLink to="/">
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={() => setOpen(false)}
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
