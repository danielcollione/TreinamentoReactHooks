import React from 'react';
import ReactDOM from 'react-dom';
import AtualizarTarefa from './atualizar-tarefa';

describe('Teste do componente de atualização de tarefa', () => {

    it('deve renderizar o componente sem erros', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AtualizarTarefa id={1} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

});