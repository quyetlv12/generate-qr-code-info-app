import React from 'react'
import QRCode from 'react-qr-code'
import { downloadQR } from '../../page/utility'

const QrDesktop = ({id}) => {
    const canvas = document.getElementById('qrcode');
    console.log(canvas);
    const downloadQR = (BASE_URL , id ) => {
        const pngUrl = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = `${BASE_URL}-${id}.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      };
  return (
    <div
    className={`hidden lg:w-1/3 lg:block  duration-500 transition-all scale-100`}
  >
   <div className="flex justify-center">
      <QRCode
        id="qrcode"
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
        onClick={() => downloadQR(process.env.REACT_APP_BASE_URL, id)}
        className="bg-green-800 p-3 text-white rounded-lg mt-2 hover:bg-gray-600 transition-all hover:scale-105 duration-200"
      >
        DownloadQR
      </button>
    </div>
  </div>
  )
}

export default QrDesktop