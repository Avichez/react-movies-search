import { Movie } from "./Movie"


const MoviesList = (props) => {

    const { movies = [] } = props;

    return (
        <div className="movies_list">
            { movies.length ?
                movies.map(movie => (<Movie key={movie.imdbID} {...movie} />))
                : <h3>Nothing Found!</h3>
            }
        </div>
    )
}

export { MoviesList }