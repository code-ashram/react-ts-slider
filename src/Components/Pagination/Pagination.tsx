import {FC, ReactNode} from "react";

type Props = {
    children: ReactNode
}

const Pagination: FC<Props> = ({children}) =>
    <span className="slider__pagination text-lg text-blue-500">{children}</span>

export default Pagination
