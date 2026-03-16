import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";
import Base from "./components/base";
import Sides from "./components/sides";

export default function Home() {
  return (
    <>
    <Header></Header>
    <Sides></Sides>
    <div className="box">
        <Base page1="./projects" name1="Projects" page2="./contact" name2="Contact" page3="./interests" name3="Interests"></Base>
        <Image src="/aboutPaper.png" className="aboutPaper" width="410" height="300" alt="pink paper"></Image>
        <Image src="/suaa.png" className="sua" width="150" height="150" alt="sua heart"></Image>
        <Image src="/wings.png" className="wings" width="350" height="100" alt="pink wings"></Image>
        <p className="aboutText">
          <u>About Angelica: </u>
          <br></br>
          <br></br>
          Angelica Umilin is an undergraduate at University of Chicago Illinois, currently enrolled in the Computer Engineering program. She is goal-driven and motivated to learn new things while finding her footing in a potential specialty. Her interests lie in coding while integrating knowledge of hardware into her projects. Although only a freshman in university as of now, she has taken her experience from high school to do her best every day, learning new things while improving her skills and herself. As a CE major, she’s had the joy of taking ECE and CS classes for the first time, letting her develop expertise with circuit and code building after being exposed to both through Girls Who Code at UIC during her senior year. Overall, her curiosity to learn and problem-solving abilities will continue to follow her into future projects.
        </p>
      </div>
      <Image src="/bunnyy.png" className="bunny" width="650" height="300" alt="pink bunny"></Image>
      </>
  );
}
