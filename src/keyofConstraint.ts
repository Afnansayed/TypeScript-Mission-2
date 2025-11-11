interface User {
  name: string;
  id: number;
  section: string;
}

const user: User = {
  name: 'Razin',
  id: 1,
  section: '7b',
};

interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
}

const product: Product = {
  id: 'j34453546l',
  name: 'tiger',
  price: 560,
  stock: 56,
};

const getUserKey = <T>(obj: T, key: keyof T) => {
  return obj[key];
};

console.log(getUserKey<User>(user, 'id'));
console.log(getUserKey<Product>(product, 'id'));
