import React, { Component } from 'react'
import { Card, Container, CardImg } from 'react-bootstrap'
import Sidebar from './core/Sidebar'


export default class TableEdit extends Component {

    render() {
        return (
            <div className="my-5">
                <Sidebar/>
                <Container>
                    <Card>
                        <Card.Body>
                            <Card style={{ width: '15rem' }}>
                                <CardImg src="bt.jpg" height ='300px' />
                            </Card>
                            
                        </Card.Body>
                    </Card>
                </Container>

            </div>
        )
    }
}
