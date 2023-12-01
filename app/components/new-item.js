"use client";

import { useState } from "react";
import colorData from "../_data/colorInfo";

export default function NewItem({ onAddItem }) {
  const [colorCode, setColorCode] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("red");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Find the selected category object from the colorData
    const selectedCategory = colorData.find(
      (item) => item.category === category
    );

    // Extract the color code based on the selected category
    const temp = selectedCategory ? selectedCategory.categoryColor : "";

    const newItem = {
      colorCode,
      name,
      quantity,
      category,
      categoryColor: temp,
    };

    onAddItem(newItem);

    setColorCode("");
    setName("");
    setQuantity(1);
    setCategory("red");
  };

  const handleColorCodeChange = (event) => {
    setColorCode(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="max-w-lg mx-2 mb-2">
      <div className="collapse bg-base-200 collapse-arrow">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary uppercase font-semibold text-primary-content peer-checked:bg-secondary flex items-center">
          Add to Inventory
        </div>
        <div className="collapse-content">
          <form className="card-body p-0 mt-4" onSubmit={handleSubmit}>
            <input
              placeholder="DMC Code"
              type="text"
              required
              onChange={handleColorCodeChange}
              value={colorCode}
              className="input input-bordered"
            />
            <input
              placeholder="Item Name"
              type="text"
              required
              onChange={handleNameChange}
              value={name}
              className="input input-bordered"
            />
            <div className="flex space-x-2">
              <input
                type="number"
                min="1"
                max="99"
                required
                onChange={handleQuantityChange}
                value={quantity}
                className="input input-bordered w-1/4"
              />
              <select
                required
                onChange={handleCategoryChange}
                value={category}
                className="select select-bordered flex-grow"
              >
                <option disabled>Select a Category</option>
                <option value="red">Reds</option>
                <option value="orange">Oranges</option>
                <option value="yellow">Yellows</option>
                <option value="green">Greens</option>
                <option value="blue">Blues</option>
                <option value="purple">Purples</option>
                <option value="pink">Pinks</option>
                <option value="brown">Browns</option>
                <option value="gray">Grayscale</option>
                <option value="metallic">Metallics</option>
                <option value="neutral">Neutrals</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary flex-1 border-">
              +
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
