import React from 'react'

const Button = ({text, bgColor, onclick}) => {
  return (
   <button onClick={onclick} style={{backgroundColor:bgColor, padding:'20px', borderRadius:'15px'}}>
    {text}
   </button>
  )
}

export default Button