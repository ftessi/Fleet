import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function EditVehicleModal(props) {

  // Modal Handling

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Form handling

  const [Item, setItem] = useState(props.Item);


  const SubmitForm = async e => {
    e.preventDefault();
    try {
      const body = Item;
      const response = await fetch("https://localhost:7075/api/Vehicles", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
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
        Editar vehículo
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar vehículo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="NewVehicleForm">
            <div className='Input-Field row'>
              <div className='col'><input placeholder='Auto, Camioneta, Camión...' value={Item.typeName} onChange={e => setItem({ ...Item, typeName: e.target.value })}></input></div>
              <div className='col'>Tipo de vehículo</div>
            </div>
            <div className='Input-Field row'>
              <div className='col'><input placeholder='Ford, Chevrolet, Scania...' value={Item.brand} onChange={e => setItem({ ...Item, brand: e.target.value })}></input></div>
              <div className='col'>Marca</div>
            </div>
            <div className='Input-Field row'>
              <div className='col'><input placeholder='Mondeo, Silverado, T1000...' value={Item.model} onChange={e => setItem({ ...Item, model: e.target.value })}></input></div>
              <div className='col'>Modelo</div>
            </div>
            <div className='Input-Field row'>
              <div className='col'><input placeholder='AA333BB' value={Item.patent} onChange={e => setItem({ ...Item, patent: e.target.value })}></input></div>
              <div className='col'>Patente</div>
            </div>
            <div className='Input-Field row'>
              <div className='col'><input placeholder='CH013LPDA4456' value={Item.chassisNumber} onChange={e => setItem({ ...Item, chassisNumber: e.target.value })}></input></div>
              <div className='col'>N° de chasis</div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="btn btn-outline-light" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="btn btn-outline-warning" onClick={SubmitForm}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
