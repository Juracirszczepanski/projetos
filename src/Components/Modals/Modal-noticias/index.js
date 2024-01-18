import React from 'react';
import { Modal, Button, Image } from 'react-bootstrap';
import './../../../style.css';
import './style.css';

const NewsModal = ({ show, onHide, noticia }) => {
  return (
    <Modal show={show} onHide={onHide} size='lg'>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body className='body-modal'>
        <h3 className='titulo-modal-noticias'>{noticia.title}</h3>
        <Image src={noticia.img} rounded fluid />
        <p className='p-noticia-modal'>{noticia.body}</p> 

        </Modal.Body>
      <Modal.Footer>
        <Button className='btn-noticias-fechar' onClick={onHide}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewsModal;