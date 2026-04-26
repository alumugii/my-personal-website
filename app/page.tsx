"use client";
import { useState } from 'react';

import Header from "./components/general/header";
import Base from "./components/general/base";
import LeftBanner from "./components/general/leftBanner";
import RightBanner from "./components/general/rightBanner";
import About from "./about/page";
import Contacts from "./contact/page";
import Projects from "./projects/page";
import Interests from "./interests/page";
import Music from "./components/general/music";

export default function Home() {

  const [isAbout, setAbout] = useState(true);
  const [isContacts, setContacts] = useState(false);
  const [isProjects, setProjects] = useState(false);
  const [isInterests, setInterests] = useState(false);

  const [isActive, setActive] = useState("about");

  const toggleAbout = () => {
    setActive("about");
  };
  const toggleContacts = () => {
    setActive("contacts");
  };
  const toggleProjects = () => {
    setActive("projects");
  };
  const toggleInterests = () => {
    setActive("interests");
  };

  return (
    <>
    <div className="top">
      <Header></Header>
      <Music></Music>
    </div>
    <div className="container">
      <LeftBanner></LeftBanner>
      <div className="box">
        <Base></Base>
        <button type="button" className="button1" onClick={toggleAbout}>
                About
        </button>
        <button type="button" className="button2" onClick={toggleProjects}>
                Projects
        </button>
        <button type="button" className="button3" onClick={toggleContacts}>
                Contact
        </button>
        <button type="button" className="button4" onClick={toggleInterests}>
                Interests
        </button>
        {isActive === "about" && <About />}
        {isActive === "projects" && <Projects />}
        {isActive === "contacts" && <Contacts />}
        {isActive === "interests" && <Interests />}
      </div>
      <RightBanner></RightBanner>
    </div>
    </>
  );
}