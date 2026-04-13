import Image from "next/image";
import Link from "next/link";

export default function Base(props) {
    return (
        <>
        <Image src="/banner.jpg" width="470" height="50" alt="pink banner"></Image>
        <Image src="/icon.png" className="icon" width="125" height="125" alt="angel pfp"></Image>
        <h1 className="title">angel's personal site!</h1>
    </>
    )
}