"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import {
  getInventory,
  addItem,
  removeItem,
} from "../_services/inventory-service";

import NavBar from "../components/nav-bar";
import Footer from "../components/footer";
import NewItem from "../components/new-item";
import ItemList from "../components/item-list";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);

  const handleAddItem = async (item) => {
    try {
      const newItemId = await addItem(user.uid, item);
      const newItem = { ...item, id: newItemId };
      setItems([...items, newItem]);
    } catch (error) {
      console.error("Error adding item: ", error);
    }
  };

  const handleRemoveItem = async (itemId, event) => {
    event.stopPropagation();
    try {
      await removeItem(user.uid, itemId);
      setItems(items.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("Error removing item: ", error);
    }
  };

  async function loadItems() {
    try {
      const items = await getInventory(user.uid);
      setItems(items);
    } catch (error) {
      console.error("Error retrieving shopping list: ", error);
    }
  }

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        <h1 className="text-4xl m-4 font-bold ">Inventory</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onDelete={handleRemoveItem} />
      </main>
      <Footer className="mt-auto" />
    </div>
  );
}
