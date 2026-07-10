
interface SearchBarProps {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: React.Dispatch<React.SetStateAction<string>>;
  onInStockOnlyChange: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }: SearchBarProps) {
  return (
    <form>
      <input type="text" value={filterText} placeholder="Search..." onChange={(e) => onFilterTextChange(e.target.value)} />
      <label>
        <input type="checkbox" onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}