import React from 'react';
import './conversor-moedas.css';
import { 
  Jumbotron, Button, Form, Col, Spinner, Alert, Modal 
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

function ConversorMoedas() {
  return (
    <div>
      <h1>Conversor de Moedas</h1>
      <Alert variant="danger" show={false}>
        Erro obtendo dados de conversão, tente novamente.
      </Alert>
      <Jumbotron>
        <Form>
          <Form.Row>

            <Col sn="3"> 
              <Form.Control placeholder="0" value={1} required /> 
            </Col>

            <Col sn="3">
              <Form.Control as="select"></Form.Control>
            </Col>

            <Col sn="1" className="text-center" style={{paddingTop: '5px'}}>
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </Col>

            <Col sn="3">
              <Form.Control as="select"></Form.Control>  
            </Col>

            <Col sn="2">
              <Button variant="success" type="submit">
                <Spinner animation="border" size="sm"></Spinner>
                Converter
              </Button>
            </Col>

          </Form.Row>
        </Form>
        <Modal show={true}>
          <Modal.Header closeButton>
            <Modal.Title>Conversão</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Resultado da Conversão aqui...
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success">
              Nova Conversão
            </Button>
          </Modal.Footer>
        </Modal>
      </Jumbotron>
    </div>
  );
}

export default ConversorMoedas;
