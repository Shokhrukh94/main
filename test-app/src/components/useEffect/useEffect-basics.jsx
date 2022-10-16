import React, { useState, useEffect } from "react";
// useeffect by default render bo'ladi
// clean up function
// second parameter

const UseEffectBasics = () => {
    const [value, setValue] = useState(0);
    useEffect(() => {
        console.log("call useEffect");

        if (value >= 5) {
            document.title = `New Messages ($(Value))`;
        }
       
    }, [value]);
    console.log("render componet");
    return (
        <>
        <h1>{value}</h1>
        <button onClick={() => setValue(value +1)}>Click me</button>
        </>
    )
};

export default UseEffectBasics;