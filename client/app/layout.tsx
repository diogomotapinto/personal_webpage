"use client";
import { useState } from "react";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <html lang="en">
      <head>
        <title>Create Next App</title>
        <meta name="description" content="Diogo's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body data-nav={nav}>
        <button id="nav-toggle" onClick={toggleNav} type="button">
          <i className="open fa-light fa-bars-staggered">Menu</i>
          <i className="close fa-light fa-xmark-large">Close</i>
        </button>
        <main>{children}</main>
        <nav>
          <div id="nav-links">
            <Link href="/" className="nav-link" onClick={() => setNav(false)}>
              <h2 className="nav-link-label rubik-font">Home</h2>
              <img
                alt=""
                className="nav-link-image"
                src="https://images.unsplash.com/photo-1513735492246-483525079686?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
              />
            </Link>
            <Link
              href="/work"
              className="nav-link"
              onClick={() => setNav(false)}
            >
              <h2 className="nav-link-label rubik-font">Work</h2>
              <img
                alt=""
                className="nav-link-image"
                src="https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              />
            </Link>
            {/* <Link
              href="/about"
              className="nav-link"
              onClick={() => setNav(false)}
            >
              <h2 className="nav-link-label rubik-font">About</h2>
              <img
                alt=""
                className="nav-link-image"
                src="https://images.unsplash.com/photo-1642702550383-3436f1b3d6ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
              />
            </Link>
            <Link
              href="/contact"
              className="nav-link"
              onClick={() => setNav(false)}
            >
              <h2 className="nav-link-label rubik-font">Contact</h2>
              <img
                alt=""
                className="nav-link-image"
                src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              />
            </Link> */}
          </div>
        </nav>
      </body>
    </html>
  );
}
