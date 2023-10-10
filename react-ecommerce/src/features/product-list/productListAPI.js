export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    // TO DO: remove hardcode
    const response = await fetch('http://localhost:8008/products')
    const data = await response.json()
    resolve({data})
  }
  );
}


