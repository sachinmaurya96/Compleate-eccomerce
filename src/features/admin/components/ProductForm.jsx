import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBrandsAsync, fetchCategoriesAsync, selectAllBrands, selectAllCategories } from '../../product-list/ProductSlice'
import { useForm } from 'react-hook-form'
import { createProduct } from '../../product-list/ProductApi'
import { useParams } from 'react-router-dom'
function ProductForm() {
    const brands = useSelector(selectAllBrands)
    const category = useSelector(selectAllCategories)
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm()
      const dispatch = useDispatch()
      const params = useParams()
      useEffect(()=>{
        dispatch(fetchBrandsAsync())
        dispatch(fetchCategoriesAsync())
      },[])
  return (
    <>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <form onSubmit={handleSubmit((data)=>{
       const product = {...data}
       product.images = [product.thumbnail,product.image1,product.image2,product.image3]
       product.rating  = 0
        delete product["image1"]
        delete product["image2"]
        delete product["image3"]
        dispatch(createProduct(product))
        reset()
    })}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Add Products</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
               Product Title
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    {...register("title", {
                        required: "title is required",
                      })}
                    id="title"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="product title"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="Description"
                  {...register("description", {
                    required: "description is required",
                  })}
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about products</p>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                Price
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="number"
                    {...register("price", {
                        required: "price is required",
                      })}
                    id="price"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="price"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="discount" className="block text-sm font-medium leading-6 text-gray-900">
             Discount
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="number"
                    {...register("discountPercentage",)}
                    id="Discount"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Discount"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="Stock" className="block text-sm font-medium leading-6 text-gray-900">
                Stock
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="number"
                    {...register("stock", {
                        required: "stock is required",
                      })}
                    id="Stock"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Stock"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="Thumbnail" className="block text-sm font-medium leading-6 text-gray-900">
               Thumbnail
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    {...register("thumbnail", {
                        required: "stock is required",
                      })}
                    id="Thumbnail"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Thumbnail"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="Thumbnail" className="block text-sm font-medium leading-6 text-gray-900">
               image 1
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    {...register("image1", {
                        required: "stock is required",
                      })}
                    id="Thumbnail"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Thumbnail"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="Thumbnail" className="block text-sm font-medium leading-6 text-gray-900">
               image 2
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    {...register("image2", {
                        required: "stock is required",
                      })}
                    id="Thumbnail"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Thumbnail"
                  />
                </div>
              </div>
            </div>
           
            <div className="sm:col-span-4">
              <label htmlFor="Thumbnail" className="block text-sm font-medium leading-6 text-gray-900">
               image 3
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    {...register("image3", {
                        required: "stock is required",
                      })}
                    id="Thumbnail"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Thumbnail"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="Brand" className="block text-sm font-medium leading-6 text-gray-900">
                Brand
              </label>
              <div className="mt-2">
               <select name="" id=""   {...register("brand", {
                        required: "brand is required",
                      })}>
                <option value="">---chose brands---</option>
                {
                 brands.map((elem)=><option value={elem.value}>{elem.label}</option>)
                }
               
               </select>
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="Category" className="block text-sm font-medium leading-6 text-gray-900">
                Category
              </label>
              <div className="mt-2">
               <select name="" id=""  {...register("category", {
                        required: "category is required",
                      })}>
                <option value="">---chose category---</option>
                {
                 category.map((elem)=><option value={elem.value}>{elem.label}</option>)
                }
               
               </select>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Extra</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            We'll always let you know about important changes, but you pick what else you want to hear about.
          </p>

          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="comments" className="font-medium text-gray-900">
                      Comments
                    </label>
                    <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="candidates" className="font-medium text-gray-900">
                      Candidates
                    </label>
                    <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Offers
                    </label>
                    <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
              <p className="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                    Everything
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                    Same as email
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                    No push notifications
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form> 
    </div>
    </>
  )
}

export default ProductForm
