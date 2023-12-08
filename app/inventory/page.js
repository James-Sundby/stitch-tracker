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
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleAddItem = async (item) => {
    try {
      const newItemId = await addItem(user.uid, item);
      const newItem = { ...item, id: newItemId };
      setItems([...items, newItem]);
      setAlertMessage(`${item.name} added to inventory.`);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        setAlertMessage("");
      }, 1000);
    } catch (error) {
      console.error("Error adding item: ", error);
    }
  };

  const handleRemoveItem = async (itemId, event) => {
    event.stopPropagation();
    try {
      await removeItem(user.uid, itemId);
      setItems(items.filter((item) => item.id !== itemId));
      setAlertMessage("Item removed from inventory.");
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        setAlertMessage("");
      }, 1000);
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
    <div className="flex flex-col min-h-screen items-center">
      <NavBar />
      <main className="flex-1">
        <h1 className="text-4xl m-4 font-bold ">Inventory</h1>
        <NewItem onAddItem={handleAddItem} />
        {showAlert && (
          <div
            role="alert"
            className="alert shadow-lg mx-2 mb-2 w-auto max-w-lg md:hidden alert-info"
          >
            <div className="">{alertMessage}</div>
          </div>
        )}
        <ItemList items={items} onDelete={handleRemoveItem} />
      </main>
      <Footer className="mt-auto" />
    </div>
  );
}
