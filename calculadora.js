
function calculadora() {
    var operacao =Number(prompt('escolha uma operacao: \n 1 - Soma (+) \n 2 - Subtracao (-) \n 3 - multiplicacao  \n  4 - divisao real (/) \n 5 - Divisao inteira (%) \n 6 - Potencializacao (**) '));
    
    if(!operacao || operacao >=7){
        alert('ERRO - OPERACAO INVALIDA');
        calculadora();
    }else{

            let n1 = Number (prompt ('Insira o primeiro valor'));
            let n2 = Number (prompt('insira o segundo valor'));
            let resultado;
            
            if(!n1 || !n2){
                alert('ERRO - VALOR INVALIDOS');
                calculadora();
            }else{
                alert(' VALORES VALIDOS');
            
                function soma(){
                    resultado = n1 + n2 ;
                    alert(`${n1} + ${n2} = ${resultado}`);
                    novaOperacao();
                }
            
            
                function subtracao(){
                    resultado = n1 - n2 ;
                    alert(`${n1} - ${n2} = ${resultado}`);
                    novaOperacao();
                }
            
                
                function multiplicacao(){
                    resultado = n1 * n2 ;
                    alert(`${n1} * ${n2} = ${resultado}`);
                    novaOperacao();
                }
            
                
                
                function divisao(){
                    resultado = n1 / n2 ;
                    alert(`${n1} / ${n2} = ${resultado}`);
                    novaOperacao();
                }
            
                
                
                
                function divisaoInteira(){
                    resultado = n1 % n2 ;
                    alert(`${n1} % ${n2} = ${resultado}`);
                    novaOperacao();
                }
            
            
                function potencializacao(){
                    resultado = n1 ** n2 ;
                    alert(`${n1} ** ${n2} = ${resultado}`);
                    novaOperacao();
                }
            
            
            
            
            function novaOperacao(){
                let opcao = prompt('Deseja fazer outra operacao? \n 1 - SIM \n 2 - NAO');
                if(opcao ==1){
                    calculadora();
                }else if (opcao == 2 ){
                    alert('Ate mais...')
                }else{
                    alert('Digite uma opcao valida!')
                    novaOperacao();
                }
            }
            
            switch (operacao){
                case 1 :
                    soma();
                    break;
    
                case 2 :
                    subtracao();
                    break;
                
                case 3 :
                        multiplicacao();
                        break;
    
                case 4 :
                        divisao();
                        break;
    
                  case 5:
                        divisaoInteira();
                        break;
    
                case 6 :
                        potencializacao();
                        break;
    
                
        }
            
            }
        
        
        
        }
}
calculadora();



