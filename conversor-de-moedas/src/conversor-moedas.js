import React, { useState } from 'react';
import './conversor-moedas.css';
import { 
  Jumbotron, Button, Form, Col, Spinner, Alert, Modal 
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import ListarMoedas from './listar-moedas';


function ConversorMoedas() {

  const [valor, setValor] = useState('1');
  const [moedaDe, setMoedaDe] = useState('BRL');
  const [moedaPara, setMoedaPara] = useState('USD');

  function handleValor(event){
    setValor(event.target.value.replace(/\D/g, '')); //replace(D) - verifica dados não numericos e substitui por ''.
  }

  function handleMoedaDe(event){
    setMoedaDe(event.target.value);
  }

  function handleMoedaPara(event){
    setMoedaPara(event.target.value);
  }

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
              <Form.Control placeholder="0" value={valor} onChange={handleValor} required /> 
            </Col>

            <Col sn="3">
              <Form.Control as="select" value={moedaDe} onChance={handleMoedaDe}><ListarMoedas/></Form.Control>
            </Col>

            <Col sn="1" className="text-center" style={{paddingTop: '5px'}}>
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </Col>

            <Col sn="3">
              <Form.Control as="select" value={moedaPara} onChance={handleMoedaPara}><ListarMoedas/></Form.Control>  
            </Col>

            <Col sn="2">
              <Button variant="success" type="submit">
                <Spinner animation="border" size="sm"></Spinner>
                Converter
              </Button>
            </Col>

          </Form.Row>
        </Form>
        <Modal show={false}>

          <Modal.Header closeButton>
            <Modal.Title>Conversão</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Resultado da Conversão aqui...
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success">Nova Conversão</Button>
          </Modal.Footer>

        </Modal>
      </Jumbotron>
    </div>
  );
}

export default ConversorMoedas;
