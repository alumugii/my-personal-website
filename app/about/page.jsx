import Image from "next/image";
import Intro from "../components/intro";

export default function About() {
    return (
    <div className="aboutFade">
        <Intro></Intro>
        <Image src="/suaa.png" className="sua" width="150" height="150" alt="sua heart"></Image>
        <Image src="/wings.png" className="wings" width="350" height="100" alt="pink wings"></Image>
        <Image src="/bunnyy.png" className="bunny" width="600" height="300" alt="pink bunny" loading="eager"></Image>
    </div>
    )
}


        