import React from "react"

function SearchBox({handleSearchInput, searchInput}) {
    return (
                <input
                  type="text"
                  id="country"
                  value={searchInput}
                  className="form-control"
                  placeholder="Country"
                  onChange={(event)=>handleSearchInput(event)}
                />
    );
    }
export default SearchBox;