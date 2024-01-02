"use client";

import { useState } from "react";
import Item from "./item-cart.js";

export default function ShoppingList({ items, onDelete, onPurchase }) {
  const [sortBy, setSortBy] = useState("colorCode");
  const itemsData = [...items];

  function isNumeric(value) {
    return !isNaN(value) && !isNaN(parseFloat(value));
  }

  function compareNumericStrings(a, b) {
    return parseFloat(a) - parseFloat(b);
  }

  itemsData.sort((a, b) => {
    if (sortBy === "category" && a.category !== b.category) {
      return a.category.localeCompare(b.category);
    }
    // Compare colorCode numerically if both are numeric, else use string comparison
    return (isNumeric(a.colorCode) && isNumeric(b.colorCode))
      ? compareNumericStrings(a.colorCode, b.colorCode)
      : a.colorCode.localeCompare(b.colorCode);
  });

  return (
    <>
      <div className="mx-2 max-w-lg mb-2">
        <div className="join flex">
          <input
            className="join-item btn flex-1"
            type="radio"
            name="sort-options"
            aria-label="Sort by Color Code"
            onClick={() => setSortBy("colorCode")}
            defaultChecked
          />
          <input
            className="join-item btn flex-1"
            type="radio"
            name="sort-options"
            aria-label="Sort by Category"
            onClick={() => setSortBy("category")}
          />
        </div>
      </div>
      <ul>
        {itemsData.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            colorCode={item.colorCode}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onDelete={onDelete}
            onPurchase={onPurchase}
          />
        ))}
      </ul>
    </>
  );
}
