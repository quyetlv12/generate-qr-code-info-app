import React from "react";

const Label = ({ content , className  ,
  index  , update }) => {
  return (
    <span
      contentEditable="true"
      className={`outline-none focus:border-b-2 focus:border focus:border-red-500 focus:px-3 ${className}`}
      onInput={(e) => {
        update(index , {label : e.target.innerText})
      }}
    >
      {content}
    </span>
  );
};

export default Label;
