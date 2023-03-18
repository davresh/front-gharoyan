import React,{FC} from "react";
import { TResponsiveView } from "./types";
import { useWindowSize } from "usehooks-ts";


const ResponsiveView:FC<TResponsiveView> = ({webView,mobileView})=>{
  const {width} = useWindowSize();
  const isMobile = width <= 1024
  return isMobile ? mobileView:webView
}
export default ResponsiveView