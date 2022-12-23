import QRCode from "qrcode.react";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import cancelIcon from "../asset/images/cancel.png";
import Button from "../components/button";
import Input from "../components/input";
import Label from "../components/label";
import { defaultValue } from "./hookFormConfig";
import { downloadQR } from "./utility";
const SettingInfo = () => {
  const params = useParams();
  const { register, handleSubmit, control } = useForm({
    defaultValues :  defaultValue
  });
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "info",
  });
  const onSubmit = (data) => console.log(data);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const handleAddField = () => {
    append({ label: "Thông tin", fieldName: "" });
  };
  const handleDeleteFied = (index) => {
    remove(index);
  };
  const onChangeLabel = (content) => {}; 
  return (
    <div className="mx-auto px-[10%] py-[2%]">
      <div className="flex justify-center mb-20">
        <span className="text-[#000] font-medium text-center uppercase text-4xl">
          generate QR Code App
        </span>
      </div>
      <div className="flex">
        <div className="w-2/3">
          <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map((_elt, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between items-center">
                  <Label
                    content={_elt.label}
                    onChange={onChangeLabel}
                    index={index}
                    update={update}
                  />
                  {fields.length === 1 ? null : (
                    <button
                      onClick={() => handleDeleteFied(index)}
                      className={"h-[30px] w-[30px] text-center"}
                    >
                      <img src={cancelIcon} />
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
                    "bg-gray-800 p-3 text-white rounded-md hover:bg-slate-700 transition-all duration-300"
                  }
                />
                <Button
                  type="submit"
                  content="Lưu thông tin"
                  className={
                    "bg-green-800 p-3 text-white rounded-md hover:bg-slate-700 transition-all duration-300"
                  }
                />
              </div>
            )}
          </form>
        </div>
        <div className="w-1/3">
          <div className="flex justify-center">
            <QRCode
              id="qrcode"
              size={256}
              level="H"
              title="RKEREW"
              style={{ height: "auto", maxWidth: "60%", width: "60%" }}
              value={`${BASE_URL}${params.id}`}
              viewBox={`0 0 256 256`}
            />
          </div>
          <div className="flex justify-center mt-2">
            <button onClick={() =>downloadQR(BASE_URL , params.id)}>downloadQR</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingInfo;
