import React, { useRef, useState } from 'react'
import './Random.css'
import {Assets} from '../../assets/Assets'
const Random = () => {
    const copyRef=useRef(null);

    const copyPass=()=>{
        if(copyRef.current){
            copyRef.current.select();
            navigator.clipboard.writeText(copyRef.current.value);
        }
    }

    const [input, setinput] = useState("")
    const [length, setLength] = useState(12)
    const [Password, setPassword] = useState("");
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "`~!@#$%^&*()-_=+[{]}:;',<.>/?";
    const allChars = upperCase + lowerCase + numbers + symbols;

    const genPassword=()=>{
        let tempPassword=" "
       tempPassword+=upperCase[Math.floor(Math.random() * upperCase.length)];
       tempPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    tempPassword += numbers[Math.floor(Math.random() * numbers.length)];
    tempPassword += symbols[Math.floor(Math.random() * symbols.length)];
    while (tempPassword.length < length) {
        tempPassword += allChars[Math.floor(Math.random() * allChars.length)];
    }
        setPassword(tempPassword)
        setinput(tempPassword)
    }

 
  return (
    <div>
      <div className="container">
        <div className="text">Generate a <br /><span>Random Password</span> </div>
        <div className="input">
            <input type="text" placeholder='Password' onChange={(e)=>{setinput(e.target.value)}} value={input} ref={copyRef}/>
            <div className="img">
                <img src={Assets.copyIcon} onClick={copyPass} />
            </div>
        </div>
        <button className="btn" onClick={genPassword}>
            <img src={Assets.genIcon} alt="" />
            <p>Generate Password</p>
            
        </button>
      </div>
    </div>
  )
}

export default Random
