import { FilterableProductTable } from "./components/FilterableProductTable.tsx";
import { PRODUCTS } from "./data/ProductData.ts";


// import './App.css'
// NOTE Interfaces are for TypeScript typing. Tutorial was written in JavaScript.


export default function App() {
  return (
    <FilterableProductTable products={PRODUCTS} />
  )
}


// function showList(): Product[] {
//   const produceList: Product[] = []

//   for (let i = 0; i < Data.produceList.length; i++) {
//     let element = Data.produceList[i];
//     produceList.push(element);
//   }
//   console.log(produceList);
//   return produceList;
// }