import { AnimationProps } from '../../../myContext';
import './style.scss'
import React from "react";
import girl from '../../../assets/image/user12.jpg'
const ImageData = ({data}:AnimationProps) => (
    <div className="G-anim-box">
        <div className="G-anim-img" >
            <img src={data.image} alt={data.name} />
        </div>
        <div className='G-anim-text'>
            <h6 className='G-anim-logo'>{data.logoName}</h6>
            <h1 className='G-data-name'>{data.name}</h1>
        </div>
        <div className='G-anim-hover'>
            <div>
            <h6>sale up to 50%</h6>
            <h1>Pulvinar Amet Morbi Efficitur Justo</h1>
            <img src={girl} alt="girl" />
            <p>Nunc venenatis adipiscing mauris lorem non risus molestie ut. Dolor ex. Cras sodales efficitur nec </p>
            <h4><span className='G-underline-text'>Shop All
                <span className='icon-chevron-up'/></span>
            </h4>
            </div>
        </div>
    </div>
)

export default ImageData