import React, { useState } from 'react'

const Input = ({id, classes, type, placeholder, checkOnBlur}) => {
  
    const [isValid, setIsValid] = useState(true);
    const [shake, setShake] = useState(false);
    const [text, setText] = useState("");
  
    return (
        <>
    <input 
        type={type}
        id={id}
        placeholder={placeholder}
        className={` ${classes} w-full h-full bg-white px-4 font-subheading rounded-lg `}
        onBlur={checkOnBlur}    
        
    />


</>
  )
}

export default Input