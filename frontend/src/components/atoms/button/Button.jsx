import React from 'react'

const Button = ({text, classes}) => {
  return (
    <button className={`${classes} px-6 py-2 text-lg uppercase font-heading rounded-lg` }>
        {text}
    </button>
  )
} 

export default Button