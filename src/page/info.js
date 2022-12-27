import React from "react";
import QRCode from "react-qr-code";
const Info = () => {
  return (
    <div className="mx-auto px-[10%] py-[2%]">
      <div className="flex justify-center mb-20">
        <span className="text-[#000] font-medium text-center uppercase text-4xl">
          generate QR Code App
        </span>
      </div>
      <div className="flex">
        <div className="w-2/3">info </div>
        <div className="w-1/3">
          <div>
            <QRCode
              size={256}
              level="L"
              title="RKEREW"
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={`Facebook : 1239879329381293`}
              viewBox={`0 0 256 256`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
