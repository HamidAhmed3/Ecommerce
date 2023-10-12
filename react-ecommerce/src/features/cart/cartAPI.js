export function addToCart(items) {
  return new Promise(async (resolve) => {
   const response = await fetch(' http://localhost:8008/cart',{
          method:'POST',
          body: JSON.stringify(items),
          headers:{'content-type':'application/json'}
        }) 
        const data = await response.json()
        resolve({data})
        }
);
}

export function fetchItemsByUserId(userId) {
  return new Promise(async (resolve) => {
    // TO DO: remove hardcode
    const response = await fetch('http://localhost:8008/cart?user='+userId)
    const data = await response.json()
    resolve({data})
  }
  );
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
   const response = await fetch(' http://localhost:8008/cart/'+update.id,{
          method:'PATCH',
          body: JSON.stringify(update),
          headers:{'content-type':'application/json'}
        }) 
        const data = await response.json()
        resolve({data})
        }
);
}

export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve) => {
   const response = await fetch(' http://localhost:8008/cart/'+itemId,{
          method:'DELETE',
          headers:{'content-type':'application/json'}
        }) 
        const data = await response.json()
        resolve({data:{id:itemId}});
        }
);
}
