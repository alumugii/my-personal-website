import Image from "next/image";

export default function Paper() {
    return (
        <>
        <Image src="/projectsPaper.jpg" width="125" height="200" alt="cute paper" className="projectsPaper"></Image>
                <p className="projectsText">
                <b>To-Do List:</b>
                <br></br>
                <br></br>
                <span>• Learn <u><a href="https://www.renpy.org/" target="_blank">Ren'py</a></u> (visual novel engine using Python)</span>
                <br></br>
                <span>• Experiment w/ <u><a href="https://www.neocities.org/" target="_blank">Neocities</a></u> (website-building using HTML)</span>
                </p>
        </>
    )
}