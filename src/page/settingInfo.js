import React, { useEffect, useState } from "react";
import QRCode from "qrcode.react";
import { useParams } from "react-router-dom";
import Button from "../components/button";
import Input from "../components/input";
import Label from "../components/label";
import { INFO_CONFIG } from "./utility";
const SettingInfo = () => {
  const params = useParams();
  console.log("params", params.id);
  const BASE_URL = process.env.REACT_APP_BASE_URL
  console.log(process.env.REACT_APP_BASE_URL);
  const [ArrayConfig, setArrayConfig] = useState(INFO_CONFIG);
  const handleAddField = () => {
    const configs = [...ArrayConfig];
    const obj = {
      lable: "Facebook",
      fieldName: "fb",
    };
    configs.push(obj);
    setArrayConfig(configs);
  };
  const handleDeleteFied = (index) => {
    const configs = [...ArrayConfig];
    configs.splice(index, 1);
    setArrayConfig(configs);
  };
  const onChangeLabel = (content) => {};

  const downloadQR = () => {
    const canvas = document.getElementById("qrcode");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${BASE_URL}-${params.id}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <div className="mx-auto px-[10%] py-[2%]">
      <div className="flex justify-center mb-20">
        <span className="text-[#000] font-medium text-center uppercase text-4xl">
          generate QR Code App
        </span>
      </div>
      <div className="flex">
        <div className="w-2/3">
          {ArrayConfig.map((_elt, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between">
                <Label content={_elt.lable} onChange={onChangeLabel} />
                {ArrayConfig.length === 1 ? null : (
                  <button onClick={() => handleDeleteFied(index)}>X</button>
                )}
              </div>
              <Input fieldName={_elt.fieldName} />
            </div>
          ))}
          {ArrayConfig.length === 10 ? null : (
            <div className="flex justify-end">
              <Button onChange={handleAddField} content="Thêm thông tin" />
            </div>
          )}
        </div>
        <div className="w-1/3">
          <div className="flex justify-center">
            <QRCode
              id="qrcode"
              size={256}
              level="H"
              title="RKEREW"
              style={{ height: "auto", maxWidth: "60%", width: "60%" }}
              value={`${BASE_URL}/${params.id}`}
              viewBox={`0 0 256 256`}
            />
          </div>
          <div className="flex justify-center mt-2">
            <button onClick={downloadQR}>downloadQR</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingInfo;
