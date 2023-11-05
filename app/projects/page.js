"use client";

import NavBar from "../components/nav-bar";
import Footer from "../components/footer";

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        <h1 className="text-4xl m-4 font-bold ">Projects</h1>
      </main>
      <Footer className="mt-auto" />
    </div>
  );
}
