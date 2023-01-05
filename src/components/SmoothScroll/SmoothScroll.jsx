import { Link, animateScroll as scroll } from "react-scroll";
import styles from "./SmoothScroll.module.css";

const SmoothScroll = () => {
    return (
        <div className={styles.box}>
            <Link
                to="section-1"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
            >
                Go to Section 1
            </Link>
            <Link
                to="section-2"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
            >
                Go to Section 2
            </Link>
            <div id="section-1" style={{height: "100vh"}}>
                Section 1
            </div>
            <div id="section-2" style={{height: "100vh"}}>
                Section 2
            </div>
        </div>
    );
};

export default SmoothScroll;