function CalculadoraService(){

    const SOMA = '+'
    const SUB = '-'
    const DIV = '/'
    const MULT = '*'

    function calcular(numero1, numero2, operacao) {
        let resultado;

        switch(operacao){
            case SOMA:
                resultado = numero1 + numero2;
                break;
            case SUB:
                resultado = numero1 - numero2;
                break;
            case DIV:
                resultado = numero1 / numero2;
                break;
            case MULT:
                    resultado = numero1 * numero2;
                break;
            default:
                resultado = 0;
        }

        return resultado;
    }

    function concatenarNumero(numAtual, numConcat) {
        //Caso contenha apenas '0' ou null, reinicia o valor
        if(numAtual === '0' || numAtual === null){
            numAtual = '';
        }

        //Primeiro digito for '.', concatenar '0' antes do ponto
        if(numConcat === '.' && numAtual === ''){
            return '0.';
        }

        //Caso '.' digitado e já contenha um ponto, apenas retornar
        if(numConcat === '.' && numAtual.indexOf('.') > -1){
            return numAtual;
        }

        return numAtual + numConcat; 
    }

    return [
        calcular, concatenarNumero, SOMA, SUB, DIV, MULT
    ];
}

export default CalculadoraService;