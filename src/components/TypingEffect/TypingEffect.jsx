import React, {useEffect, useState} from 'react';
const TypingEffect = ({ text }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index) => index + 1);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return <p>{text.substring(0, index)}</p>;
};
export default TypingEffect;
