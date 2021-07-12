import React from "react";
import useAxios from "./useAxios";
import { useParams } from "react-router-dom";

export default function Details() {
  const { type, id } = useParams();
  const [resource, loading] = useAxios(
    `https://api.jikan.moe/v3/${type}/${id}`
  );
  if (loading) return "loading";
  return (
    <div className="details">
      <div className="details__top">
        <span>Type {type}</span>
        <span>Status {resource.status}</span>
        <span>Score {resource.score}</span>
      </div>
      <div className="details__body">
        <div className="details__info">
          <h2 className="details__info-title">Title {}</h2>
          <p className="details__info-synopsis">{}</p>
          <div>
            <span>{resource.duration}</span>
            <span>Aired {resource.aired.string}</span>
            <span>Rating{resource.rating}</span>
            <span>{resource.rank}</span>
            <span>{resource.popularity}</span>
          </div>
        </div>
        <div className="details__cover">
          {/* <img src={resource.image_url} alt="cover image" /> */}
        </div>
      </div>
    </div>
  );
}
