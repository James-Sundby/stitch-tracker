export default function Item({
  id,
  colorCode,
  name,
  quantity,
  category,
  categoryColor,
  onDelete,
}) {
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
          <div className="flex items-center">
            <button
              aria-label="Delete item"
              onClick={(e) => onDelete(id, e)}
              className="btn btn-error "
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
