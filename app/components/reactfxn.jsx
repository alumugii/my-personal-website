import Image from "next/image";

export default function Intro(props) {
    return (
        <div>
            <h1>{props.name},</h1>
            <p>have a good day! ♡</p>
            <Image src={props.image} width="100" height="100" alt="chiikawa"></Image>
        </div>
    );
}

  