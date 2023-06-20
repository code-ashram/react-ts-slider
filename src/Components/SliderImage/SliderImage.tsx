import {FC} from "react";

type Props = {
    src: string,
    alt: string,
}
const SliderImage: FC<Props> = ({src, alt}) =>
    <div className="slider__window flex justify-center items-center">
        <img className="slide" src={src} alt={alt}/>
    </div>

export default SliderImage
