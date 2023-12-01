"use client";

import { useState } from "react";

export default function NewProject({ onAddProject }) {
  const [projectName, setProjectName] = useState("");
  const [startDate, setStartDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProject = { projectName, startDate };

    onAddProject(newProject);

    setProjectName("");
    setStartDate("");
  };

  const handleNameChange = (event) => {
    setProjectName(event.target.value);
  };

  const handleDateChange = (event) => {
    setStartDate(event.target.value);
  };

  return (
    <div className="max-w-lg mx-2 mb-2">
      <div className="collapse bg-base-200 collapse-arrow">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary uppercase font-semibold text-primary-content peer-checked:bg-secondary flex items-center">
          Start New Project
        </div>
        <div className="collapse-content">
          <form className="card-body p-0 mt-4" onSubmit={handleSubmit}>
            <input
              placeholder="Project Name"
              type="text"
              required
              onChange={handleNameChange}
              value={projectName}
              className="input input-bordered"
            />
            <input
              type="date"
              required
              onChange={handleDateChange}
              value={startDate}
              className="input input-bordered"
            />
            <button type="submit" className="btn btn-primary flex-1">
              +
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
