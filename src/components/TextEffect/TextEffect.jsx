import React, {useEffect, useState} from 'react';
import styles from "./TextEffect.module.css";

function TextEffect({text}) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index) => index + 1);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.box}>
            {text.split('').map((letter, i) => (
                <div key={i} className={i <= index ? styles.letter : styles.fadeIn}>{letter}</div>
            ))}
        </div>
    );
}

export default TextEffect;