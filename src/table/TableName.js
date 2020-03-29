import React, { Component, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { Container } from 'react-bootstrap'
import Sidebar from './core/Sidebar'
import Dropdown from './core/Dropdown'

export default class TableName extends Component (prop) {

  const [name, setName] = useState([
    {
      fname: 'srr',
      lname: 'bt'
    },
    {
      fname: 'fame',
      lname: 'bt'
    },
    {
      fname: 'fameeeeeee',
      lname: 'bt'
    },
  ])
  const [unit, setUnit] = useState()
  const [status, setStatus] = useState()
  const [edit, setEdit] = useState()

  render(){

  return (
    <>
      <Table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Unit</th>
            <th>Status</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {name.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.fname}</td>
                <td>{data.lname}</td>
                <td>{unit}</td>
                <td>
                  <Dropdown />
                </td>
                <td><a href={() => setEdit("/beauty")}>{edit}</a></td>
              </tr>
            )
          }


          )}
        </tbody>
      </Table>

    </>
  )

}



}


// export default class TableName extends Component {
//     state = {
//         name: 'aaa' ,
//         surname: 'aaaa',
//         unit: 'aaaaa',
//         status: 'year'
//     }

//     renderTableData = () => {
//         return (
//             <>

//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Surname</th>
//                         <th>Unit</th>
//                         <th>Status</th>
//                         <th>Edit</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>{this.state.name}</td>
//                         <td>{this.state.surname}</td>
//                         <td>{this.state.unit}</td>
//                         <td>
//                             {/* <Dropdown/> */}
//                         </td>
//                         <td><a href="/beauty">view</a></td>
//                     </tr>
//                 </tbody>
//             </>
//         )
//     }
//     render() {
//         return (
            // <div className="my-5">

            //     <Sidebar />
            //     <Container>
            //         <Table striped bordered hover>
            //             {this.renderTableData()}
            //         </Table>
            //     </Container>

            // </div>
//         )
//     }
// }
