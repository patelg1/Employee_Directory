import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap/Table';
import Row from './Row'


function Table(props) {

    const [peopleList, setPeopleList] = useState([])


    useEffect(() => {
        const BASEURL = "https://randomuser.me/api/?results=10";
        axios.get(BASEURL).then((response) => {
            console.log(response.data);
            setPeopleList(response.data.results)
        })
    }, [])

    return (
        <div>
           <BootstrapTable striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    peopleList.map((data, index) => {
                        return <Row index={index} data={data}/>
                    })
                }
            </tbody>
            </BootstrapTable>
        </div>
    );
}


export default Table;




// import React, { Component } from 'react';

// class Table extends Component {

//     state = {
//         count: 0
//       };

//     this.setState({
//         count: 1
//     })

//     render() {
//         return (
//             <div>
                
//             </div>
//         );
//     }
// }

// export default Table;