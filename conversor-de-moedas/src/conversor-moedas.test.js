import React from 'react';
import ReactDom from 'react-dom';
import { render } from '@testing-library/react';
import ConversorMoedas from './conversor-moedas';

it('deve renderizar o componente sem erros', () => {
  const div = document.createElement('div');
  ReactDom.render(<ConversorMoedas/>, div);
  ReactDom.unmountComponentAtNode(div);
});
