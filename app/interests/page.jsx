import Image from "next/image";
import Link from "next/link";
import Header from "../components/general/header";
import Base from "../components/general/base";
import LeftBanner from "../components/general/leftBanner";
import RightBanner from "../components/general/rightBanner";
import Window from "../components/window";

export default function Home() {
  return (
    <>
    <Header></Header>
    <div className="container">
      <LeftBanner></LeftBanner>
      <div className="box">
        <Base page1="./" name1="About" page2="./projects" name2="Projects" page3="./contact" name3="Contact"></Base>
        <Image src="/fatamoru.jpg" width="250" height="200" alt="fatamoru peak" className="fatamoru"></Image>
        <Image src="/metaphor.jpg" width="250" height="200" alt="love metaphor" className="metaphor"></Image>
        <Image src="/chiral.png" width="175" height="200" alt="nitro chiral" className="chiral"></Image>
        <Image src="/sdvx.jpg" width="200" height="200" alt="sdvx exceed gear" className="sdvx"></Image>
        <Image src="/nier.webp" width="200" height="200" alt="nier automata" className="nier"></Image> 
        <Image src="/aoi.png" width="150" height="150" alt="mukou aoi" className="aoi"></Image>
        <Image src="/angel.png" width="200" height="100" alt="angel wings" className="angel"></Image>
        <Image src="/popup.png" width="215" height="100" alt="window popup" className="popup"></Image>
        <Window></Window>
      </div>
      <RightBanner></RightBanner>
    </div>
    </>
  );
}