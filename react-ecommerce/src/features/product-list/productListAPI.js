export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    // TO DO: remove hardcode
    const response = await fetch('http://localhost:8008/products')
    const data = await response.json()
    resolve({data})
  }
  );
}

export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    // TO DO: remove hardcode
    const response = await fetch('http://localhost:8008/products/'+id)
    const data = await response.json()
    resolve({data})
  }
  );
}

export function addProduct(product) {
  return new Promise(async (resolve) => {
    // TO DO: remove hardcode
    const response = await fetch('http://localhost:8008/products/',{
      method:'POST',
      body: JSON.stringify(product),
      headers:{'content-type':'application/json'}
    })
    const data = await response.json()
    resolve({data})
  }
  );
}


