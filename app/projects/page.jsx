import Image from "next/image";
import Paper from "../components/paper";
import EousText from "../components/eousText";
import SDVXText from "../components/sdvxText";
import Link from "next/link";

export default function Projects() {
  return (
      <div className="fade">
        <Paper></Paper>
        <Link href="https://drive.google.com/file/d/1OIcmePtS1FrxPxe_snyAcTzjEAqU1f82/view?usp=sharing" target="_blank">
          <Image src="/eous.png" width="175" height="175" alt="eous rover" className="eous"></Image>
        </Link>
        <Link href="https://studio.code.org/projects/applab/dsgBQ6smCCRF2cK7OWBAN_3CA3UwxZlsayH14W56xNc" target="_blank">
          <Image src="/appLab.png" width="200" height="200" alt="sdvx project" className="appLab"></Image>
        </Link>
        <EousText></EousText>
        <SDVXText></SDVXText>
        <Image src="/madoka.png" width="90" height="100" alt="madoka sticker" className="madoka"></Image>
        <Image src="/grace.png" width="90" height="100" alt="grace sticker" className="grace"></Image>      
      </div>
  );
}