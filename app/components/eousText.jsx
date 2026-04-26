import Image from "next/image";

export default function EousText() {
    return (
        <>
            <Image src="/newBar.png" width="350" height="100" alt="search bar" className="searchBar1"></Image>
            <Image src="/newBox.png" width="300" height="200" alt="text box" className="textBox1"></Image>
            <h1 className="eousTitle">Motion-Sensing Rover w/ Arduino Uno</h1>
            <p className="eousDesc">Coded an Arduino Uno and connected it to a breadboard with an ultrasonic sensor. After building a base with wheels, it was able to detect obstacles in front of it and turn accordingly.</p>
        </>
    )
}