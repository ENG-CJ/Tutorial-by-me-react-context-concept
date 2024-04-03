import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { AppContext } from '../Context/AppProvider'

export default function TodoItem({todo}) {
    const {toggleTodo}=useContext(AppContext)

    
  return (
   <>
     <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Todo</th>
          <th>Completed</th>
          <th>Actions</th>
        
        </tr>
      </thead>
      <tbody>
      {todo?.map(value=>{
        return(
           
            value.completed?
            
                <tr className='bg-success'>
                <td><strike> {value.id}</strike></td>
                <td><strike>{value.text}</strike></td>
              
                <td>
                    <input type='checkbox' checked={value.completed}/>
                </td>
                <td>
                    <a className='btn btn-danger btn-sm'  onClick={()=>toggleTodo(value.id)} title={`remove ${value.text}`}>Remove</a>
                </td>
                
            </tr>
           
            :
            <tr className='bg-danger'>
                 <td>{value.id}</td>
                <td>{value.text}</td>
                <td>
                    <input type='checkbox' checked={value.completed}/>
                </td>
                <td>
                    <a className='btn btn-danger btn-sm'  onClick={()=>toggleTodo(value.id)} title={`remove ${value.text}`}>Remove</a>
                </td>
            </tr>
            
               
           
        )
      })}
      
      </tbody>
    </Table>
   </>
  )
}
