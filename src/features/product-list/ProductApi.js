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


export function fetchAllCategory() {
  return  new Promise(async (resolve) =>
   {
    const response = await fetch("http://localhost:8080/categories")
    const data = await response.json()
    resolve({data})
   }

  );
}

export function fetchAllBrands() {
  return  new Promise(async (resolve) =>
   {
    const response = await fetch("http://localhost:8080/brands")
    const data = await response.json()
    resolve({data})
   }
  );
}


export function fetchProductById(id) {
  return  new Promise(async (resolve) =>
   {
    const response = await fetch("http://localhost:8080/products/"+id)
    const data = await response.json()
    resolve({data})
   }
  );
}


export function createProduct(product) {
  return  new Promise(async (resolve) =>
   {
    const response = await fetch("http://localhost:8080/products/",{
      method:"POST",
      body:JSON.stringify(product),
      headers:{"content-type":"application/json"}
    })
    const data = await response.json()
    resolve({data})
   }
  );
}