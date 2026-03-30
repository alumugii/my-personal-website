import Image from "next/image";
import Link from "next/link";
import Header from "./components/general/header";
import Base from "./components/general/base";
import LeftBanner from "./components/general/leftBanner";
import RightBanner from "./components/general/rightBanner";
import Intro from "./components/intro";

export default function Home() {
  return (
    <>
    <Header></Header>
    <div className="container">
      <LeftBanner></LeftBanner>
      <div className="box">
        <Base page1="./projects" name1="Projects" page2="./contact" name2="Contact" page3="./interests" name3="Interests"></Base>
        <Intro></Intro>
        <Image src="/suaa.png" className="sua" width="150" height="150" alt="sua heart"></Image>
        <Image src="/wings.png" className="wings" width="350" height="100" alt="pink wings"></Image>
      </div>
      <RightBanner></RightBanner>
    </div>
    <Image src="/bunnyy.png" className="bunny" width="600" height="300" alt="pink bunny"></Image>
    </>
  );
}