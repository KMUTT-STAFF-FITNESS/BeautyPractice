import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import { Container,Nav } from 'react-bootstrap'


export default class TableName extends Component {
    state = {
        name: '',
        surname: '',
        unit: '',
        status: ''
    }

    renderTableData = () => {
        return (
            <>
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
                    <tr>
                        <td>{this.state.name}</td>
                        <td>{this.state.surname}</td>
                        <td>{this.state.unit}</td>
                        <td>{this.state.status}</td>
                        <td><a href = "TableEdit.js">edit</a></td>
                    </tr>
                </tbody>
            </>
        )
    }
    render() {
        return (
            <div>
                
                <Container>
                    <Table striped bordered hover>
                        {this.renderTableData()}
                    </Table>
                </Container>
            </div>
        )
    }
}
