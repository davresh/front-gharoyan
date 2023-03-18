import React, { useContext } from "react";
import { MyContext } from "../../../myContext";
import ImageData from "../image-data";
import "./style.scss";
const AnimationImage = () => {
    const {animation} = useContext(MyContext)
    return(
        <section className="G-animation-page">
            {animation.map(box => <ImageData key={box.id} data={box} /> )}
        </section>
    )
}

export default AnimationImage
