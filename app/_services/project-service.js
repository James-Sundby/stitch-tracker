import { db } from "../_utils/firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

export const getProjects = async (userId) => {
  try {
    const itemsCollection = collection(db, "users", userId, "projects");
    const querySnapshot = await getDocs(itemsCollection);

    const projects = [];
    querySnapshot.forEach((doc) => {
      projects.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return projects;
  } catch (error) {
    console.error("Error retrieving project from database.", error);
    window.alert("Error retrieving project from database.");
  }
};

export const addProject = async (userId, project) => {
  try {
    if (!project.startDate) {
      throw new Error("The projects is missing start date.");
    }
    if (!project.projectName) {
      throw new Error("The projects is missing name.");
    }

    const itemsCollection = collection(db, "users", userId, "projects");
    const docRef = await addDoc(itemsCollection, project);
    return docRef.id;
  } catch (error) {
    console.error("Error adding project to database.", error);
    window.alert("Error adding project to database.");
  }
};

export const removeProject = async (userId, projectId) => {
  try {
    const itemRef = doc(db, "users", userId, "projects", projectId);
    await deleteDoc(itemRef);
    return projectId;
  } catch (error) {
    console.error("Error removing project: ", error);
    window.alert("Error removing project.");
  }
};
