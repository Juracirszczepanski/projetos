import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export function ModalValeAPenaOuvirDeNovo({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Vale a Pena Ouvir de Novo</Modal.Title>
      </Modal.Header>
      <Modal.Body>De: 01:00 - Até: 04:00</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
            Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export function ModalChapeueViola({ show, handleClose }) {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Chapéu e Viola</Modal.Title>
        </Modal.Header>
        <Modal.Body>De: 04:00 - Até: 05:00</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
              Ok
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export function ModalPaixaoSertaneja({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header>
            <Modal.Title>Paixão Sertaneja</Modal.Title>
        </Modal.Header>
        <Modal.Body>De: 05:00 - Até: 07:00</Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
                Ok
            </Button>
        </Modal.Footer>
        </Modal>
    );
}

export function ModalGuardiaodas7Chaves({ show, handleClose }) {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Guardião das 7 Chaves</Modal.Title>
        </Modal.Header>
        <Modal.Body>De: 07:00 - Até: 07:30</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
              Ok
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export function ModalDiretodaRedacao({ show, handleClose }) {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Direto da Redação</Modal.Title>
        </Modal.Header>
        <Modal.Body>De: 07:30 - Até: 08:00</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
              Ok
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export function ModalMicrofonia({ show, handleClose }) {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Microfonia</Modal.Title>
        </Modal.Header>
        <Modal.Body>De: 08:00 - Até: 09:00</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
              Ok
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export function ModalManhaInterativa({ show, handleClose }) {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Manhã Interativa</Modal.Title>
        </Modal.Header>
        <Modal.Body>De: 09:00 - Até: 12:00</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
              Ok
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export function ModalNoticias_103({ show, handleClose }) {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>103 Notíciaso</Modal.Title>
        </Modal.Header>
        <Modal.Body>De: 12:00 - Até: 14:00</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
              Ok
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export function ModalMandeiBem({ show, handleClose }) {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Mandei Bem</Modal.Title>
        </Modal.Header>
        <Modal.Body>De: 14:00 - Até: 17:00</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
              Ok
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export function ModalFimdeTarde({ show, handleClose }) {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Fim de Tardeo</Modal.Title>
        </Modal.Header>
        <Modal.Body>De: 17:00 - Até: 19:00</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
              Ok
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export function ModalAVozdoBrasil({ show, handleClose }) {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>A Voz do Brasil</Modal.Title>
        </Modal.Header>
        <Modal.Body>De: 19:00 - Até: 20:00</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
              Ok
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export function ModalMaquinadoTempo({ show, handleClose }) {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Máquina do Tempo</Modal.Title>
        </Modal.Header>
        <Modal.Body>De: 20:00 - Até: 21:00</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
              Ok
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export function ModalAntenaMix({ show, handleClose }) {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Antena Mix</Modal.Title>
        </Modal.Header>
        <Modal.Body>De: 21:00 - Até: 22:00"</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
              Ok
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export function ModalAmorSemFim({ show, handleClose }) {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Amor Sem Fim</Modal.Title>
        </Modal.Header>
        <Modal.Body>De: 22:00 - Até: 01:00</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
              Ok
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
