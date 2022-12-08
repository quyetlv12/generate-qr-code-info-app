import React from 'react'

const Button = ({className ,content , onChange}) => {
  return (
    <button onClick={onChange} className={className}>{content}</button>
  )
}

export default Button