import React from 'react'

const Button = ({className ,content , onChange , type = 'button'}) => {
  return (
    <button onClick={onChange} className={className} type={type}>{content}</button>
  )
}

export default Button