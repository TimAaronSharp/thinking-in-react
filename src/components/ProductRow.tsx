import type { Product } from "../interfaces/Product.ts";

interface ProductRowProps {
  product: Product;
}

export function ProductRow({ product }: ProductRowProps) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr data-testId="product-row">
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}