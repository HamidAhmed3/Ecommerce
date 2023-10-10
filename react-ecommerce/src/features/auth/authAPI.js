export function fetchCount(amount = 1) { 
// export function createUser() {
  return new Promise(async (resolve) => {
//    const response = await fetch('api',{
//           method:'POST',
//           body: JSON.stringify(userData),
//           headers:{'content-type':'application.json'}
// }) 
    const response = await fetch('http://localhost:3000')
    const data = await response.json
    resolve({data})
  }
  );
}
