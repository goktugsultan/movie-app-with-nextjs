import { useRouter } from 'next/router'

export default function FilmDetails({ movie }){

    console.log(movie)
    
    const router = useRouter();

    const { url } = router.query

    return <>
        <p>Details :  {movie.title} </p>
        {movie.genres.map(genresItem => (
        <div>
            <h3>{genresItem.name}</h3>
            
        </div>
    ))}
        </>

}

export async function getServerSideProps({ params}){
    const request = await fetch(`https://api.themoviedb.org/3/movie/${params.url}?api_key=c0bccd4d86e5b73c0f4753db66d6b08c&language=tr-TR`)
	const movie = await request.json()

	return {
		props: {
			movie,
		},
	}
}