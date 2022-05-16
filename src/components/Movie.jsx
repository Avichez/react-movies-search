
const Movie = (props) => {

    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props

    return (
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                {
                    poster === 'N/A' ? <img className="activator" src={`https://via.placeholder.com/300x420.png?text=${title}`}/>
                    : <img className="activator" src={poster} />
                }
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4 bold-text">{title}</span>
                <p className="black-text">
                    <span>{type}</span>
                    <span className="right">{year}</span>
                </p>
            </div>
        </div>
    )
}

export { Movie }