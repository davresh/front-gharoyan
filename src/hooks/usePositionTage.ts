import React, { useEffect, useRef, useState, RefObject } from 'react';

export default function usePosition(){
    const [currentPosition,setCurrentPosition] = useState(0);
    const [prevPosition,setPrevPosition] = useState(0);
    const headerRef: RefObject<HTMLElement> = useRef<HTMLElement>(null);
    window.onscroll = () => {
        setCurrentPosition(window.scrollY)
    }
    useEffect(()=>{
       if(headerRef.current){
            if (currentPosition > prevPosition) {
                if (currentPosition > 200) {
                    headerRef.current.classList.add('G-header-anim');
                }
            } else {
                if (currentPosition < 200) {
                    headerRef.current.classList.remove('G-header-anim');
                }
            }
       }
        setPrevPosition(currentPosition);
    },[currentPosition])

    return headerRef
}