import Image from "next/image";
import Contact from "../components/contact";

export default function Contacts() {
  return (
    <>
        <Image src="/pinkcharm.png" width="160" height="0" alt="pink charm" className="pinkCharm"></Image>
        <Contact link="https://github.com/alumugii" image="/github.png" name="github"></Contact>
        <Contact link="https://www.linkedin.com/in/angelica-umilin-52a5b73a7/" image="/linkedin.png" name="linkedin"></Contact>
        <Contact link="mailto:aumil@uic.edu" image="/outlook.png" name="outlook"></Contact>
        <Image src="/ribbon.png" width="585" height="100" alt="ribbon" className="ribbon"></Image>
    </>
  );
}