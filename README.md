# Hotel_JavaScript
# Criação:
Esse sem dúvidas foi o projeto em Javascrip muito trabalhoso. A proposta em si já traz algo diferente por estarmos desenvolvendo uma apliação para dar suporte ao funcionário em seu trabalho. Nos fez pensar fora da caixa e desenvolver muitos cálculos. Desafiador, porém muito empolgante de realizar.

## Proposta:
Hora de pensar! Hoje vamos desenvolver um programa feito com vários outros programas utilizando um conceito de software modulado, feito com partes independentes.  O objetivo é desenvolver uma plataforma para funcionários do hotel usarem, não os hóspedes.

## A plataforma deve conter:
## Reserva de Quartos
Todo hotel precisava reservar quartos. Então vamos começar por isso. Desenvolva um programa que: 
- Receba o valor de uma diária no hotel e a quantidade de dias de hospedagem. Valide as informações, ou seja, impeça que o usuário informe dados inválidos, de maneira que o valor da diária não seja negativo e que a quantidade de dias não seja negativa, nem maior que 30. 
Em caso de informação inválida escreva na tela “Valor Inválido” e volte ao menu inicial. 
- Em seguida, caso o usuário tenha informado um valor correto, pergunte o nome do hóspede. 
- O próximo passo é perguntar se o usuário confirma a reserva. Caso não aceite, volte ao menu inicial.

## Cadastro de Hóspedes
Aqui vamos tratar do cadastro de hóspedes. Imagine que uma família acaba de chegar ao balcão do hotel e quer se hospedar. 
- Primeiro diremos ao programa o valor padrão da diária e só então cadastraremos todos os hóspedes. O programa receberá vários nomes de hóspedes e suas idades, sem limites.
- Caso o hóspede tenha menos de 6 anos, ela ou ele não paga a diária – nesses casos mostre na tela “[Nome do hóspede] possui gratuidade”.
- Caso o hóspede tenha mais de 60, ela ou ele paga metade da diária – mostre na tela “[Nome do hóspede] paga meia”.
- O usuário informará hóspedes até digitar a palavra “PARE”, que interrompe a entrada de dados. 
- Ao fim, mostre a quantidade de gratuidades, a quantidade de meias hospedagens e o valor total, considerando todos os hóspedes informados.

## Cadastro e Pesquisa
Aqui vamos tratar do cadastro de hóspedes, mas de uma forma diferente. Como no programa anterior, imagine que uma família acaba de chegar ao balcão do hotel e quer se hospedar. Monte um programa em que o usuário poderá cadastrar e pesquisar hóspedes. 
- O programa deve oferecer um menu com três opções ao usuário: 1- cadastrar; 2- pesquisar; 3- sair. 
- A opção “cadastrar” deve permitir que o usuário informe um nome de hóspede, gravando-o em memória (máximo de 15 cadastros; caso atinja essa quantidade, mostre “Máximo de cadastros atingido”). 
- A opção “pesquisar” deve permitir que o usuário informe um nome e, caso seja encontrado um nome exatamente igual, mostre a mensagem “Hospede (nome) foi encontrado". - Se o nome não foi encontrado mostre “Hóspede não encontrado”. 
- O programa deve permitir que o usuário realize essas operações repetidas vezes, até que use a opção “3”, que retorna ao menu principal.  

## Reserva de Salão para Festa
Neste cenário, o hotel receberá não hóspedes, mas eventos. Quando uma empresa contrata o hotel para eventos, são oferecidos garçons para servir os convidados. Considerando que cada garçom custa R$ 10,50 por hora, escreva um programa que receba o número de garçons necessários e o total de horas do evento. 
- Depois calcule o custo total que o hotel terá com a contratação desses profissionais e exiba o resultado em tela. 
- Por último, pergunte se o usuário aceita os valores. Se "SIM", exiba a mensagem "Reserva efetuada com sucesso". Caso contrário, exiba a mensagem "Reserva não efetuada."

