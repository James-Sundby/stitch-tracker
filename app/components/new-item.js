"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [colorCode, setColorCode] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Reds");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = { colorCode, name, quantity, category };
    onAddItem(newItem);

    setColorCode("");
    setName("");
    setQuantity(1);
    setCategory("Reds");
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
    <div className="max-w-lg mx-2 mb-8 shadow-xl">
      <div className="collapse bg-base-200 collapse-arrow">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary uppercase font-semibold text-primary-content peer-checked:bg-secondary flex items-center">
          Add Item
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
                <option value="Reds">Reds</option>
                <option value="Oranges">Oranges</option>
                <option value="Yellows">Yellows</option>
                <option value="Greens">Greens</option>
                <option value="Blues">Blues</option>
                <option value="Purples">Purples</option>
                <option value="Pinks">Pinks</option>
                <option value="Browns">Browns</option>
                <option value="Blacks/grays/whites">Blacks/Grays/Whites</option>
                <option value="Metallics">Metallics</option>
                <option value="Neutrals">Neutrals</option>
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
