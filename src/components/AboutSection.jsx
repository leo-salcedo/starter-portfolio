"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul style={{ paddingLeft: "20px", listStyleType: "square" }}>
        <li style={{ marginBottom: "15px", fontSize: "16px" }}>Java</li>
        <li style={{ marginBottom: "15px", fontSize: "16px" }}>Python</li>
        <li style={{ marginBottom: "15px", fontSize: "16px" }}>JavaScript</li>
        <li style={{ marginBottom: "15px", fontSize: "16px" }}>HTML/CSS</li>
        <li style={{ marginBottom: "15px", fontSize: "16px" }}>React</li>
        <li style={{ marginBottom: "15px", fontSize: "16px" }}>Node.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul
        style={{ paddingLeft: "20px", listStyleType: "disc", fontSize: "16px" }}
      >
        <li style={{ marginBottom: "20px" }}>
          <strong style={{ fontSize: "18px", textDecoration: "underline" }}>
            University of Maryland, College Park
          </strong>
          <ul
            style={{
              paddingLeft: "20px",
              listStyleType: "circle",
              fontSize: "16px",
            }}
          >
            <li style={{ fontSize: "14px" }}>
              Bachelor of Science in Computer Science
            </li>
            <li style={{ fontSize: "16px", textDecoration: "underline" }}>
              <strong>Relevant Coursework:</strong>
            </li>
            <ul
              style={{
                paddingLeft: "20px",
                listStyleType: "square",
                fontSize: "14px",
              }}
            >
              <li style={{ fontSize: "14px" }}>
                Object-Oriented Programming II
              </li>
              <li style={{ fontSize: "14px" }}>
                Honors Multivariable Calculus, Linear Algebra, and Differential
                Equations I
              </li>
            </ul>
          </ul>
        </li>
        <li style={{ marginBottom: "20px" }}>
          <strong style={{ fontSize: "18px", textDecoration: "underline" }}>
            Lone Star College - CyFair
          </strong>
          <ul
            style={{
              paddingLeft: "20px",
              listStyleType: "circle",
              fontSize: "16px",
            }}
          >
            <li style={{ fontSize: "16px", textDecoration: "underline" }}>
              <strong>Relevant Coursework:</strong>
            </li>
            <ul
              style={{
                paddingLeft: "20px",
                listStyleType: "square",
                fontSize: "14px",
              }}
            >
              <li style={{ fontSize: "14px" }}>Calculus I</li>
              <li style={{ fontSize: "14px" }}>Calculus II</li>
            </ul>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul style={{ paddingLeft: "20px", listStyleType: "circle" }}>
        <li style={{ marginBottom: "12px", fontSize: "16px" }}>
          Intern @ Houston Basketball Academy
        </li>
        <li style={{ marginBottom: "12px", fontSize: "16px" }}>
          Lab Mentor @ iCode Cypress
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/Purple_Desktop_Setup.jpg"
          width={550}
          height={550}
        />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About</h2>
          <p className="text-base lg:text-lg">
            This is the website of{" "}
            <strong
              style={{
                background:
                  "linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              LEO SALCEDO
            </strong>
            , a Computer Science major at the University of
            Maryland. There are many like it, but this one is
            mine. I am also a President's Scholar in University Honors within
            the Honors College. I'm interested in full-stack and backend
            software engineering.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
