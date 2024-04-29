import React from 'react'

const Button = ({text,onclick, bgcolor}) => {
  return (
    <button onClick={onclick} style={{backgroundColor:bgcolor, width:'100px', height:'60px', borderRadius:'15px'}}>
        <p>{text}</p>
    </button>
  )
}

export default Button