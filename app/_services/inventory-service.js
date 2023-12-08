import { db } from "../_utils/firebase";
import {
  collection,
  getDocs,
  addDoc,
  query,
  deleteDoc,
  doc,
} from "firebase/firestore";

export const getInventory = async (userId) => {
  try {
    const itemsCollection = collection(db, "users", userId, "items");
    const querySnapshot = await getDocs(itemsCollection);

    const items = [];
    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return items;
  } catch (error) {
    console.error("Error retrieving inventory from database.", error);
    window.alert("Error retrieving inventory from database.");
  }
};

export const addItem = async (userId, item) => {
  try {
    if (!item.name || !item.quantity) {
      throw new Error("The item object is missing required fields.");
    }

    const itemsCollection = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsCollection, item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item to database.", error);
    window.alert("Error adding item to database.");
  }
};

export const removeItem = async (userId, itemId) => {
  try {
    const itemRef = doc(db, "users", userId, "items", itemId);
    await deleteDoc(itemRef);
    return itemId;
  } catch (error) {
    console.error("Error removing item: ", error);
    window.alert("Error removing item.");
  }
};

export const getShoppingList = async (userId) => {
  try {
    const itemsCollection = collection(db, "users", userId, "shoppingList");
    const querySnapshot = await getDocs(itemsCollection);

    const items = [];
    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return items;
  } catch (error) {
    console.error("Error retrieving inventory from database.", error);
    window.alert("Error retrieving inventory from database.");
  }
};

export const addToList = async (userId, item) => {
  try {
    if (!item.name || !item.quantity) {
      throw new Error("The item object is missing required fields.");
    }

    const itemsCollection = collection(db, "users", userId, "shoppingList");
    const docRef = await addDoc(itemsCollection, item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item to database.", error);
    window.alert("Error adding item to database.");
  }
};

export const removeFromList = async (userId, itemId) => {
  try {
    const itemRef = doc(db, "users", userId, "shoppingList", itemId);
    await deleteDoc(itemRef);
    return itemId;
  } catch (error) {
    console.error("Error removing item: ", error);
    window.alert("Error removing item.");
  }
};

export const getInventoryCount = async (userId) => {
  try {
    const itemsCollection = collection(db, "users", userId, "items");
    const querySnapshot = await getDocs(itemsCollection);
    return querySnapshot.size;
  } catch (error) {
    console.error("Error retrieving inventory count from database.", error);
    window.alert("Error retrieving inventory count from database.");
  }
};

export const getShoppingListCount = async (userId) => {
  try {
    const itemsCollection = collection(db, "users", userId, "shoppingList");
    const querySnapshot = await getDocs(itemsCollection);
    return querySnapshot.size;
  } catch (error) {
    console.error("Error retrieving inventory count from database.", error);
    window.alert("Error retrieving inventory count from database.");
  }
};
