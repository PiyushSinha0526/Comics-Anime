import React from 'react'
// from npm package
import { Link } from "react-router-dom";

export default function Card({data, type}) {
    // type = anime/manga
    const img = data.image_url;
    return (
        <>
        <Link to={`/details/${type}/${data.mal_id}`}>
        <div
        className="card"
        style={{backgroundImage: 'url('+img+')'}}
        >
            <span># {data.rank}</span>
            <h1>{data.title}</h1>
        </div>
        </Link>
        </>
    )
}
