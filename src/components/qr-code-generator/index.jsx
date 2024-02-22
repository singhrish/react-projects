import { useState } from "react";
import QRCode from "react-qr-code" ;

export default function QrCodeGenerator() {

    const[qrCode, setqrCode] = useState('')
    const[input, setInput] = useState('')

    function handleGenerateQrCode(){
        setqrCode(input) ;
        setInput('');
    }
    return (
        <div>
            <h1> QR Code Generator</h1>
            <div>
                <input onChange={(e) => setInput(e.target.value) } 
                type="text" 
                name="qr-code" 
                value={input}
                placeholder="Enter your value"/>
                <button 
                disabled = {input && input.trim() !=="" ? false : true}
                onClick={handleGenerateQrCode}>
                    Generate
                </button>
                <br/>
            </div>
            <div>
                <QRCode
                id="qr-code-value"
                value={qrCode} 
                size={400}
                bgColor = "white"
                />
            </div>
        </div>
    );
}