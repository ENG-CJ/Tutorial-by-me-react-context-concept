import React, { useContext,useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { AppContext } from "../Context/AppProvider";

export default function AddTodoModal({ show, handleClose }) {
  const { addTodo } = useContext(AppContext);
  const [data, setData] = useState({
    id: Math.random(),
    text: "",
    completed: false,
  });
  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Modal show={show}>
      <Modal.Header closeButton>
        <Modal.Title>AddTodo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-group mb-2">
          <label>Todo</label>
          <input value={data.text} name='text' onChange={onChangeHandler} type="text" className="border-1 border-dark form-control" />
        </div>
        <div className="form-group">
          <label>Description[optional]</label>
          <input type="text" className="border-1 border-dark form-control" />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={()=>{
             addTodo(data);
            handleClose();
        }}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
