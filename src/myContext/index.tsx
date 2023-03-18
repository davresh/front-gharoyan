import React, { createContext} from "react";
//images
import userImage1 from '../assets/image/user1.jpg'
import userImage2 from '../assets/image/user2.jpg'
import userImage3 from '../assets/image/user3.jpg'
import userImage4 from '../assets/image/user4.jpg'
import userImage5 from '../assets/image/user5.jpg'
import userImage6 from '../assets/image/user6.jpg'
import userImage7 from '../assets/image/user7.jpg'
import userImage8 from '../assets/image/user8.jpg'
import userImage9 from '../assets/image/user9.jpg'
import userImage10 from '../assets/image/user10.jpg'
import userImage11 from '../assets/image/user11.jpg'
import userImage12 from '../assets/image/user12.jpg'

export interface ModalProducts {
    id:number,
    image:string,
    hobby:string,
    name:string,
    dataDownload:string,
    about:string,
}
export interface ModalAnimation {
    id:number,
    image:string,
    name:string,
    logoName:string,
}
export interface HeadModalProducts {
    product:ModalProducts[],
    animation:ModalAnimation[],
}
export interface ProductProps {
    product:ModalProducts,
}
export interface AnimationProps {
    data:ModalAnimation
}
export const MyContext = createContext<HeadModalProducts>({
    product: [
      {
        id:1,
        image: userImage1,
        hobby: "Lifestyle",
        name: "Eat Right For Your Exercise Regime",
        dataDownload: "April 8, 2018",
        about:
          "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button",
      },
    ],
    animation:[
        {
            id:1,
            image:userImage10,
            name:'Eget Tortor,  Mollis Habitasse.',
            logoName:'new collection'
        }
    ]
  }); 
export const ModalState = ({children}:{children: React.ReactNode}) => {
    return (
        <MyContext.Provider value={
            {
                product:[
                    {
                        id:1,
                        image:userImage1,
                        hobby:'Lifestyle',
                        name:'Eat Right For Your Exercise Regime',
                        dataDownload:'April 8, 2018',
                        about:'Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button'
                    },
                    {
                        id:2,
                        image:userImage2,
                        hobby:'Lifestyle',
                        name:'The Look: Perfect Balance',
                        dataDownload:'April 8, 2018',
                        about:'Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button'
                    },
                    {
                        id:3,
                        image:userImage3,
                        hobby:'Style',
                        name:'Fun Things to Do in Rome',
                        dataDownload:'April 8, 2018',
                        about:'Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button'
                    },
                    {
                        id:4,
                        image:userImage4,
                        hobby:'Style',
                        name:'24 Colorful Ceilings That Add Unexpected Contrast to Any Roome',
                        dataDownload:'April 8, 2018',
                        about:'Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button'
                    },
                    {
                        id:5,
                        image:userImage5,
                        hobby:'Lifestyle',
                        name:'9 New Songs to Heat Up Your Fall Playlist',
                        dataDownload:'April 8, 2018',
                        about:'Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button'
                    },
                    {
                        id:6,
                        image:userImage6,
                        hobby:'Events',
                        name:'What You Need on Your Bedside Table',
                        dataDownload:'April 8, 2018',
                        about:'Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button'
                    },
                    {
                        id:7,
                        image:userImage7,
                        hobby:'Travel',
                        name:'When Two Wheels Are Better Than Four',
                        dataDownload:'April 8, 2018',
                        about:'Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button'
                    },
                    {
                        id:8,
                        image:userImage8,
                        hobby:'Travel',
                        name:'26 Living Room Ideas from the Homes of Top Designers',
                        dataDownload:'April 8, 2018',
                        about:'Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button'
                    },
                    {
                        id:9,
                        image:userImage9,
                        hobby:'Music',
                        name:'What Makes Your City’s Style Unique',
                        dataDownload:'April 8, 2018',
                        about:'Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button'
                    },
                ],
                animation:[
                    {
                        id:10,
                        image:userImage10,
                        name:'Eget Tortor,  Mollis Habitasse.',
                        logoName:'new collection'
                    },
                    {
                        id:11,
                        image:userImage11,
                        name:'Molestie Cursus',
                        logoName:'sale up to 50%'
                    }
                ]

            }
        }>
            {children}
        </MyContext.Provider>
    )
}


