
//pass the data from app to MovieDisplay
//console.log the prop to see if its valid
//use dot notation to render

 function MovieDisplay({movie}) {

    const loaded = () => {
        return  (
            <>
            <h1>{movie.Title}</h1>
            <h2>{movie.Genre}</h2>
            <img src={movie.Poster} alt={movie.Title} />
            <h2>{movie.Year}</h2>
            <h3>{movie.Actors}</h3>
            <h3>{movie.Plot}</h3>
          </>
    )
    }
    const loading = () => <h1>No Movie to display</h1>
    //
    return movie ? loaded() : loading();
 }

 export default MovieDisplay;