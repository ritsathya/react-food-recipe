import React from 'react'

const SearchForm = () => {
    return (
        <div className='hero d-flex jc-center ai-center'>
            <div className="hero__search">
                <h2>Find a recipe</h2>
                <div className="input-group">
                    <input className="form-control fe-shadow" type="text" placeholder="find a recipe" />
                    <button className="btn btn-search" type="submit">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
                <a href="#"><small>Search by ingredients</small></a>
            </div>
            
        </div>
    )
}

export default SearchForm
