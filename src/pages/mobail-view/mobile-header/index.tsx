import React, { useState,MouseEventHandler } from "react";
import './style.scss'
const MobailHeader = () => {
    const [menu,setMenu] = useState(false)
    const menuMove:MouseEventHandler<HTMLElement> = (event) => {
        event.stopPropagation()
        setMenu(!menu)
    }
    return(
        <div className='M-header-logotype'>
            <span 
                className="icon-bars-solid"
                onClick={menuMove}
                />
            <h1 className='M-header-text'>logotype</h1>
            <span className='icon-magnifying'/>
            <div className={`M-header-nav ${menu?'M-nav-visible':''}`}            >
                <ul className={`M-header-list ${menu?'M-menu-anim':''}`}                >
                    <li className="M-list-li M-list-head">
                        <h1>logotype</h1>
                        <span 
                            className="icon-cross"
                            onClick={menuMove}
                        />
                    </li>
                    <li className='M-list-li'>Demos<span className='icon-chevron-down'/></li>
                    <li className='M-list-li M-down-list-1'>
                        Post
                        <span className='icon-chevron-down'/>
                        <ul className='M-list-down'>
                            <li className='M-list-down-li'>Post Header<span className='icon-chevron-right'/></li>
                            <li className='M-list-down-li'>Post Layout<span className='icon-chevron-right'/></li>
                            <li className='M-list-down-li'>Post Buttons<span className='icon-chevron-right'/></li>
                            <li className='M-list-down-li'>Gallery Post<span className='icon-chevron-right'/></li>
                            <li className='M-list-down-li'>Video Post<span className='icon-chevron-right'/></li>
                        </ul>
                    </li>
                    <li className='M-list-li'>Features<span className='icon-chevron-down'/></li>
                    <li className='M-list-li'>Categories<span className='icon-chevron-down'/></li>
                    <li className='M-list-li'>Shop<span className='icon-chevron-down'/></li>
                    <li className='M-list-li'>Buy Now</li>
                </ul>
            </div>
        </div>
    )
}

export default MobailHeader;