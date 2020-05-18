import React from 'react';
import ReactDOM from 'react-dom';
import GerenciadorTarefas from './gerenciador-tarefas';

describe.skip('Teste do componente de gerenciador de tarefa', () => {

  it('deve renderizar o projeto sem erros', () => {
      const div = document.createElement('div');
      ReactDOM.render(<GerenciadorTarefas />, div);
      ReactDOM.unmountComponentAtNode(div);
  });

});