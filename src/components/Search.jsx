import React, { useState } from "react";

const Search = (props) => {
    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');
    /** Если мы searchMovie метод не передаем и по случайности, 
     *  оставили его тут, что бы не получить ошибку, мы указываем,
     *  что это какая-то функция, и тогда при компиляции и вызове,
     *  она просто ничего не будет делать.
     */
    const { searchMovie = Function.prototype
    } = props

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            searchMovie(search, type)
        }
    }

    const handleFilter = (event) => {
        setType(event.target.dataset.type);
        searchMovie(search, event.target.dataset.type);
    }



    return (
        <div className="row">
            <input
                type="search"
                placeholder="Search"
                className="validate white-text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                onKeyDown={handleEnter}
            />
            <label>Example: Harry Potter, Avengers</label>
            <button
                className="btn right search-btn"
                onClick={() => searchMovie(search, type)}
                type="submit"
                name="action">Search</button>
            <div className="filters_container">
                <label>
                    <input name="group1" type="radio" data-type="all" onChange={handleFilter} checked={type === 'all'} />
                    <span>All</span>
                </label>
                <label>
                    <input name="group1" type="radio" data-type="movie" onChange={handleFilter} checked={type === 'movie'} />
                    <span>Movies only</span>
                </label>
                <label>
                    <input name="group1" type="radio" data-type="series" onChange={handleFilter} checked={type === 'series'} />
                    <span>Series only</span>
                </label>
            </div>
        </div>
    )
}

export { Search }