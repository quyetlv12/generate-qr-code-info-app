import React from 'react'
import { Link } from 'react-router-dom'
import qrCodeIcon from '../../asset/images/qr-code.png'

const Header = () => {
    return (
        <div className="flex justify-center mb-10  lg:pt-[2%] sm:pt-[50%] md:pt-[10%]">
            <span className="text-[#000] lg:text-4xl sm:text-md md:text-sm font-medium text-center uppercase  flex flex-col md:flex-row items-center gap-2">
               <Link to="/"> <img src={qrCodeIcon} width={50} /></Link>
                <span className="italic">generate QR Code App</span>
            </span>
        </div>
    )
}

export default Header