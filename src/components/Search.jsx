import React from "react";

class Search extends React.Component {

    state = {
        search: '',
        type: 'all'
    }

    handleEnter = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovie(this.state.search, this.state.type)
        }
    }

    handleFilter = (event) => {
        this.setState(() => ({type: event.target.dataset.type}), () => {
            this.props.searchMovie(this.state.search, this.state.type)
        })
    }

    render() {

        const { search, type } = this.state
        const { searchMovie } = this.props

        return (
            <div className="row">
                <input
                    type="search"
                    placeholder="Search"
                    className="validate white-text"
                    value={search}
                    onChange={(event) => this.setState({ search: event.target.value })}
                    onKeyDown={this.handleEnter}
                />
                <label>Example: Harry Potter, Avengers</label>
                <button
                    className="btn right search-btn"
                    onClick={() => searchMovie(search, type)}
                    type="submit"
                    name="action">Search</button>
                <div className="filters_container">
                    <label>
                        <input name="group1" type="radio" data-type="all" onChange={this.handleFilter} checked={this.state.type === 'all'}/>
                        <span>All</span>
                    </label>
                    <label>
                        <input name="group1" type="radio"  data-type="movie" onChange={this.handleFilter} checked={this.state.type === 'movie'}/>
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input name="group1" type="radio"  data-type="series" onChange={this.handleFilter} checked={this.state.type === 'series'}/>
                        <span>Series only</span>
                    </label>
                </div>
            </div>
        )
    }
}

export { Search }