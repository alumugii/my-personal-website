import Image from "next/image";

export default function Window() {
    return (
        <>
        <p className="notif">I like visual novels and rhythm games the most as of now! I've loved video games since I was a child, so that's partly why I decided to major in CE as well.</p>
        <Image src="/bow.png" width="600" height="100" alt="bear bow" className="bow"></Image>
        </>
    )
}