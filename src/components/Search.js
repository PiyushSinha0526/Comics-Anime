import React from 'react'
import Card from './Card'
// components and custom hook
import useAxios from "./useAxios";
import ScrollToTop from './ScrollToTop';
import LoadingSpin from './LoadingSpin';
// from npm package
import { useParams } from 'react-router';

export default function Search() {
    const { type, term } = useParams();
    const [resource, loading] = useAxios(
        `https://api.jikan.moe/v3/search/${type}?q=${term}&page=1`
      );
    if(loading) return <LoadingSpin type={'spin'}/>;
    return (
        <div className="flex">
           <h4>Searched Term: <span>{term}</span></h4>
           {resource.results.map((res) => {
          return <Card key={res.mal_id} data={res} type={type}/>;
        })}
        <ScrollToTop/>
        </div>
    )
}
