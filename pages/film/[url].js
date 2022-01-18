import { useRouter } from 'next/router'

export default function FilmDetails({ movie }) {

    console.log(movie)

    const router = useRouter();

    const { url } = router.query

    return <>
        <div className="background-title">
            <h1>{movie.title}</h1>
        </div>
        <div className="background-poster"
            style={{ backgroundImage: `url(https://www.themoviedb.org/t/p/original${movie.backdrop_path})` }}></div>
        
       <div className="movie-overview">
            {movie.overview}
       </div>
       <div className="genres">
        {movie.genres.map(genresItem => (
            <div className="movie-genres">
                <span>{genresItem.name}</span>
            </div>
        ))}
        </div>
        
        <div className="genres">
        <h4 className="title-companies">Movie Companies:</h4>  
        {movie.production_companies.map(companies => (
            <>
            <div className="movie-companies">
                <span>{companies.name}</span>
            </div>
            </>
        ))}
        </div>


        <style jsx>{`
        .background-poster{
            width: 100%;
            height: 400px;
            background-size: cover;
            opacity:0.8;
        }
        .background-title{
            position:absolute;
            z-index: 1;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            h1{
                color:#fff;
                font-weight: 400;
                letter-spacing: 1px;
                text-transform: uppercase;
                border-bottom:1px dashed #fff;
            }
        }
        .movie-overview{
            padding:12px 100px;
            letter-spacing:1px;
            line-height:20px;
            text-align:justify;
        }
        .genres{
            display:flex;
            padding:20px 80px;
        }
        .movie-genres{
            margin:0px 12px;
            padding:12px 20px;
            border:1px solid #afafaf;
        }
        .movie-companies{
            margin:0px 12px;
            padding:0 20px;
            border-bottom:1px solid #afafaf;
        }
        @media screen and (max-width: 600px) {
            .genres{
              flex-direction:column;
              padding: 20px 12px;
            }
            .movie-overview{
                padding: 20px 12px;
            }
            .movie-companies{
                padding: 8px 20px;
            }
           
          }
        
        `}
        </style>
    </>

}

export async function getServerSideProps({ params }) {
    const request = await fetch(`https://api.themoviedb.org/3/movie/${params.url}?api_key=c0bccd4d86e5b73c0f4753db66d6b08c&language=tr-TR`)
    const movie = await request.json()

    return {
        props: {
            movie,
        },
    }
}