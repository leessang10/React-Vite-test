import './App.css'
import TypingEffect from "./components/TypingEffect/TypingEffect.jsx";
import TextEffect from "./components/TextEffect/TextEffect.jsx";
import PropsDrilling from "./components/PropsDrilling/TestA.jsx";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
import Scroll3D from "./components/Scroll3D/Scroll3D";
const App = () => (
    <div className={"app"}>
{/*        <TypingEffect text={`아뜰리에${"\u00A0"}SoW에${"\u00A0"}오신${"\u00A0"}것을${"\u00A0"}환영합니다.`}/>
        <TextEffect text={`아뜰리에${"\u00A0"}SoW에${"\u00A0"}오신${"\u00A0"}것을${"\u00A0"}환영합니다.`}/>
        <PropsDrilling />
        <SmoothScroll/>*/}
        <Scroll3D/>
    </div>
);

export default App
