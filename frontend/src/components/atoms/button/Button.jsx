import React from 'react'

const Button = ({text, classes, onClickHandler}) => {
  return (
    <button 
        className={`${classes} px-6 py-2 text-lg uppercase font-heading rounded-lg` }
        onClick={onClickHandler}
        >
        {text}
    </button>
  )
} 

export default Button