import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'

const Buttonn = styled.div`
position: absolute;
top: 8px;
right: 16px;
`



export default function ButtonAdd() {

    const [state, setstate] = useState([
        {
          fname: 'Beauty',
          lname: 'Charoen'
        }
      ])
    
    
    
    const onAddItem = event =>{
        state.push(state.fname)
        
    }
        

    return (
        <div>
           <Buttonn><Button variant="Add" onClick={onAddItem}>Add</Button></Buttonn> 
        </div>
    )
}