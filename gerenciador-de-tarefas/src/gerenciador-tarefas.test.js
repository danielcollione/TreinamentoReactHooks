import React from 'react';
import { render } from '@testing-library/react';
import GerenciadorTarefas from './gerenciador-tarefas';

test('deve renderizar o projeto sem erros', () => {
  const { getByText } = render(<GerenciadorTarefas />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
