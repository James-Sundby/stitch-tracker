export default function Project({
  id,
  projectName,
  startDate,
  endDate,
  onDelete,
  onSelect,
}) {
  const handleClick = () => {
    onSelect(projectName);
  };

  return (
    <li onClick={handleClick}>
      <div
        className={`card bg-base-200 shadow-xl max-w-lg mx-2 mb-2 cursor-pointer hover:btn-active`}
      >
        <div className="card-body flex-row justify-between">
          <div>
            <header className="card-title text-2xl pb-2">
              <input
                type="checkbox"
                className="checkbox checkbox-lg checkbox-primary mr-2"
                onClick={(e) => e.stopPropagation()}
              />
              {projectName}
            </header>
            <article>
              <span className="font-bold text-primary capitalize">
                {startDate}
              </span>
            </article>
          </div>
          <div className="flex items-center">
            <button
              aria-label="Delete item"
              onClick={(e) => onDelete(id, e)}
              className="btn btn-primary hidden md:inline-flex"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
