import React, {useState} from 'react';

function TestB(props) {
    const {number} = props;
    return (
        <div>
            <div>numberB: {number}</div>
        </div>
    );
}

export default TestB;