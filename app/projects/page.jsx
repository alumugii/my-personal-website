import Image from "next/image";
import Link from "next/link";
import Header from "../components/general/header";
import Base from "../components/general/base";
import LeftBanner from "../components/general/leftBanner";
import RightBanner from "../components/general/rightBanner";
import Paper from "../components/paper";
import EousText from "../components/eousText";
import SDVXText from "../components/sdvxText";

export default function Home() {
  return (
    <>
    <Header></Header>
    <div className="container">
      <LeftBanner></LeftBanner>
      <div className="box">
        <Base page1="./" name1="About" page2="./contact" name2="Contact" page3="./interests" name3="Interests"></Base>
        <Paper></Paper>
        <Image src="/eous.png" width="175" height="175" alt="eous rover" className="eous"></Image>
        <Image src="/appLab.png" width="200" height="200" alt="sdvx project" className="appLab"></Image>
        <EousText></EousText>
        <SDVXText></SDVXText>
        <Image src="/madoka.png" width="100" height="100" alt="madoka sticker" className="madoka"></Image>
        <Image src="/grace.png" width="100" height="100" alt="grace sticker" className="grace"></Image>      
      </div>
        <RightBanner></RightBanner>
    </div>
      </>
  );
}