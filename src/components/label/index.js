import React from "react";

const Label = ({ content , className  ,
  index  , setValue }) => {
  return (
    <div
      contentEditable="true"
      className={`outline-none focus:border-b-2 focus:border focus:border-red-500 focus:px-3 ${className}`}
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
