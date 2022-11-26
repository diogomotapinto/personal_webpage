"use client";
import { useState } from "react";

import { useTransition, animated } from "react-spring";

import Image from "next/image";

type Exp = {
  id: number;
  dates: string;
  title: string;
  subtitle: string;
  content: string;
};

const Experience: Exp[] = [
  {
    id: 1,
    dates: "2022 - Ongoing",
    title: "Prime IT",
    subtitle: "FullStack Developer",
    content:
      "Worked as a full-stack developer for a company based in Germany. During this time worked with technologies such as Vue.js and AWS cloud services.",
  },
  {
    id: 2,
    dates: "2021 - 2022",
    title: "Deloitte",
    subtitle: "OutSystems Developer",
    content:
      "Integrated a consulting team developed a product for a big company based in Scotland. The team used Scrum for project management with tools such as Jira and Confluence, and OutSystems as the primary technology to build this product.",
  },
  {
    id: 3,
    dates: "2020 - 2021",
    title: "Inesc TEC",
    subtitle: "Research Intern - FullStack Developer",
    content:
      "Developed a project using innovative technologies such as Next.js (a React.js framework), GraphQL, node.js with typescript, and PostgreSQL. The project consisted of a platform to gather data from Bluetooth devices connect to a smartphone. During my internship, I also had the opportunity to modify an Android application made with Java to fit my use case.",
  },
  {
    id: 4,
    dates: "2016 - 2021",
    title: "FEUP",
    subtitle: "Student",
    content: "Master in Informatics and Computing Engineering",
  },
];

const images: { path: string; alt: string }[] = [
  {
    path: "react",
    alt: "react",
  },

  {
    path: "vuejs",
    alt: "vuejs",
  },
  {
    path: "typescript",
    alt: "typescript",
  },
  {
    path: "nodejs",
    alt: "nodejs",
  },

  {
    alt: "amazonwebservices",
    path: "amazonwebservices",
  },
  {
    alt: "postgresql",
    path: "postgresql",
  },
  {
    alt: "figma",
    path: "figma",
  },
  {
    alt: "git",
    path: "git",
  },
  {
    alt: "andoid",
    path: "android",
  },
];

export default function Work() {
  const [exps] = useState(Experience);
  const transitions = useTransition(exps, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    delay: 400,
    trail: 100,
  });

  return (
    <div className="fixed h-screen w-full pt-24 z-0 overflow-y-scroll">
      <div className="h-6/12 w-9/12  justify-center justify-self-center mx-auto my-auto ">
        <h2 className="font-bold text-6xl py-2 text-justify">Experience</h2>
        <ul>
          {transitions(({ opacity }, item) => (
            <>
              <animated.li
                style={{
                  opacity: opacity.to((o) => o),
                }}
                key={item.id}
                className={`grid md:grid-rows-2 py-4`}
              >
                <div className="font-bold text-2xl py-4 flex flex-col sm:text-8xl">
                  <span> {item.title}</span>
                  <div className="font-bold  text-xl py-4 sm:text-4xl">
                    {item.dates}
                  </div>

                  <span className="font-regular opacity-50 text-sm sm:text-2xl">
                    {item.subtitle}
                  </span>
                </div>
                <div className="font-bold my-auto py-4 text-gray-500 sm:text-4xl">
                  {item.content}
                </div>
              </animated.li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}
