import Image from "next/image";

export default function SDVXText() {
    return (
        <>
        <Image src="/newBar.png" width="350" height="100" alt="search bar" className="searchBar2"></Image>
        <Image src="/newBox.png" width="300" height="200" alt="text box" className="textBox2"></Image>
        <h1 className="sdvxTitle">SDVX Song Selector w/ App Lab</h1>
        <p className="sdvxDesc">Used Javascript to navigate through lists and output the most fitting song based on user specifications. Would output song title, artist, cover, radar, and audio. Graphics assisted with App Lab.</p>
        </>
    )
}