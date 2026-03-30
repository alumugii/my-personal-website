import Image from "next/image";
import Link from "next/link";

export default function Contact(props) {
    return (
    <>
    <Link href={props.link} target="_blank">
          <Image src={props.image} width="250" height="100" alt={props.name} className={props.name}></Image>
    </Link>
    </>
    )
}