import React from 'react'
import QRCode from 'react-qr-code'
import { downloadQR } from '../../page/utility'

const QrMobile = ({id}) => {
  return (
    <div
    className={`block w-full lg:hidden  duration-500 transition-all scale-100`}
  >
    <div className="flex justify-center">
      <QRCode
        id="qrcodeMobile"
        size={256}
        level="H"
        title="RKEREW"
        style={{ height: "auto", maxWidth: "60%", width: "60%" }}
        value={`${process.env.REACT_APP_BASE_URL}${id}`}
        viewBox={`0 0 256 256`}
      />
    </div>
    <div className="flex justify-center mt-2">
      <button
        onClick={() => downloadQR(process.env.REACT_APP_BASE_URL, id , 'qrcodeMobile')}
        className="bg-green-800 p-3 text-white rounded-lg mt-2 hover:bg-gray-600 transition-all hover:scale-105 duration-200"
      >
        DownloadQR
      </button>
    </div>
  </div>
  )
}

export default QrMobile