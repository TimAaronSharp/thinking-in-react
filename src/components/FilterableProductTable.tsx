import { useState } from "react";
import type { Product } from "../interfaces/Product.ts";
import { SearchBar } from "./SearchBar.tsx";
import { ProductTable } from "./ProductTable.tsx";

interface FilterableProductTableProps {
  products: Product[];
}

export function FilterableProductTable({ products }: FilterableProductTableProps) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly} />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  )
}