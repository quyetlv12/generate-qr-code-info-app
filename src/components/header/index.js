import React from 'react'
import qrCodeIcon from '../../asset/images/qr-code.png'

const Header = () => {
    return (
        <div className="flex justify-center mb-10  pt-[2%]">
            <span className="text-[#000] font-medium text-center uppercase text-4xl flex items-center gap-2">
                <img src={qrCodeIcon} width={50} />
                <span>generate QR Code App</span>
            </span>
        </div>
    )
}

export default Header