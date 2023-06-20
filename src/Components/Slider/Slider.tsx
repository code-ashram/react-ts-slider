import {FC, useState} from "react";

import data from "../../data.ts";
import SliderImage from "../SliderImage";
import ControlPanel from "../ControlPanel";

const Slider: FC = () => {
    const [index, setIndex] = useState(0)

    const handleNextClick = (): void =>
        setIndex( (prevIndex) => prevIndex === data.length - 1 ? 0 : prevIndex + 1)

    const handlePreviousClick = (): void =>
        setIndex((prevIndex) => prevIndex <= 0 ? data.length - 1 : prevIndex - 1)

    return (
        <div className="slider p-5 rounded-md border-blue-500 border-2">
            <h1 className="text-3xl font-bold underline text-blue-500 text-center">
                React + TS Slider
            </h1>
            <SliderImage src={data[index].url} alt={data[index].alt}/>
            <ControlPanel index={index} onPressPrev={handlePreviousClick} onPressNext={handleNextClick}/>
        </div>
    )
}

export default Slider
