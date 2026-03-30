import Image from "next/image";
import Link from "next/link";
import Header from "../components/general/header";
import Base from "../components/general/base";
import LeftBanner from "../components/general/leftBanner";
import RightBanner from "../components/general/rightBanner";
import Contact from "../components/contact";

export default function Home() {
  return (
    <>
    <Header></Header>
    <div className="container">
      <LeftBanner></LeftBanner>
      <div className="box">
        <Base page1="./" name1="About" page2="./projects" name2="Projects" page3="./interests" name3="Interests"></Base>
        <Image src="/pinkcharm.png" width="160" height="100" alt="pink charm" className="pinkCharm"></Image>
        <Contact link="https://github.com/alumugii" image="/github.png" name="github"></Contact>
        <Contact link="https://www.linkedin.com/in/angelica-umilin-52a5b73a7/" image="/linkedin.png" name="linkedin"></Contact>
        <Contact link="mailto:aumil@uic.edu" image="/outlook.png" name="outlook"></Contact>
      </div>
      <RightBanner></RightBanner>
    </div>
      <Image src="/ribbon.png" width="585" height="100" alt="ribbon" className="ribbon"></Image>
    </>
  );
}