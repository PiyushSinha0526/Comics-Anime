import React from "react";

export default function PrevNextBtn({ setfetchPageNo, btnType }) {
  const btnHandler = () => {
    if (btnType === "prev") setfetchPageNo((last) => last + -1);
    else setfetchPageNo((last) => last + 1);
  };
  return (
    <div>
      <button onClick={btnHandler} className="prevnext_btn">
        {btnType}
      </button>
    </div>
  );
}
