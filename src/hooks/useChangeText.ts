import React, { useState,MouseEventHandler } from "react";

export default function (){
    const [textLgt,setTextLgt] = useState(false)
    const changeText: React.MouseEventHandler<HTMLSpanElement> = () => {
        setTextLgt(!textLgt)
    }
    return {textLgt,changeText}
}