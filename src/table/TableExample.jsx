import React, {useState} from 'react'
import Dropdown from './core/Dropdown'
import Table from 'react-bootstrap/Table'
import Sidebar from './core/Sidebar'
import { Container } from 'react-bootstrap'
import ButtonAdd from './core/ButtonAdd'

export default function TableExample(props) {
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
  const [add, setAdd] = useState()
  return (
    <div className="my-5">
    <Sidebar/>
    <Container>
     <ButtonAdd/>
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
                <td><a href="/beauty">View</a></td>
              </tr>
            )
          }
          )}
        </tbody>
      </Table>
      </Container>
    </div>
  )
}
