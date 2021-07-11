import React, { useState, useEffect} from "react";
import TopItems from "./TopItems";
import useAxios from "./useAxios";
import PrevNextBtn from "./PrevNextBtn";
import "./css/ShowAll.css";

export default function ShowAll({ type }) {
  
  const [fetchPageNo, setfetchPageNo] = useState(1);
  const [resource, loading] = useAxios(
    `https://api.jikan.moe/v3/top/${type}/${fetchPageNo}`
  );

  useEffect(() => {
    setfetchPageNo(1)
  }, [type])

  if (loading) return "loading";
  return (
    <div className="flex">
      <div className="btns">
        {fetchPageNo>1 && <PrevNextBtn setfetchPageNo={setfetchPageNo} btnType="prev" />}
        <PrevNextBtn setfetchPageNo={setfetchPageNo} btnType="next" />
      </div>
      <h4>
        Showing results from {1 + 50 * (fetchPageNo - 1)} to {50 * fetchPageNo}
      </h4>
      {resource.top.map((res) => {
          return <TopItems key={res.mal_id} data={res} />;
        })}
    </div>
  );
}
