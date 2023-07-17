import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUsers } from "../../auth/authSlice";
function UserProfile() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUsers);
 
  const  handleEdit =()=>{

  }
  const handleRemove =()=>{

  }
  return (
    <>
      <div className="mx-auto mt-10 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <h2 className=" my-12 text-4xl tracking-tight font-bold text-gray-900">
            name:{user.name ? user.name : "Sachin"}
          </h2>
          <h3 className=" my-12 text-2xl tracking-tight font-bold text-red-900">
            Email id : {user.email}
          </h3>
        </div>
        {user?.address.map((elem,index) => {
          return (
            <li className="flex justify-between gap-x-6 py-5">
              <div className="flex gap-x-4 ">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {elem.email}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {elem.city}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {elem.state}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {elem.phone}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {elem.pinCode}
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <button
                onClick={(e)=>handleEdit(e,index)}
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Edit
                </button>
                <button
                onClick={(e)=>handleRemove(e,index)}
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                 Remove
                </button>
              </div>
            </li>
          );
        })}
      </div>
    </>
  );
}

export default UserProfile;
