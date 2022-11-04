export const getProducts = async () => {
  return fetch('https://fakestoreapi.com/products').then(res => res.json());
};
