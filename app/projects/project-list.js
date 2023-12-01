"use client";

import { useState } from "react";
import Project from "./project.js";

export default function ProjectList({ projects, onDelete }) {
  const [sortBy, setSortBy] = useState("colorCode");
  const projectsData = [...projects];

  if (sortBy === "name") {
    projectsData.sort((a, b) => a.projectName.localeCompare(b.projectName));
  } else projectsData.sort((a, b) => a.startDate.localeCompare(b.startDate));

  return (
    <>
      <div className="mx-2 max-w-lg mb-2">
        <div className="join flex">
          <input
            className="join-item btn flex-1"
            type="radio"
            name="sort-options"
            aria-label="Sort by Name"
            onClick={() => setSortBy("name")}
            defaultChecked
          />
          <input
            className="join-item btn flex-1"
            type="radio"
            name="sort-options"
            aria-label="Sort by Start Date"
            onClick={() => setSortBy("startDate")}
          />
        </div>
      </div>
      <ul>
        {projectsData.map((project) => (
          <Project
            key={project.id}
            id={project.id}
            name={project.name}
            startDate={project.startDate}
          />
        ))}
      </ul>
    </>
  );
}
