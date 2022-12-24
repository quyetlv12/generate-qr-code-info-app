import React from 'react'
import { Link } from 'react-router-dom';

const Button = ({ className, content, onChange, type = 'button', icon = undefined, link = undefined }) => {
  return (
    <>
      {
        link ? <Link to={"/setting"}>  <button onClick={onChange} className={`${className} ${icon ? 'flex items-center  gap-2' : ''}`} type={type}>
          {icon ? <img src={icon} width={25} /> : null}

          <span>{content}</span>
        </button></Link> : <button onClick={onChange} className={`${className} ${icon ? 'flex items-center  gap-2' : ''}`} type={type}>
          {icon ? <img src={icon} width={25} /> : null}

          <span>{content}</span>
        </button>


      }
    </>
  )
}

export default Button