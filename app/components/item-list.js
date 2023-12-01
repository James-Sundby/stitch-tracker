"use client";

import { useState } from "react";
import Item from "./item.js";

export default function ItemList({ items, onDelete }) {
  const [sortBy, setSortBy] = useState("colorCode");
  const itemsData = [...items];

  if (sortBy === "colorCode") {
    itemsData.sort((a, b) => a.colorCode.localeCompare(b.colorCode));
  } else if (sortBy === "category") {
    itemsData.sort((a, b) => {
      if (a.category === b.category) {
        return a.colorCode.localeCompare(b.colorCode);
      }
      return a.category.localeCompare(b.category);
    });
  }

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
            categoryColor={item.categoryColor}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </>
  );
}
