import React, { useState, useEffect } from 'react';
import { A } from 'hookrouter';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ItensListaTarefas from './itens-lista-tarefas';


function ListarTarefas() {

    const [tarefas, setTarefas] = useState([]);
    const [carregarTarefas, setCarregarTarefas] = useState(true);

    useEffect(() => {
        function obterTarefas() {
            const tarefasDb = localStorage['tarefas'];
            let listarTarefas = tarefasDb ? JSON.parse(tarefasDb) : [];
            setTarefas(listarTarefas);
            console.log(listarTarefas);
        }
        if(carregarTarefas){
            obterTarefas();
            setCarregarTarefas(false);
        }
    }, [carregarTarefas]);

    return (
        <div className="text-center">

            <h3>Tarefas a fazer</h3>

            <Table striped bordered hover responsive data-testid="tabela">
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>
                            <A href="/cadastrar" className="btn btn-success btn-sm" data-testid="btn-nova-tarefa">
                                <FontAwesomeIcon icon={faPlus} /> 
                                &nbsp; Nova Tarefa
                            </A>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <ItensListaTarefas 
                    tarefas={tarefas}
                    recarregarTarefas={setCarregarTarefas} />
                </tbody>
            </Table>
            

        </div>
    );
}

export default ListarTarefas;
