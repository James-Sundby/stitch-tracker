"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import {
  getProjects,
  addProject,
  removeProject,
} from "../_services/inventory-service";

import NavBar from "../components/nav-bar";
import Footer from "../components/footer";
import NewProject from "./new-project";
import ProjectList from "./project-list";

export default function Projects() {
  const { user } = useUserAuth();
  const [projects, setProjects] = useState([]);

  const handleAddProject = async (project) => {
    try {
      const newProjectId = await addProject(user.uid, project);
      const newProject = { ...project, id: newProjectId };
      setItems([...projects, newProject]);
    } catch (error) {
      console.error("Error adding project: ", error);
    }
  };

  const handleRemoveProject = async (projectId, event) => {
    event.stopPropagation();
    try {
      await removeProject(user.uid, projectId);
      setProjects(projects.filter((project) => project.id !== projectId));
    } catch (error) {
      console.error("Error removing project: ", error);
    }
  };

  async function loadProjects() {
    try {
      const projects = await getProjects(user.uid);
      setProjects(projects);
    } catch (error) {
      console.error("Error retrieving project list: ", error);
    }
  }

  useEffect(() => {
    if (user) {
      loadProjects();
    }
  }, [user]);
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        <h1 className="text-4xl m-4 font-bold ">Projects</h1>
        <NewProject onAddProject={handleAddProject} />
        <ProjectList projects={projects} onDelete={handleRemoveProject} />
      </main>
      <Footer className="mt-auto" />
    </div>
  );
}
