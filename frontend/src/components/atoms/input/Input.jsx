import React, { useState, useEffect, useImperativeHandle, useRef } from 'react'

const Input = React.forwardRef(({id, classes, type, placeholder, onChangeHandler, checkOnBlur}, ref) => {
  
    const [isValid, setIsValid] = useState(true);
    const [text, setText] = useState("");

    const localRef = useRef(null);

    useImperativeHandle(ref, ()=>{
        return{
            focus: () => localRef.current.focus(),
            setInValid: () => setIsValid(false)
        }
    },[]);

    const handleChange = (e) => {
        setText(e.target.value);
        if (onChangeHandler) onChangeHandler(e);
    };


    useEffect(()=>{
      setIsValid(true);
    },[text]);



    return (
        <>
    <input 
        type={type}
        ref={localRef}
        id={id}
        placeholder={placeholder}
        className={`text-slate-800 font-para tracking-wide ${classes} ${isValid ? '' : ' border-red-700'} w-full h-full bg-white px-4 font-subheading rounded-lg `}
        onChange={handleChange}
        onBlur={checkOnBlur}
        
    />
    <br />
    <span className='text-red-600 text-xs '>{(!isValid) ? `${id} is invalid` : "" }</span>

</>
  )
})

export default Input