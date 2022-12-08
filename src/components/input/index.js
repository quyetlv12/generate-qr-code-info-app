import React from 'react'

const Input = ({className , fieldName}) => {
  return (
    <input className={`${className} w-full shadow-sm border-gray-600 border rounded-md h-[40px] mt-2 p-3`} />
  )
}

export default Input