export default function PopularFilm({ movies }) {
    return <div className="popular-films">
        {movies.results.map(movie => (
            <div className="popular-film-item" key={movie.title}>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt="" />
                <div className="movie-details">
                    <p>{movie.title}</p>
                    <span>{movie.overview}</span>
                </div>


            </div>
        ))}
        <style jsx>{`
        .popular-films{
            display:flex;
            flex-direction:column;
            width:80%;
            justify-content:center;
            align-items:center;
            margin-left:auto;
            margin-right:auto;
        }
        .popular-film-item{
            display:flex;
            width:100%;
            padding:20px 20px;
            border:1px solid #efefef;
            margin-bottom:8px;
        }
        .movie-details{
            padding-left:20px;
            p{
                font-size:24px;
                margin-bottom:8px;
                border-bottom:1px solid #ccc;
            }
            span{
                line-height:1.5;
            }
        }
        @media screen and (max-width: 600px) {
            .popular-film-item{
              flex-direction:column;
            }
            .movie-details{
              padding-left:0;  
               p{
                 margin-top:18px;   
               }
            }
          }
        
        `}
        </style>
    </div>
}