import { useEffect, useState } from "react";

export default function RandomColor() {

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000')
    
    function randomColorUtility (length) {
        return Math.floor(Math.random() * length)
    }

    function handleRandomHexColor () {
        const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"] ;
        let hexColor = "#" ;

        for(let i = 0 ; i < 6 ; i++) {
            hexColor += hex[randomColorUtility(hex.length)] ;
        }
        setColor(hexColor);
        console.log(hexColor);
    }

    function handleRandomRgbColor () {
        const r = randomColorUtility(256) ;
        const g = randomColorUtility(256) ;
        const b = randomColorUtility(256) ;

        setColor(`rgb(${r},${g},${b})`);
    }

    useEffect(()=> {
        if (typeOfColor === "rgb") handleRandomRgbColor() ;
        else handleRandomHexColor();
    }, [typeOfColor]);

    return (
        <div style = {{
            width : '100vw' ,
            height : '100vh' ,
            background : color
        }}>
            <button onClick={() => setTypeOfColor('hex')}>Generate HEX Color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Generate RGB Color</button>
            <button onClick= { typeOfColor === 'hex' ? handleRandomHexColor : handleRandomRgbColor}>Generate Random Color</button>
        </div>
    );
}