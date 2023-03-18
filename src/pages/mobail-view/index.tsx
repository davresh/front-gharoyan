import AnimationImage from "../components/animation-image";
import Header from "../components/header/Header"
import Home from "../components/home/Home"
import MobailHeader from "./mobile-header";


const MobailView = () => (
    <>
        <MobailHeader/>
        <Home/>
        <AnimationImage/>
    </>
)

export default MobailView;