## Reserva de Buffet 
Neste cenário vamos tratar do Buffet do hotel. O hotel oferece café, água e salgados para cada um dos convidados de um evento alocado em seus salões. A quantidade de café, em litros, é calculada como 0,2 litro para cada convidado; a quantidade de água é calculada como 0,5 litro para cada convidado; são oferecidos 7 salgados por pessoa. Faça um programa que:
* Receba a quantidade de convidados e valide se o número de pessoas excede 350 (a capacidade máxima do salão), mostrando, nesse caso, a mensagem “quantidade de convidados superior à capacidade máxima”. 
* Caso a quantidade de convidados seja válida, calcule a quantidade de água, café e salgados para o evento, mostrando em tela esses valores.
* Sabendo que cada litro de café custa, 0,80 centavos, cada litro de água custa 0,40 centavos e o cento de salgados custa 34 reais, calcule o custo total com comida do evento. 
* Por último, pergunte se o usuário aceita os valores. Se "SIM", exiba a mensagem "Reserva efetuada com sucesso". Caso contrário, exiba a mensagem "Reserva não efetuada."

## Reserva de Auditórios
O hotel necessita de uma funcionalidade que indique qual de seus dois auditórios é o mais adequado para um evento. O auditório Laranja conta com 150 lugares e espaço para até 70 cadeiras adicionais. O auditório Colorado conta com 350 lugares, sem espaço para mais cadeiras. Desenvolva um programa que:
- Receba o número de convidados do evento e faça uma verificação sobre a quantidade: se for maior que 350 ou se for menor que zero, mostre a mensagem “Número de convidados inválido”. Se o valor informado é válido, mostre na tela qual dos auditórios é o mais adequado, dando prioridade ao Auditório Laranja. 
- No caso do auditório Laranja, ainda, calcule quantas cadeiras adicionais serão necessárias, observando o limite citado acima.

## Reserva de restaurante
Ainda em relação aos eventos, o hotel oferece reserva de seu restaurante caso o contratante necessite. O restaurante está disponível para reservas de segunda a sexta das 7hs às 23hs; sábados e domingos apenas das 7hs às 15hs. 
1. Monte um programa que receba o dia da semana em texto.
Importante: na entrada de dados para dia da semana, desconsidere acentos e use letra minúscula. Não é necessário validação para isso no código.
2. Também receba a hora (número inteiro, desprezando minutos e segundos)
3. Diga se o restaurante está disponível ou  não de acordo com as regras especificadas acima. 
4. Quando o restaurante estiver disponível, receba ainda o nome da empresa e mostre na tela a mensagem “Restaurante reservado para (nome da empresa): (dia da semana) às (horas)hs”.

## Comparativo para Abastecimento de Carros
O hotel tem um carro para levar seus hóspedes a passeios. O carro é sempre abastecido pelo hotel que tem convênios com dois postos de Gasolina: o Wayne Oil e o Stark Petrol. Os carros podem ser abastecidos tanto com álcool quanto gasolina, mas os preços têm flutuado bastante, então é necessário que que um funcionário cheque qual o posto mais em conta para abastecimento.

Para isso, é necessário desenvolver um programa em que o usuário informe os valores de álcool e gasolina dos dois postos e depois calcule qual o combustível mais atraente e o posto mais barato. Considere que o tanque do carro comporta 42 litros de combústivel e esse sempre será o volume a ser abastecido. 
Considere que quando o álcool estiver 30% mais barato que a gasolina, é mais barato abastecer com álcool.
Dica: Regra de três.

## Comparativo para Concerto de Ar-Condicionado
A manutenção dos ares condicionados no hotel é realizada por empresas terceirizadas que, em alguns casos, oferecem desconto quando o serviço é realizado em uma quantidade determinada de aparelhos. Dentro desse contexto, crie um programa em que:
* O usuário informe o valor do serviço por aparelho, a quantidade de aparelhos em manutenção, o percentual de desconto (que pode ser zero) e a quantidade mínima de aparelhos para que o desconto seja dado.
* Calcule o valor total do serviço a partir do valor por aparelho e da quantidade de aparelhos. Aplique sobre esse valor o desconto, caso a quantidade de aparelhos seja maior que a mínima informada para que haja desconto. Ao fim mostre a mensagem “O serviço de [nome da empresa] custará R$ [total calculado]”.
* Permita que o usuário informe várias empresas e os outros dados necessários para o cálculo, usando a função/procedimento para mostrar o total orçado de cada empresa. Termine o algoritmo quando o usuário responder ‘N’ à mensagem “Deseja informar novos dados? (S/N)
* Seja possível obter os diferentes valores orçados e verificar o menor valor. Mostre ao final a mensagem “O orçamento de menor valor é o de (nome da empresa) por R$ (menor valor)".

Considere que sempre serão informados ao menos duas empresas.

[Ver código](https://github.com/DiSouzaDev/Hotel_JavaScript/blob/main/script.js)
