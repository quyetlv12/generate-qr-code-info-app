import React from "react";

const Label = ({ content , className  ,
  index  , setValue }) => {
  return (
    <div
      contentEditable="true"
      className={`outline-none duration-300 transition-all w-fit rounded-md focus:border-b-2 focus:border focus:border-red-500 hover:border-red-500 focus:px-3 h-[30px] font-semibold ${className}`}
      onInput={(e) => {
        setValue(`info.${index}.label` , e.target.innerText )
      }}
      suppressContentEditableWarning={true}
      style={{display: "inline-block"}}
    >
      {content}
    </div>
  );
};

export default Label;
