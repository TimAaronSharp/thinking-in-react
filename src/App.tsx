import { useState } from 'react'

import './App.css'
// NOTE Interfaces are for TypeScript typing. Tutorial was written in JavaScript.
interface Product {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

interface ProductCategoryRowProps {
  category: string;
}

interface ProductRowProps {
  product: Product;
}

interface ProductTableProps {
  products: Product[];
}


function ProductCategoryRow({ category }: ProductCategoryRowProps) {
  return (
    <tr>
      <th colSpan={2}>
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }: ProductRowProps) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products }: ProductTableProps) {

  const rows: Product[] = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

const PRODUCTS: Product[] = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

function App() {


  return (
    <>

    </>
  )
}

export default App


// function showList(): Product[] {
//   const produceList: Product[] = []

//   for (let i = 0; i < Data.produceList.length; i++) {
//     let element = Data.produceList[i];
//     produceList.push(element);
//   }
//   console.log(produceList);
//   return produceList;
// }