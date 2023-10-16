import Nav from "../components/Navbar"
import { LeftNav } from "../components/LeftNav";
import { MiniLeftNav } from "../components/MiniLeftNav";
import { MenuClickContext } from "../context";
import { ContentWrapper } from "../components/ContentWrapper.jsx";

export const Home = () => {
    const [MenuClickState, handleStateChange] = MenuClickContext();

    return (
        <>
            <Nav />
            <LeftNav isMenuClick={MenuClickState}/>
            <MiniLeftNav isMenuClick={MenuClickState}/>
            <ContentWrapper isMenuClick={MenuClickState}/>
        </>
    )
}