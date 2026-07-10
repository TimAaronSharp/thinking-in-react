import type { Product } from "../interfaces/Product";
import { ProductCategoryRow } from "./ProductCategoryRow.tsx";
import { ProductRow } from "./ProductRow.tsx";


interface ProductTableProps {
  products: Product[];
  filterText: string;
  inStockOnly: boolean;
}

export function ProductTable({ products, filterText, inStockOnly }: ProductTableProps) {

  const rows: React.ReactNode[] = [];
  let lastCategory: string | null = null;

  products.forEach((product) => {
    // Checks to see if the search text matches any of the products. -1 index means it didn't find anything. .indexOf() returns the index where your search started at. ie) Apple. If you search for "app", .indexOf() returns 0. If you search "le" it returns 3.
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    // Checks for failure. If inStockOnly checkbox is checked and an item is out of stock it returns.
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />
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
  );
}