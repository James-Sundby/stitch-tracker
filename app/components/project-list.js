"use client";

import { useState } from "react";
import Project from "./project";

export default function ProjectList({ projects, onDelete }) {
  const [sortBy, setSortBy] = useState("name");
  const projectsData = [...projects];

  if (sortBy === "name") {
    projectsData.sort((a, b) => a.projectName.localeCompare(b.projectName));
  } else if (sortBy === "date") {
    projectsData.sort((a, b) => {
      if (a.startDate === b.startDate) {
        return a.projectName.localeCompare(b.projectName);
      }
      return a.startDate.localeCompare(b.startDate);
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
            aria-label="Sort by Project Name"
            onClick={() => setSortBy("name")}
            defaultChecked
          />
          <input
            className="join-item btn flex-1"
            type="radio"
            name="sort-options"
            aria-label="Sort by Start Date"
            onClick={() => setSortBy("date")}
          />
        </div>
      </div>
      <ul>
        {projectsData.map((project) => (
          <Project
            key={project.id}
            id={project.id}
            projectName={project.projectName}
            startDate={project.startDate}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </>
  );
}
