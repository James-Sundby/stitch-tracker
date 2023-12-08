"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import {
  getInventoryCount,
  getShoppingListCount,
} from "../_services/inventory-service";

import NavBar from "../components/nav-bar";
import Footer from "../components/footer";
import UserStats from "../components/user-stats";
import Redirect from "../components/redirect";

export default function User() {
  const { user } = useUserAuth();
  const [inventoryCount, setInventoryCount] = useState("");
  const [shoppingListCount, setShoppingListCount] = useState("");

  async function loadItems() {
    try {
      const inventoryCount = await getInventoryCount(user.uid);
      const shoppingListCount = await getShoppingListCount(user.uid);
      setInventoryCount(inventoryCount);
      setShoppingListCount(shoppingListCount);
    } catch (error) {
      console.error("Error retrieving information from the database: ", error);
    }
  }

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  return user ? (
    <div className="flex flex-col min-h-screen items-center">
      <NavBar />
      <main className="flex-1">
        {user != null ? (
          <p className="text-4xl m-4 font-bold ">Welcome {user.displayName}</p>
        ) : (
          <p className="text-4xl m-4 font-bold ">Welcome</p>
        )}
        <UserStats
          inventoryCount={inventoryCount}
          shoppingListCount={shoppingListCount}
        />
      </main>
      <Footer className="mt-auto" />
    </div>
  ) : (
    <Redirect />
  );
}
