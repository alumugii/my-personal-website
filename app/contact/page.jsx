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
        <Base page1="./" name1="About" page2="./projects" name2="Projects" page3="./interests" name3="Interests"></Base>
        <Image src="/pinkcharm.png" width="160" height="100" alt="pink charm" className="pinkCharm"></Image>
        <Link href="https://github.com/alumugii" target="_blank">
          <Image src="/github.png" width="250" height="100" alt="github" className="github"></Image>
        </Link>
        <Link href="https://www.linkedin.com/in/angelica-umilin-52a5b73a7/" target="_blank">
          <Image src="/linkedin.png" width="250" height="100" alt="linkedin" className="linkedin"></Image>
        </Link>
        <Link href="mailto:aumil@uic.edu" target="_blank">
          <Image src="/outlook.png" width="250" height="100" alt="outlook" className="outlook"></Image>
        </Link>
      </div>
      <Image src="/ribbon.png" width="600" height="100" alt="ribbon" className="ribbon"></Image>
      </>
  );
}