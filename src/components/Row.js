import React from 'react';

function Row(props) {
    return (
        <>
            <tr>
                <td>{props.index +1}</td>
                <td>{props.data.name.first}</td>
                <td>{props.data.name.last}</td>
                <td>{props.data.email}</td>
            </tr>
        </>
    );
}

export default Row;