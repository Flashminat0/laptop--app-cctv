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

    const [letter, setLetter] = useState<string>("");
    const generateLetter = () => {
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        const anotherRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

        setLetter(`${randomLetter}${anotherRandomLetter}`);
    }


    useEffect(() => {
        if (arrayOfSix.length !== 6) {
            generateArray();
            generateLetter();
        }
    }, []);


    useEffect(() => {
        console.log(arrayOfSix)
    }, [arrayOfSix]);

    return (
        <div
            className={`bg-yellow-300 flex items-center justify-center max-h-screen overflow-clip`} onClick={() => {
            setShowPattern(!showPattern)
        }}>
            {showPattern ? <>
                <p className={`text-[1650px] uppercase`}>
                    {letter}
                </p>
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
