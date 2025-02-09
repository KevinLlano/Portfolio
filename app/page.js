"use client"; // Ensures the component is treated as a Client Component

import Image from "next/image";
import ContactForm from "./components/ContactForm";
import { useState, useEffect } from "react";

export default function Home() {
  const phrases = [
    "I am a Java Developer",
    "I am a React Developer",
    "I am a Python Developer",
    "I am a Software Engineer",
    "I am a Full Stack Developer",
    "I am a Problem Solver",
    "Experience With AWS & Azure Cloud Services",
  ];

  {/* Tech Stack Section */}
  <div className="mt-10">
  <h2 className="text-xl font-bold">Tech Stack</h2>
  <div className="flex flex-wrap gap-2 mt-3">
    <img src="../React.ico" alt="React" className="w-10 h-10" />
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
      alt="JavaScript"
      className="w-10 h-10"
    />
    <img src="../python-original.svg" alt="Tech 2" className="w-10 h-10" />
    <img src="../typescript.svg" alt="Tech 2" className="w-10 h-10" />
    <img src="/path/to/logo3.png" alt="Tech 3" className="w-10 h-10" />
    {/* Add more logos as needed */}
  </div>
  </div>
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2500); // Change text every 2.5 seconds

    return () => clearInterval(intervalId);
  }, [phrases.length]);

  useEffect(() => {
    setCurrentPhrase(phrases[index]);
  }, [index, phrases]);

  return (
    <main
      className="bg-slate-50 h-screen bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('cityview.jfif')",
        backgroundPosition: "center bottom",
      }}
    >
      <section id="home" className="flex justify-center items-center h-full">
        <div className="flex flex-col justify-center items-center w-10/12 h-full gap-4">
          <h1
            className="text-7xl font-bold text-white"
            style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.8)" }}
          >
            Kevin Llanos
          </h1>

          <p
            className="text-4xl text-white"
            style={{ textShadow: "6px 6px 10px rgba(0, 0, 0, 0.8)" }}
          >
            {currentPhrase}
          </p>
        </div>
      </section>

      

      <section id="projects" className="min-h-screen py-8 px-4 mb-8">
        <h2
          className="text-4xl font-bold text-center text-black mb-6"
          style={{ textShadow: "8px 8px 12px rgba(0, 0, 0, 0.4)" }}
        >
          Projects
        </h2>
        <hr className="border-blue-900 border-t-2 w-3/4 mx-auto mb-8" />

        {/* Project Content Section */}
        <div className="text-center text-black text-lg mx-auto max-w-6xl">
          {/* Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="project-card border border-gray-500 rounded-lg shadow-md p-4">
              <div className="project-image-container relative">
                <img
                  src="./ExpenseTracker.png"
                  alt="Project 1"
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-black text-xl font-bold mt-2">
                Authenticated Expense Tracker
              </h3>
              <p className="mt-4">
                <strong>Description:</strong> A Spring Boot-based expense
                tracking application with a front end (Thymeleaf) that helps
                users manage finances by tracking accounts and transactions.
                Users can perform CRUD operations to add, update, or delete
                financial data, offering an easy way to organize and monitor
                personal expenses.
              </p>
              <a
                href="https://github.com/KevinLlano/Authenticated-ExpenseTracker.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-red-500 font-bold"
              >
                GitHub Repository
              </a>
            </div>

            <div className="project-card border border-gray-500 rounded-lg shadow-md p-4">
              <div className="project-image-container relative">
                <img
                  src="./ContactList.png"
                  alt="Project 2"
                  className="w-3/4 h-auto mx-auto"
                />
              </div>
              <h3 className="text-black text-xl font-bold mt-2">
                FullStack CRUD ContactList
              </h3>
              <p className="mt-4">
                <strong>Description:</strong> Front-end React, back-end Spring
                Boot. This full-stack CRUD application allows users to manage
                contacts with ease. Features include adding, editing, and
                deleting contacts, uploading profile images, and storing
                detailed contact information such as phone numbers, emails, and
                addresses.
              </p>
              <a
                href="https://github.com/KevinLlano/CRUD-ContactList.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-red-500 font-bold"
              >
                GitHub Repository
              </a>
            </div>

            <div className="project-card border border-gray-500 rounded-lg shadow-md p-4">
              <div className="project-image-container relative">
                <img
                  src="./WorldMap.png"
                  alt="Project 3"
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-black text-xl font-bold mt-2">
                Interactive World Map
              </h3>
              <p className="mt-4">
                <strong>Description:</strong> The Interactive World Map project
                allows users to explore global statistics by clicking on
                countries to view detailed data, powered by the WorldBank API.
                Built with Angular, HTML, CSS, JavaScript, and TypeScript, it
                offers a dynamic, responsive map that displays real-time
                country-specific information.
              </p>
              <a
                href="https://github.com/KevinLlano/Interactive-World-Map.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-red-500 font-bold"
              >
                GitHub Repository
              </a>
            </div>

            <div className="project-card border border-gray-500 rounded-lg shadow-md p-4">
              <div className="project-image-container relative">
                <img
                  src="./FullStackInventoryManagementSystem.png"
                  alt="Project 4"
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-black text-xl font-bold mt-2">
                FullStack Inventory Management System
              </h3>
              <p className="mt-4">
                <strong>Description:</strong> Front-end React, back-end Spring
                Boot, this project is an inventory management system for engine
                parts and car models. It offers filtering, indexing, and search
                for easy access. Users can perform CRUD operations to manage
                inventory. Each car model is linked to its engine parts for
                better organization.
              </p>
              <a
                href="https://github.com/KevinLlano/Java-Frameworks2.0.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-red-500 font-bold font-size-xl"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen py-8">
        <h2
          className="text-4xl font-bold text-center text-black mb-6 mt-4"
          style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 0.4)" }}
        >
          Contact Me!
        </h2>
        <hr className="border-blue-900 border-t-2 w-3/4 mx-auto mb-2" />
        <ContactForm />
      </section>
    </main>
  );
}
