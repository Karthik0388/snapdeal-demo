import React from 'react'

const Search = () => {
    return (
        <div className="searchBlock">
            <form>
                <input type="search" name="search" id="search" placeholder="Search products and brands"/>
                <button>Search</button>
            </form>
        </div>
    )
}

export default Search
