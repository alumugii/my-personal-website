import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";
import Base from "../components/base";
import Sides from "../components/sides";

export default function Home() {
  return (
    <>
    <Header></Header>
    <Sides></Sides>
    <div className="box">
        <Base page1="./" name1="About" page2="./contact" name2="Contact" page3="./interests" name3="Interests"></Base>
        <Image src="/projectsPaper.jpg" width="125" height="200" alt="cute paper" className="projectsPaper"></Image>
        <p className="projectsText">
        <u>To-Do List:</u>
        <br></br>
        <br></br>
        <a>• Learn Ren'py (visual novel engine using Python)</a>
        <br></br>
        <a>• Experiment w/ Neocities (website-building using HTML)</a>
        </p>
        <Image src="/eous.png" width="175" height="175" alt="eous rover" className="eous"></Image>
        <Image src="/appLab.png" width="200" height="200" alt="sdvx project" className="appLab"></Image>
        <Image src="/searchBar.png" width="350" height="100" alt="search bar" className="searchBar1"></Image>
        <Image src="/textBox.png" width="300" height="200" alt="text box" className="textBox1"></Image>
        <Image src="/searchBar.png" width="350" height="100" alt="search bar" className="searchBar2"></Image>
        <Image src="/textBox.png" width="300" height="200" alt="text box" className="textBox2"></Image>
        <h1 className="eousTitle">Motion-Sensing Rover w/ Arduino Uno</h1>
        <h1 className="sdvxTitle">SDVX Song Selector w/ App Lab</h1>
        <p className="eousDesc">Coded an Arduino Uno and connected it to a breadboard with an ultrasonic sensor. After building a base with wheels, it was able to detect obstacles in front of it and turn accordingly.</p>
        <p className="sdvxDesc">Used Javascript to navigate through lists and output the most fitting song based on user specifications. Would output song title, artist, cover, radar, and audio. Graphics assisted with App Lab.</p>
        <Image src="/madoka.png" width="100" height="100" alt="madoka sticker" className="madoka"></Image>
        <Image src="/grace.png" width="100" height="100" alt="grace sticker" className="grace"></Image>      
        </div>
      </>
  );
}