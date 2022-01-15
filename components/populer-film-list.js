export default function PopularFilm({ movies}) {
    return <div>
        {movies.results.map(movie => (
            <div key={movie.title}>
                <p>{movie.title}</p>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt="" />
            </div>
        ))}
    </div>
}