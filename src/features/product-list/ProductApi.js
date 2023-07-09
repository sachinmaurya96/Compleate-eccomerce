export function fetchAllProducts() {
  return  new Promise(async (resolve) =>
   {
    const response = await fetch("http://localhost:8080/products")
    const data = await response.json()
    const totalItems = await response.headers.get("X-Total-Count")
    resolve({data:{products:data,totalItems:+totalItems}})
   }

  );
}

export function fetchProductsByFilters(filter,sort,pagination) {
  let querystring="";
  for(let key in filter){
    const categoryValu = filter[key]
    if(categoryValu.length>0){
      const lastValue = categoryValu[categoryValu.length-1]
      querystring +=`${key}=${lastValue}&`
    }
    
  }
  for(let key in sort){
    querystring +=`${key}=${sort[key]}&`
  }

  for(let key in pagination){
    querystring +=`${key}=${pagination[key]}&`
  }





  return  new Promise(async (resolve) =>
   {
    const response = await fetch("http://localhost:8080/products?"+querystring)
    const data = await response.json()
    const totalItems = await response.headers.get("X-Total-Count")
    resolve({data:{products:data,totalItems:+totalItems}})

    console.log(querystring)
   }

  );
  
}
