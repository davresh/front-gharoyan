
import React, { useState } from "react";
import './style.scss'
import { ProductProps } from "../../../myContext";
import useChangeText from "../../../hooks/useChangeText";


const Product = ({product}:ProductProps) => {
    const {textLgt,changeText} = useChangeText()
    return (
        <figure className="G-figure-box">
            <img className="G-figure-img" src={product.image} srcSet={`${product.image} 1x, ${product.image} 0x`} alt={product.name}/>
            <figcaption className="G-figcaption figcaption-hobby">{product.hobby}</figcaption>
            <figcaption className="G-figcaption figcaption-name">{product.name}</figcaption>
            <figcaption className="G-figcaption figcaption-data">Nike Bove <span>{product.dataDownload} 3K Views</span></figcaption>
            <figcaption className="G-figcaption figcaption-about">
                <p>{textLgt?product.about.substring(0,50):product.about} 
                    <span 
                        className="product-about-len"
                        onClick={changeText}
                        >{textLgt?'...More':' Less'}
                    </span>
                </p>
            </figcaption>
        </figure>
    )
}

export default Product;