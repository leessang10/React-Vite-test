import React, {useState} from 'react';
import TestB from "./TestB.jsx";
function TestA(props) {
    const [number, setNumber] = useState(0);
    return (
        <div>
            <div onClick={() => {setNumber(number+1)}}>+</div>
            <div>numberA: {number}</div>
            <TestB number={number}/>
        </div>
    );
}

export default TestA;