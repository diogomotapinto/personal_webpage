import type { NextPage } from "next";
import { ReactElement, Suspense, useRef, useState } from "react";
import styles from "../styles/index.module.scss";
import MainLayout from "../layouts/MainLayout";
import Head from "next/head";
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

const About: NextPage = () => {
  const [exps] = useState(Experience);
  const transitions = useTransition(exps, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    delay: 400,
    trail: 100,
  });
  const ref = useRef<HTMLDivElement>(null);

  const goTo = () => {
    if (ref !== null && ref.current !== null) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <MainLayout>
      <div className="fixed h-screen w-full pt-24 z-0 overflow-y-scroll">
        <div
          onClick={goTo}
          className="fixed w-10 h-10 bg-sky-500 p-2 text-center rounded shadow-md bottom-6 left-6 text-white cursor-pointer"
        >
          D
        </div>
        <div className="h-6/12 w-9/12  justify-center justify-self-center mx-auto my-auto ">
          <h2 className="font-bold text-4xl py-2 text-blue-400 text-justify">
            Experience
          </h2>
          <ul>
            {transitions(({ opacity }, item) => (
              <>
                <animated.li
                  style={{
                    opacity: opacity.to((o) => o),
                  }}
                  key={item.id}
                  className={`grid md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 py-4  ${
                    item.id !== exps.length ? "border-b-2" : ""
                  }`}
                >
                  <div className="font-bold  text-xl py-4">{item.dates}</div>
                  <div className="font-bold text-2xl py-4 flex flex-col">
                    <span> {item.title}</span>

                    <span className="font-regular opacity-50 text-sm">
                      {item.subtitle}
                    </span>
                  </div>
                  <div className="font-bold my-auto py-4 text-gray-500">
                    {item.content}
                  </div>
                </animated.li>
              </>
            ))}
          </ul>
        </div>
        <div
          ref={ref}
          className="h-full w-9/12  justify-center justify-self-center mx-auto my-auto mt-4"
        >
          <h2 className="font-bold text-4xl py-2 text-teal-500">
            Technologies
          </h2>
          <div className="p-4 grid w-full h-full grid-cols-3 gap-6 grid-rows-3">
            {images.map((image) => {
              return (
                <Image
                  key={image.alt}
                  width={42}
                  height={42}
                  className="grayscale hover:grayscale-0"
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${image.path}/${image.path}-original.svg`}
                  alt={image.alt}
                />
              );
            })}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
