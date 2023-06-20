import {FC, MouseEventHandler} from "react";

type Props = {
    onClick: MouseEventHandler<HTMLButtonElement>
    children: string
}

const Button: FC<Props> = ({onClick, children}) =>
    <button onClick={onClick} className="slider__btn-previous p-3 text-blue-500 rounded-md border-2 border-blue-600">
        {children}
    </button>

export default Button
