import QRCode from "qrcode.react";
import React, { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import cancelIcon from "../asset/images/cancel.png";
import Alert from "../components/alert";
import Button from "../components/button";
import Input from "../components/input";
import Label from "../components/label";
import { UserService } from "../services";
import { defaultValue } from "./hookFormConfig";
import { downloadQR } from "./utility";
const SettingInfo = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [infoArr, setInfoArr] = useState();
  const [_classNameAlert, setClassNameAlert] = useState("hidden");
  const { register, handleSubmit, control } = useForm({
    defaultValues: defaultValue,
  });
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "info",
  });
  const onSubmit = async (data) => {
    if (infoArr) {
      const _res = await UserService.updateInfo(infoArr.id, data);
      if (_res.status === 201 || _res.status === 200) {
        setIsSaved(true);
        setClassNameAlert("block");
        setInfoArr(_res.data);
        setTimeout(() => {
          setClassNameAlert("hidden");
        }, 3000);
      }
      return;
    } else {
      const _res = await UserService.createInfo(data);
      if (_res.status === 201 || _res.status === 200) {
        setIsSaved(true);
        setClassNameAlert("block");
        setInfoArr(_res.data);
        setTimeout(() => {
          setClassNameAlert("hidden");
        }, 3000);
      }
    }
  };
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const handleAddField = () => {
    append({ label: "Thông tin", fieldName: "" });
  };
  const handleDeleteFied = (index) => {
    remove(index);
  };
  return (
    <div className="mx-auto px-[5%] lg:px-[10%] py-[2%]">
      <div className="flex justify-center mb-10">
        <span className="text-[#000] font-medium text-center uppercase text-4xl">
          generate QR Code App
        </span>
      </div>

      {/* ================== QR CODE MOBILE ================ */}
      {isSaved ? (
        <div
          className={` block w-full lg:hidden  duration-500 transition-all scale-100`}
        >
          <div className="flex justify-center">
            <QRCode
              id="qrcode"
              size={256}
              level="H"
              title="RKEREW"
              style={{ height: "auto", maxWidth: "60%", width: "60%" }}
              value={`${BASE_URL}${infoArr.id}`}
              viewBox={`0 0 256 256`}
            />
          </div>
          <div className="flex justify-center mt-2">
            <button
              onClick={() => downloadQR(BASE_URL, infoArr.id)}
              className="bg-green-800 p-3 text-white rounded-lg mt-2 hover:bg-gray-600 transition-all hover:scale-105 duration-200"
            >
              DownloadQR
            </button>
          </div>
        </div>
      ) : null}
      {/* =================== FIELD =================== */}
      <div className="flex">
        <div className={`${!isSaved ? "w-full" : "w-full lg:w-[70%]"} `}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map((_elt, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between items-center">
                  <Label content={_elt.label} index={index} update={update} />
                  {fields.length === 1 ? null : (
                    <button
                      onClick={() => handleDeleteFied(index)}
                      className={"h-[30px] w-[30px] text-center"}
                    >
                      <img
                        src={cancelIcon}
                        className="hover:scale-125 transition-all duration-500"
                      />
                    </button>
                  )}
                </div>
                <Input
                  fieldName={_elt.fieldName}
                  register={register}
                  index={index}
                />
              </div>
            ))}
            {fields.length === 10 ? null : (
              <div className="flex justify-end gap-5">
                <Button
                  onChange={handleAddField}
                  content="Thêm thông tin"
                  className={
                    "bg-gray-800 p-3 text-white rounded-md hover:bg-green-800 transition-all duration-300"
                  }
                />
                <Button
                  type="submit"
                  content="Lưu thông tin"
                  className={
                    "bg-green-800 p-3 text-white rounded-md hover:bg-gray-800 transition-all duration-300"
                  }
                />
              </div>
            )}
          </form>
        </div>
        {/* ================== QR CODE DESKTOP ================ */}
        {isSaved ? (
          <div
            className={`hidden lg:w-[30%] lg:block  duration-500 transition-all scale-100 fixed right-[5%]`}
          >
            <div className="flex justify-center">
              <QRCode
                id="qrcode"
                size={256}
                level="H"
                title="RKEREW"
                style={{ height: "auto", maxWidth: "60%", width: "60%" }}
                value={`${BASE_URL}${infoArr.id}`}
                viewBox={`0 0 256 256`}
              />
            </div>
            <div className="flex justify-center mt-2">
              <button
                onClick={() => downloadQR(BASE_URL, infoArr.id)}
                className="bg-green-800 p-3 text-white rounded-lg mt-2 hover:bg-gray-600 transition-all hover:scale-105 duration-200"
              >
                DownloadQR
              </button>
            </div>
          </div>
        ) : null}
      </div>
      <Alert _classNameAlert={_classNameAlert} />
    </div>
  );
};

export default SettingInfo;
