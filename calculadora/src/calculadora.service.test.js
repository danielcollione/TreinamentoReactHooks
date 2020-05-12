import React from 'react';
import ReactDom from 'react-dom';
import CalculadoraService from './calculadora.service';

describe('Teste do CalculadoraService', () => {
    
    const [calcular, concatenarNumero, SOMA, SUB, DIV, MULT] = CalculadoraService();

    it('deve garantir que 1 + 4 = 5.', () => {
        let soma = calcular(1, 4, SOMA);
        expect(soma).toEqual(5);
    });

    it('deve garantir que 1 - 4 = -3.', () => {
        let sub = calcular(1, 4, SUB);
        expect(sub).toEqual(-3);
    });

    it('deve garantir que 1 / 4 = 0.25', () => {
        let div = calcular(1, 4, DIV);
        expect(div).toEqual(0.25);
    });

    it('deve garantir que 1 * 4 = 4', () => {
        let mult = calcular(1, 4, MULT);
        expect(mult).toEqual(4);
    });

    it('deve retornar 0 para operação inválida', () => {
        let operacaoInvalida = calcular(1, 4, '%');
        expect(operacaoInvalida).toEqual(0);
    });

});