"use client"; // Ensures the component is treated as a Client Component

import Image from "next/image";
import ContactForm from "./components/ContactForm";
import { useState, useEffect } from "react";

export default function Home() {
  const phrases = [
    "I am a Java Developer",
    "I am a React Developer",
    "I am a Full Stack Developer",
    "I Love Learning",
    "I am a Problem Solver",
    "Experience With AWS & Azure Cloud Services",
  ];

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
        <h2 className="text-4xl font-bold text-center text-black mb-6 " style={{ textShadow: "8px 8px 12px rgba(0, 0, 0, 0.4)" }}>
          Projects
        </h2>
        <hr className="border-blue-900 border-t-2 w-3/4 mx-auto mb-8" />
        
        {/* Project Content Section */}
        <div className="text-center text-black text-lg mx-auto max-w-4xl">
          {/* Replace this placeholder text with your project details */}
          <p className="mb-4">
            Here you can showcase your most significant projects, providing descriptions, technologies used, and links to live demos or repositories.
          </p>
          {/* Example Project List */}
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong>Project 1:</strong> A web application built with React and Node.js to manage tasks and collaborate with team members.
            </li>
            <li>
              <strong>Project 2:</strong> An e-commerce platform developed with Next.js and Tailwind CSS, featuring a shopping cart, product search, and user authentication.
            </li>
            <li>
              <strong>Project 3:</strong> A portfolio website showcasing a collection of my work, created with HTML, CSS, and JavaScript.
            </li>
          </ul>
        </div>
      </section>

      <section id="education" className="py-8 px-4  mb-8">
        <h2 className="text-4xl font-bold text-center text-black mb-6 " style={{ textShadow: "8px 8px 12px rgba(0, 0, 0, 0.4" }}>
          Education
        </h2>
        <hr className="border-blue-900 border-t-2 w-3/4 mx-auto mb-2" />

        {/* University Info Section */}
        <div className="text-center mb-10">
          <Image
            src="/wgulogo.webp"
            alt="WGU Logo"
            width={500}
            height={400}
            className="mx-auto"
          />
        </div>

        {/* Degree and Details */}
        <div className="text-center text-blue-800 font-semibold text-xl mb-2">
          BACHELOR OF SCIENCE IN SOFTWARE ENGINEERING
        </div>

        <div className="text-center text-black text-sm mb-14">
          Western Governors University, Salt Lake City, UT
        </div>

        {/* Two-column Course List */}
        <div className="grid grid-cols-2 gap-6 text-lg text-black mx-auto max-w-4xl pl-24">
          <ul className="list-disc list-inside space-y-2" style={{ textShadow: "8px 8px 12px rgba(0, 0, 0, 0.4" }}>
            <li>Advanced Java</li>
            <li>JavaScript Programming</li>
            <li>Python Programming</li>
            <li>Advanced Data Management</li>
            <li>UX/UI Design</li>
            <li>Mobile Application Development</li>
            <li>Cloud Foundations</li>
          </ul>
          <ul className="list-disc list-inside space-y-2">
            <li>Software Design And Quality Assurance</li>
            <li>Front-End Web Development</li>
            <li>Back-End Programming</li>
            <li>Data Structures and Algorithms</li>
            <li>Software Security and Testing</li>
            <li>Hardware and Operating Systems</li>
            <li>Project Management</li>
          </ul>
        </div>
      </section>

      <section id="certifications" className="py-4 mt-8">
        <h2 className="text-4xl font-bold text-center text-black mb-6 mt-4" style={{ textShadow: "8px 8px 12px rgba(0, 0, 0, 0.4)" }}>Certifications</h2>
        <hr className="border-blue-900 border-t-2 w-3/4 mx-auto mb-2" />
        <div className="flex gap-4 justify-center mb-2 flex-wrap">
          <Image src="/ccp.png" alt="AWS Certification" width={400} height={200} className="border border-black"/>
          <Image src="/itil.png" alt="ITIL Certification" width={400} height={100} className="border border-black"/>
          
          {/* CompTIA Certification with Candidate Info */}
          <div className="flex flex-col items-center">
            <div className="text-center text-black text-sm mb-2">
              <p>Candidate: Kevin Llanos</p>
              <p>Candidate ID: COMP001022445836</p>
            </div>
            <Image src="/comptia.jpg" alt="CompTIA Certification" width={500} height={500} className="border border-black"/>
          </div>

          <Image src="/linuxcert.png" alt="Linux Certification" width={650} height={300} className="border border-black" />
        </div>
      </section>

      <section id="contact" className="min-h-screen py-8">
        <h2 className="text-4xl font-bold text-center text-black mb-6 mt-4" style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 0.4)" }}>Contact Me!</h2>
        <hr className="border-blue-900 border-t-2 w-3/4 mx-auto mb-2" />
        <ContactForm />
      </section>
    </main>
  );
}
