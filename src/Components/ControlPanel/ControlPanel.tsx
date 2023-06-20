import {FC} from "react";
import Button from "../Button";
import Pagination from "../Pagination";
import data from "../../data.ts";

type Props = {
    index: number,
    onPressPrev: () => void,
    onPressNext: () => void,
}

const ControlPanel: FC<Props> = ({index, onPressPrev, onPressNext}) =>
    <div className="slider__wrapper flex justify-around items-center">
        <Button onClick={onPressPrev}>&#11013;</Button>
        <Pagination>{index + 1} / {data.length}</Pagination>
        <Button onClick={onPressNext}>&#10145;</Button>
    </div>

export default ControlPanel
