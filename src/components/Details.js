import React from "react";
import "./css/Details.css";
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
        <span>Type: {type}</span>
        <span>Status: {resource.status}</span>
        <span>Score: {resource.score}</span>
      </div>
      <div className="details__body">
        <div className="details__body-info">
        <h1 className="details__body-title">{resource.title}</h1>
          <div>
          <h4>Rank: <span>{resource.rank}</span></h4>
          <h4>Popularity: <span>{resource.popularity}</span></h4>
          <h4>Episodes: <span>{resource.episodes}</span></h4>
          <h4>Duration: <span>{resource.duration}</span></h4>
          <h4>Source: <span>{resource.source}</span></h4>
          <h4>Rating: <span>{resource.rating}</span></h4>
          <h4>Studios: <span>{resource.studios.map(studio=><>{studio.name}, </>)}</span></h4>
          <h4>Trailer: <a href={resource.trailer_url}>click</a></h4>
          <h4>Genres: <span>{resource.genres.map(gen=><>{gen.name}, </>)}</span></h4>
          </div>
        </div>
          <img src={resource.image_url} alt="helloosd" />
      </div>
      <div className="details__bottom">
        <h2>Summary</h2>
        <p>{resource.synopsis}</p>
      </div>
    </div>
  );
}
