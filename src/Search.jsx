import React from "react";

let Search=(props)=>{
  
    return (
        <>
          <div className="col-8 m-4">
            Showing {props.allMovies.length} movies from the database
            <div className="row">
              <div className="col-10 mt-3">
                <h3 type="button" className="btn "> {props.genre} </h3>
              </div>
            </div>
            <div className="col-5 mt-4">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search.."
                  value={props.search}
                  onChange={(e) => props.SearchUpdate(e.currentTarget.value)}
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success"
                  type="button" 
                  onClick={() => {}} // onlick par kux nahi kar rha hai
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </>
      );

}

export default Search;