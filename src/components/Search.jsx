import React from 'react'

const Search = ({ searchKeyWord,setSearchKeyWord, fetchAllRes}) => {
    return (
      <>
     <h3 className="head">Find Vaccination Centres Here</h3>
        <form class="form-inline d-flex w-50 py-4">
        <input value={searchKeyWord} onChange={(e) => setSearchKeyWord(e.target.value)} class="form-control mr-sm-2" type="search" placeholder="Enter State" aria-label="Search" />
        <button class="btn btn-outline-success mx-2" onClick={fetchAllRes} type="button">Search</button>
      </form>
      </>
    )
}

export default Search
