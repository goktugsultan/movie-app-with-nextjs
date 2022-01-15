import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import PopularFilm from '../components/populer-film-list'

export default function Home({ movies }) {
  console.log('movies list',movies)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <h3>Populer Films</h3>
    <PopularFilm movies={movies}/>

  
    </>
  )
}


export async function getServerSideProps(){
  const req = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c0bccd4d86e5b73c0f4753db66d6b08c&language=en-US&page=1`)
  const movies = await req.json();
  return {
      props: {
        movies
      }
  }
}