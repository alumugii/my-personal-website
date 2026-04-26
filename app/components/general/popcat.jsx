"use client";
import { useState } from 'react';

import Image from "next/image";

export default function Popcat() {
    const [count, setCount] = useState(0);

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setCount(count + 1);
    
    setTimeout(() => {
        setIsClicked(false);
    }, 100);
};

return (
    <div className="popcat">
        <div className="counter">
            <h1>Pops: {count}</h1>
        </div>

        <button onClick={handleClick}>
            <Image src={isClicked ? "/pop.jpg" : "/noPop.jpg"} width="50" height="50" alt="popcat">
            </Image>
        </button>
    </div>
    );
}