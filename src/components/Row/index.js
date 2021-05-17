import React from "react";

function Row(props) {
  const dob = new Date(props.data.dob.date);
  return (
    <>
      <tr>
        <td>
          <img
            src={props.data.picture.thumbnail}
            alt={"profile for employee"}
          ></img>
        </td>
        <td>
          {props.data.name.first} {props.data.name.last}
        </td>
        <td>{props.data.cell}</td>
        <td>
          <a href={"mailto:" + props.data.email} target="__blank">
            {props.data.email}
          </a>
        </td>
        <td>
          {dob.getMonth() + 1 + "/" + dob.getDate() + "/" + dob.getFullYear()}
        </td>
      </tr>
    </>
  );
}

export default Row;
