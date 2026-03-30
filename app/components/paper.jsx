import Image from "next/image";

export default function Paper() {
    return (
        <>
        <Image src="/projectsPaper.jpg" width="125" height="200" alt="cute paper" className="projectsPaper"></Image>
                <p className="projectsText">
                <u>To-Do List:</u>
                <br></br>
                <br></br>
                <a>• Learn Ren'py (visual novel engine using Python)</a>
                <br></br>
                <a>• Experiment w/ Neocities (website-building using HTML)</a>
                </p>
        </>
    )
}