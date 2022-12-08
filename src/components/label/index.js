import React from "react";

const Label = ({ content, onChange }) => {
  return (
    <span
      contentEditable="true"
      className="underline outline-none focus:border-b-2 focus:border-b-sky-100"
      onInput={(e) => {
        console.log(e.target.innerText);
      }}
    >
      {content}
    </span>
  );
};

export default Label;
