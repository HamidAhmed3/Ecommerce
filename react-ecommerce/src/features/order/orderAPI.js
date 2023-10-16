export function createOrder() {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8008/order')
    const data = await response.json
    resolve({data})
  }
  );
}