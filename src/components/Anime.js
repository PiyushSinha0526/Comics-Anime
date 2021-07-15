import React from 'react'

export default function Anime({resource}) {
    return (
        <>
        <div className="details__body-info">
            <h1 className="details__body-title">{resource.title}</h1>
          <div className="details__body-data">
          <h4>Rank: <span>{resource.rank}</span></h4>
          <h4>Popularity: <span>{resource.popularity}</span></h4>
          <h4>Episodes: <span>{resource.episodes}</span></h4>
          <h4>Duration: <span>{resource.duration}</span></h4>
          <h4>Aired: <span>{resource.aired.string}</span></h4>
          <h4>Source: <span>{resource.source}</span></h4>
          <h4>Rating: <span>{resource.rating}</span></h4>
          {resource.trailer_url && <h4>Trailer: <a href={resource.trailer_url} target="_blank" rel="noopener noreferrer">Link</a></h4>}
          <h4>Genres: {resource.genres.map(gen=><span key={gen.name}>{gen.name}, </span>)}</h4>
          </div>
        </div>
          <img src={resource.image_url} alt="no found" />
        </>
    )
}

