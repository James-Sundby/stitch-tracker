export default function Item({
  id,
  colorCode,
  name,
  quantity,
  category,
  onDelete,
  onPurchase,
}) {
  const handlePurchase = (event) => {
    event.preventDefault();
    const newItem = { colorCode, name, quantity, category };
    onPurchase(newItem, id);
  };

  return (
    <li>
      <div className="card bg-base-200 shadow-xl max-w-lg mx-2 mb-2 cursor-pointer hover:btn-active">
        <div className="card-body flex-row justify-between">
          <div>
            <header className="card-title text-2xl pb-2 ">
              {colorCode} {name}
            </header>
            <p>
              Qty: {quantity} | Category: {category}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              aria-label="Purchase"
              onClick={(e) => handlePurchase(e)}
              className="btn btn-success hidden md:inline-flex "
            >
              Purchased
            </button>
            <button
              aria-label="Delete item"
              onClick={(e) => onDelete(id, e)}
              className="btn btn-success  md:hidden"
            >
              Buy
            </button>
            <button
              aria-label="Delete item"
              onClick={(e) => onDelete(id, e)}
              className="btn btn-error hidden md:inline-flex "
            >
              Remove
            </button>
            <button
              aria-label="Delete item"
              onClick={(e) => onDelete(id, e)}
              className="btn btn-error md:hidden"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
