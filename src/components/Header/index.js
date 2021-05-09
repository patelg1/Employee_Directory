import React from "react";
import "./style.css";

function Header() {
  return (
    <div>
      <header>
        <h1 className="fw-bold">Employee Directory</h1>
        <h6>
          Click on carrots to filter by heading or use the search box to narrow
          your results
        </h6>
      </header>
    </div>
  );
}

export default Header;
