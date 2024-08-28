import HomeDisplay from '@/components/HomeDisplay';
import React from 'react'

const API_KEY = process.env.API_KEY

export default async function Home({ searchParams }) {

  const genre = searchParams.genre || 'fetchTrending';

  const data = await fetch(`https://api.themoviedb.org/3${genre === 'fetchTopRated' ? `/movie/top_rated` : '/trending/all/week'}?api_key=${API_KEY}&language=en-US&page=1`
  )

  const result = await data.json();
  if (!result.ok) {
    console.log('Failed to fetch data');
  }
  const final = result.results;
  // console.log(final);

  return (
    <div>
      <HomeDisplay data={final} />
    </div>
  )
}
