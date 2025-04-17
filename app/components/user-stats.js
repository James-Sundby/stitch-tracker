export default function UserStats({ inventoryCount, shoppingListCount }) {
  return (
    <div>
      <div className="stats stats-vertical lg:stats-horizontal shadow-sm max-w-lg mx-2 mb-2 bg-base-200">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="inline-block w-8 h-8 stroke-current fill-primary"><path d="M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z" /></svg>
          </div>
          <div className="stat-title">Inventory:</div>
          <div className="stat-value text-primary">{inventoryCount}</div>
          <div className="stat-desc">Floss in your inventory</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="inline-block w-8 h-8 stroke-current fill-secondary"
            >
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
          </div>
          <div className="stat-title">Shopping Cart:</div>
          <div className="stat-value text-secondary">{shoppingListCount}</div>
          <div className="stat-desc">Floss in your cart</div>
        </div>
      </div>
    </div>
  );
}
