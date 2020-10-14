import React from "react"

function SearchBox({HandleSearchInput, searchInput}) {
    return (
                <input
                  type="text"
                  id="country"
                  value={searchInput}
                  className="form-control"
                  placeholder="Country"
                  onChange={(event)=>HandleSearchInput(event)}
                />
    );
    }
export default SearchBox;