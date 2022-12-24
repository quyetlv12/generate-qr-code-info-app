import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/button'

const Home = () => {
  return (
    <div className='flex justify-center gap-5 mt-20'>
        <Link to={'/setting'}>to setting</Link>
        <Button content={"Tạo mã QR"} className="bg-green-700 p-5 text-white rounded-lg shadow-lg shadow-slate-500 hover:bg-red-500 transition-all duration-200 hover:shadow-none bg-gradient-to-r from-indigo-500" link={'/setting'} /> 
        <Button content={"Xem thông tin"} className="bg-green-700 p-5 text-white rounded-lg shadow-lg shadow-slate-500 hover:bg-red-500 transition-all duration-200 hover:shadow-none bg-gradient-to-l from-indigo-500 " /> 
    </div>
  )
}

export default Home