import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function DeleteVehicleModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Item = props.Item;

  const SubmitForm = async e => {
    e.preventDefault();
    try {
      const id = Item.id;
      const response = await fetch("https://localhost:7075/api/Vehicles/" + id, {
        method: "Delete",
        headers: { "Content-Type": "application/json" },
        parameter: JSON.stringify(id)
      });
      console.log(response)
      handleClose();
      window.location.reload(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Button variant="btn btn-outline-light" onClick={handleShow}>
        Eliminar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar vehículo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Confirmar operación.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="btn btn-outline-light" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="btn btn-outline-danger" onClick={SubmitForm}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
