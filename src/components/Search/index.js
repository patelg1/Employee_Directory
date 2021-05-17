import React from "react";

function Search(props) {
  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-center">
        <form className="form-inline m-2">
          <input
            className="form-control mr-sm-2"
            id="search"
            value={props.search}
            name="search"
            onChange={props.handleInputChange}
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </nav>
    </div>
  );
}

export default Search;
