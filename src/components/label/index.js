import React from "react";
import styled from "styled-components";
const LabelStyled = styled.div`
  .label__contentEditable-text {
    .suggestion__label {
      display: none;
    }
    &:focus {
      ul.suggestion__label {
        display: block;
      }
    }
  }
`;
const Label = ({ content, className, index, setValue }) => {
  return (
    <LabelStyled className="relative">
      <div
        contentEditable="true"
        className={`outline-none duration-300 transition-all w-fit  label__contentEditable-text rounded-md focus:border-b-2 focus:border focus:border-red-500 hover:border-red-500 focus:px-3 h-[30px] font-semibold ${className}`}
        id={`label__${index}`}
        onInput={(e) => {
          setValue(`info.${index}.label`, e.target.innerText);
          document.querySelector(`#label__${index}`).innerText = "le quyet";
        }}
        suppressContentEditableWarning={true}
        style={{ display: "inline-block" }}
      >
        {content}
        <ul className="absolute top-8 bg-gray-600 text-white p-4 transition-all duration-200 suggestion__label rounded-lg shadow-lg">
          <li className="p-2 border-b-slate-200 border-b-[0.5px] border-dashed cursor-pointer hover:bg-red-500 duration-200 transition-all">
            sdgsjdgasjdgasjdgjasdgasd
          </li>
        </ul>
      </div>
    </LabelStyled>
  );
};

export default Label;
