import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [scanMode, setScanMode] = useState<boolean>(false);
    const [showPattern, setShowPattern] = useState<boolean>(true);
    const [arrayOfSix, setArrayOfSix] = useState<string[]>([]);
    const [backGroundColor, setBackGroundColor] = useState<string>("lime");

    const generateArray = () => {
        for (let i = 0; i < 6; i++) {
            const randomBoolean = Math.random() >= 0.5;

            if (randomBoolean) {
                setArrayOfSix((prev) => [...prev, "1"]);
            } else {
                setArrayOfSix((prev) => [...prev, "0"]);
            }
        }
    }

    useEffect(() => {
        if (arrayOfSix.length !== 6) {
            generateArray();
        }
    }, []);


    useEffect(() => {
        console.log(arrayOfSix)
    }, [arrayOfSix]);

    return (
        <div className={`w-screen h-screen`} onClick={() => {
            setShowPattern(!showPattern)
        }}>
            {showPattern ? <>
                <div className={`w-screen h-screen grid grid-cols-3 grid-rows-2`}>
                    {arrayOfSix.map((item, index) => {
                        return (
                            <div key={index}
                                 className={`w-full h-full ${item === "1" ? "bg-black" : "bg-white"}`}>.</div>
                        )
                    })}
                </div>
            </> : <>
                <div className={`w-screen h-screen`}
                 style={{backgroundColor: backGroundColor}}
                >

                </div>
            </>}


        </div>
    );
}

export default App;
