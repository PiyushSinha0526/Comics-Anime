import React from "react";
//css
import "./css/Details.css";
// from npm package
import { useParams } from "react-router-dom";
// components and custom hook
import useAxios from "./useAxios";
import LoadingSpin from "./LoadingSpin";
import Anime from "./Anime";
import Manga from "./Manga";

export default function Details() {
  const { type, id } = useParams();
  const [resource, loading] = useAxios(
    `https://api.jikan.moe/v3/${type}/${id}`
  );
  if (loading) return <LoadingSpin type={'spin'}/>;
  return (
    <div className="details">
      <div className="details__top">
        <h3>Type: <span>{type}</span></h3>
        <h3>Status: <span>{resource.status}</span></h3>
        <h3>Score: <span>{resource.score}</span></h3>
      </div>
      <div className="details__body">
        {type==="anime"?(<Anime resource={resource}/>): <Manga resource={resource}/>}
      </div>
      <div className="details__bottom">
        <h3>Summary</h3>
        <p>{resource.synopsis}</p>
      </div>
    </div>
  );
}
