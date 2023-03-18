
import React, { useEffect, useRef, useState, RefObject } from 'react';
import './style.scss'
import usePosition from '../../../hooks/usePositionTage';

const Header = () => {
    const headerRef = usePosition()
    return (
    <>
        <div className='G-header-logotype'>
            <h1 className='G-header-text'>logotype</h1>
            <span className='icon-magnifying'/>
        </div>
        <header className='G-header-page' ref={headerRef}>
            <nav className='G-header-nav'>
                <ul className='G-header-list'>
                    <li className='G-list-li'>Demos<span className='icon-chevron-down'/></li>
                    <li className='G-list-li down-list-1'>
                        Post
                        <span className='icon-chevron-down'/>
                        <ul className='G-list-down'>
                            <li className='G-list-down-li'>Post Header<span className='icon-chevron-right'/></li>
                            <li className='G-list-down-li'>Post Layout<span className='icon-chevron-right'/></li>
                            <li className='G-list-down-li'>Post Buttons<span className='icon-chevron-right'/></li>
                            <li className='G-list-down-li'>Gallery Post<span className='icon-chevron-right'/></li>
                            <li className='G-list-down-li'>Video Post<span className='icon-chevron-right'/></li>
                        </ul>
                    </li>
                    <li className='G-list-li'>Features<span className='icon-chevron-down'/></li>
                    <li className='G-list-li'>Categories<span className='icon-chevron-down'/></li>
                    <li className='G-list-li'>Shop<span className='icon-chevron-down'/></li>
                    <li className='G-list-li'>Buy Now</li>
                </ul>
            </nav>
        </header>
    </>
    )
}

export default Header;