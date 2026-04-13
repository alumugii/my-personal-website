import Image from "next/image";
import Paper from "../components/paper";
import EousText from "../components/eousText";
import SDVXText from "../components/sdvxText";

export default function Projects() {
  return (
    <>
        <Paper></Paper>
        <Image src="/eous.png" width="175" height="175" alt="eous rover" className="eous"></Image>
        <Image src="/appLab.png" width="200" height="200" alt="sdvx project" className="appLab"></Image>
        <EousText></EousText>
        <SDVXText></SDVXText>
        <Image src="/madoka.png" width="100" height="100" alt="madoka sticker" className="madoka"></Image>
        <Image src="/grace.png" width="100" height="100" alt="grace sticker" className="grace"></Image>      
      </>
  );
}