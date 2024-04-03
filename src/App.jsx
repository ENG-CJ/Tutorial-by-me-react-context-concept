import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoItem from './components/TodoItem';
import AddTodoModal from './components/AddTodoModal';
import { useContext, useState } from 'react';
import { AppContext } from './Context/AppProvider';
function App() {
  const {todoList}= useContext(AppContext)
  const [open,setOpen]= useState(false);
  return (
    <Container className='p-3'>
    <div className='d-flex justify-content-between align-items-center my-2'>
      <h3>Todo List</h3>
      <Button  variant='outline-primary' onClick={()=> setOpen(true)}> + Add</Button>
    </div>
    <AddTodoModal show={open}  handleClose={()=> setOpen(false)} />
    <TodoItem todo={todoList}/>
    </Container>
     
  )
}

export default App
