import React from "react";
import BootstrapTable from "react-bootstrap/Table";
import Row from "../Row";

function Table(props) {
  
  return (
    <div>
      <BootstrapTable striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th onClick={() => props.sortByName()}>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {props.state.employeesFiltered.map((data, index) => {
            return <Row index={index} data={data} />;
          })}
        </tbody>
      </BootstrapTable>
    </div>
  );
}

export default Table;