var senhaUsu = 2678; //Senha pré-determinada
var nomeHotel = prompt("Escolha o nome do Hotel:");
alert("O nome do Hotel é " + nomeHotel);
var nomeUsu = prompt("Digite seu nome para entrar no sistema:");
function Senha() { //Função de confirmação de senha
	var senha = prompt("Digite sua senha:");
	if (senha == senhaUsu) {
		alert("Bem vindo ao Hotel " + nomeHotel + ", " + nomeUsu + ". É um imenso prazer ter você por aqui!");
		inicio();
	} else {
		alert("Senha inválida, tente novamente.");
		Senha();
	}
}
Senha();

function inicio() {

    var escolha = parseInt(prompt('Selecione uma opção \n1.) Reserva de Quartos \n2.) Cadastro de Hóspedes \n3.) Cadastro e Pesquisa \n4.) Festa \n5.) Buffet \n6.) Reserva de Auditórios \n7.) Reserva de restaurante \n8.) Abastecimento de Carros \n9.) Concerto de Ar \n10.) Sair'));

    //Encaminha o usuário para a opção que ele escolher menu
    switch (escolha) {
        case 1:
            reserva_quartos();
            break;
        case 2:
            cadastro_hospedes();
            break;
        case 3:
            cadastro_pesquisa();
            break;
        case 4:
            eventos();
            break;
        case 5:
            buffet();
            break;
        case 6:
            reserva_auditorio();
            break;
        case 7:
            reserva_restaurante();
            break;
        case 8:
            abastecer_carros();
            break;
        case 9:
            concerto_ar();
            break;
        case 10:
            sair();
            break;
        default:
            erro();
    }
}

function reserva_quartos() {
    var valDiaria = prompt("Qual o valor padrão da diária?"); //O usuário setermina o valor da diária
    if(valDiaria <= 0 || isNaN(valDiaria)){
        alert("Digite um valor válido.");
        reserva_quartos();
    }
    var diasReservados = prompt("Quantos dias você deseja reservar?");
    if (diasReservados <= 0 || diasReservados > 30 || isNaN(diasReservados)){
        alert("Coloque números válidos. Só aceitamos reservas de até 30 dias.");
        reserva_quartos();
    }else{
        var valorPagar = valDiaria * diasReservados;
        alert("O valor de " + diasReservados + " dias de hospedagem é de " + valorPagar + " reais.");
        var nomeHospede = prompt("Digite seu nome para a reserva:")
        var confirma = confirm(nomeHospede + ", você confirma a hospedagem para " + nomeHotel + " por " + diasReservados + " dias? S/N");
        if (confirma){
            alert(nomeHospede + ", reserva confirmada para " + nomeHotel + ". O valor total é de " + valorPagar + " reais.")
            inicio();
        }else{
            alert(nomeHospede + ", reserva não efetuada.");
            inicio();
        }
    }
}

function cadastro_hospedes() {
    var valorDiaria = parseInt(prompt("Qual o valor padrão da diária?"));
    if(valorDiaria <= 0){
        alert("Digite um valor válido.");
        cadastro_hospedes();
    }

    var cadastro_hospedes = [];
    var gratuidade_hospede = [];
    var meia_hospede = [];
    var total = 0;

    function cadastro(){
        var nome = prompt("Digite o nome do hospede:");
        if (nome == "PARE"){
            alert(nomeUsu + ", o total de hospedagens é R$" + total + ", somando " + gratuidade_hospede.length + " gratuidade(s) e " + meia_hospede.length + " meia(s).");
            inicio();
        } 
        var idade = parseInt(prompt("Digite a idade do hospede:"));
        if(idade <= 0 || idade >=120 || isNaN(idade)){
            alert("Coloque uma idade válida");
            cadastro();
        }else if(idade <= 6){
            alert(nome + " cadastrado(a) com sucesso. " + nome + " possui gratuidade.");
            gratuidade_hospede.push(nome);
            console.log(gratuidade_hospede);
            cadastro();
        }else if(idade >= 60){
            alert(nome + " cadastrado(a) com sucesso. " + nome + " paga metade do valor.");
            meia_hospede.push(nome);
            console.log(meia_hospede);
            var meio = valorDiaria / 2;
            total += meio;
            cadastro();
        }else{
            alert(nome + " cadastrado(a) com sucesso.");
            cadastro_hospedes.push(nome);
            console.log(cadastro_hospedes);
            total += valorDiaria;
            cadastro();
        }
    }
    cadastro();
}

function cadastro_pesquisa() {
    
    var lista_hospedes = [];
    
    function sistema_cadastrar_hospedes() {

        var escolha_hospedes = parseInt(prompt('Hotel ' + nomeHotel + '\nCadastro de Hóspedes, selecione uma opção: \n1. Cadastrar \n2. Pesquisar \n3. Sair'));

        switch (escolha_hospedes){
            case 1: cadastrar_hospedes(); break;
            case 2: pesquisar_hospedes(); break;
            case 3: inicio(); break;
            default: erro_pesquisar_hospedes();
        }
    }
    
    function cadastrar_hospedes() {
        // lenght é uma propriedade que retorna a quantidade de itens dentro do array. 
        if (lista_hospedes.length >= 15){
            alert("Numero máximo de hóspedes cadastrados.");
        } else {	
            var nome_hospede = prompt('Por favor, informe o nome da(o) hóspede:');

            // O método push() permite adicionar um item ao Array/Vetor. Importante dizer que ele adiciona o elemento ao final do Array/Vetor. 
            lista_hospedes.push(nome_hospede);
            console.log(lista_hospedes); // O console é usado apenas para exibir ao desenvolvedor todo mundo que já está cadastrado.
            alert("Sucesso! Hóspede " + nome_hospede + " foi cadastrada(o) com sucesso!\n");
        }
        
        sistema_cadastrar_hospedes();
    }
    
    function pesquisar_hospedes() {
        var nome_hospede = prompt('Por favor, informe o nome da(o) hóspede para pesquisa:');
        // O método includes() procura por um elemento dentro do Array e retorna verdadeiro ou falso. Caso queira comparar números, o mais indicado é o método find();
        if (lista_hospedes.includes(nome_hospede)){
            alert(nome_hospede + ' encontrada(o).')
        } else {
            alert(nome_hospede + ' não foi encontrada(o).')
        }
        
        sistema_cadastrar_hospedes() 
    }
    
    function erro_pesquisar_hospedes(){
        alert('Por favor, informe um número entre 1 e 3');
        sistema_cadastrar_hospedes();
    }
    
    sistema_cadastrar_hospedes();
}

function eventos() {
    var valHora = 10.50;
    alert(nomeUsu + ", o valor de cada garçom é de R$" + valHora + " a hora.");

    function reserva(){
        var qtdGarcom = parseInt(prompt("Quantos garçons serão necessários para o evento?"));
        if(isNaN(qtdGarcom)){
            alert("Digite valores válidos!");
            reserva();
        }
        var qtdHoraEvento = parseInt(prompt("Quantas horas seu evento terá de duração?"));
        if(isNaN(qtdHoraEvento)){
            alert("Digite valores válidos!");
            reserva();
        }
        var total = (qtdGarcom * valHora) * qtdHoraEvento;
        alert(nomeUsu + ", o custo total é de R$" + total);
        var aceitar = prompt('Gostaria de efetuar a reserva? S/N');
        if (aceitar == "S"){
            alert("Reserva efetuada com sucesso!");
            inicio();
        }else if(aceitar == "N"){
            alert(nomeUsu + ", sua reserva não foi efetuada!");
            var confirmar = confirm("Deseja realizar uma nova reserva?");
            if(confirmar){
                reserva();
            }else{
                inicio();
            }
        }else{
            alert("Digite valores válidos!");
            reserva();
        }
    }
    reserva();
}

function buffet() {
    var cafe = 0.2;
    var agua = 0.5;
    var sPp = 7;

    function calcBuffet(){
        var qtdConvidados = parseFloat(prompt('Quantos convidados irão para seu evento?'));
        if(qtdConvidados > 350){
            alert('Quantidade de convidados superior à capacidade máxima. O salão suporta 350 pessoas.');
            calcBuffet();
        }else if(isNaN(qtdConvidados)){
            alert('Digite um valor válido!');
            calcBuffet();
        }else{
            var valorcafe = qtdConvidados * cafe;
            var valorAgua = qtdConvidados * agua;
            var valorSalg = qtdConvidados * sPp;
            var totalBuffet = valorcafe + valorAgua + valorSalg;
            alert("O evento precisará de " + valorcafe + " litros de café, " + valorAgua + " litros de água e " + valorSalg + " salgados. O custo total é de R$" + totalBuffet + " reais.");
            var confirmar = prompt("Gostaria de efetuar a reserva? S/N");
            if(confirmar == 'S'){
                alert(nomeUsu + ', reserva efetuada com sucesso!');
                inicio();
            }else if(confirmar == 'N'){
                alert(nomeUsu + ', reserva não efetuada!');
                inicio();
            }else{
                alert('Digite um valor válido!');
                calcBuffet();
            }
        }
    }
    calcBuffet();
}

function reserva_auditorio() {

    var qtdPessoas = parseInt(prompt('Quantos convidados seu evento terá?'));
    if(qtdPessoas > 350 || qtdPessoas <= 0){
        alert('Número de convidados inválido. Temos opções de auditótios para até 350 pessoas.');
        reserva_auditorio();
    }else if(isNaN(qtdPessoas)){
        alert('Digite um número válido.');
        reserva_auditorio();
    }else{
        if(qtdPessoas <= 220){
            var resto = qtdPessoas - 150;
            if(qtdPessoas > 150){
                alert('Use o auditório laranja. (Inclua mais ' + resto + ' cadeiras)');
                var confirmar = confirm('Efetuar reserva?');
                if(confirmar){
                    alert(nomeUsu + ', reserva efetuada.');
                    inicio();
                }else{
                    alert(nomeUsu + ', reserva não efetuada!');
                    inicio();
                }
            }else{
                alert('Use o auditório laranja.');
                var confirmar = confirm('Efetuar reserva?');
                if(confirmar){
                    alert(nomeUsu + ', reserva efetuada.');
                    inicio();
                }else{
                    alert(nomeUsu + ', reserva não efetuada!');
                    inicio();
                }
            }	
        }else{
            alert('Use o auditório colorado.');
            var confirmar = confirm('Efetuar reserva?');
            if(confirmar){
                alert(nomeUsu + ', reserva efetuada.');
                inicio();
            }else{
                alert(nomeUsu + ', reserva não efetuada!');
                inicio();
            }
        }
    }
}

function reserva_restaurante() {

    var diaSemana = prompt("Qual dia da semana você quer reservar?");
    if(diaSemana == "segunda" || diaSemana == "terca" || diaSemana == "quarta" || diaSemana == "quinta" || diaSemana == "sexta"){
        var hora = parseInt(prompt("Qual horário você quer reservar?"));
        if(isNaN(hora)){
            alert('Digite um valor válido.');
            reserva_restaurante();
        }else if(hora >= 7 && hora <= 23){
            var nomeEmpresa = prompt('Qual o nome da sua empresa?');
            alert('Reserva efetuada para ' + nomeEmpresa + '. ' + diaSemana + ' ás ' + hora + 'h.')
            inicio();
        }else{
            alert('Horário indisponível. Funcionamos das 7h as 23h.');
            reserva_restaurante();
        }
    }else if(diaSemana == "sabado" || diaSemana == "domingo"){
        var hora = parseInt(prompt("Qual horário você quer reservar?"));
        if(isNaN(hora)){
            alert('Digite um valor válido.');
            reserva_restaurante();
        }else if(hora >= 7 && hora <= 15){
            var nomeEmpresa = prompt('Qual o nome da sua empresa?');
            alert('Reserva efetuada para ' + nomeEmpresa + '. ' + diaSemana + ' ás ' + hora + ' h.')
            inicio();
        }else{
            alert('Horário indisponível. Funcionamos das 7h as 15h.');
            reserva_restaurante();
        }
    }else{
        alert('Digite um dia válido.');
        reserva_restaurante();
    }
}

function abastecer_carros() {
    var valAW = parseFloat(prompt('Qual o valor do álcool no posto Waine Oil?'));
    var valGW = parseFloat(prompt('Qual o valor da gasolina no posto Waine Oil?'));
    var melhorWaine = 0;
    var r1 = (valGW * 30) / 100;
    var resto = valGW - r1;
    if(valAW <= resto){
        melhorWaine = valAW;
    }else{
        melhorWaine = valGW;
    }
    var valAS = parseFloat(prompt('Qual o valor do álcool no posto Stark Petrol?'));
    var valGS = parseFloat(prompt('Qual o valor da gasolina no posto Stark Petrol?'));
    var melhorStark = 0;
    var r2 = (valGS * 30) / 100;
    var restos = valGS - r2;
    if(valAS <= restos){
        melhorStark = valAS;
    }else{
        melhorStark = valGS;
    }
    if(melhorStark > melhorWaine){
        if(melhorWaine == valAW){
            alert("O melhor é abastecer com álcool no posto Waine Oil.");
            inicio();
        }else{
            alert("O melhor é abastecer com gasolina no posto Waine Oil.");
            inicio();
        }
    }else if(melhorStark < melhorWaine){
        if(melhorStark == valAS){
            alert("O melhor é abastecer com álcool no posto Stark Petrol.");
            inicio();
        }else{
            alert("O melhor é abastecer com gasolina no posto Stark Petrol.");
            inicio();
        }
    }else if(melhorStark == melhorWaine){
        alert("Os valores são iguais, ambos valem a pena.");
        inicio();
    }else{
        alert("Algo saiu errado, tente novamente!");
        abastecer_carros();
    }
}

function concerto_ar() {
    var menorEmpresa = '';
    var menorCusto = 100000000;

    var nomeEmpresa = prompt('Digite o nome da empresa.');
    var valor = parseFloat(prompt('Qual o valor por aparelho?'));
    if(isNaN(valor)){
        alert("Digite valores válidos!");
        concerto_ar();
    }
    var qtdAparelho = parseInt(prompt('Quantos aparelhos precisarão de manutenção?'));
    if(isNaN(qtdAparelho)){
        alert("Digite valores válidos!");
        concerto_ar();
    }
    var prcDesc = parseFloat(prompt('Qual a porcentagem do desconto?'));
    if(isNaN(prcDesc)){
        alert("Digite valores válidos!");
        concerto_ar();
    }
    var qtdDesc = parseInt(prompt('Quantos aparelhos para conseguir o desconto?'));
    if(isNaN(qtdDesc)){
        alert("Digite valores válidos!");
        concerto_ar();
    }
    if(qtdAparelho >= qtdDesc){
        var total = valor * qtdAparelho;
        var desc = (total * prcDesc) / 100;
        var totalCheio = total - desc;
        alert("O serviço de " + nomeEmpresa + " custará R$" + totalCheio + " reais.");
        menorEmpresa = nomeEmpresa;
        menorCusto = totalCheio;
    }else{
        var totalCheio = valor * qtdAparelho;
        alert("O serviço de " + nomeEmpresa + " custará R$" + totalCheio + " reais.");
        menorEmpresa = nomeEmpresa;
        menorCusto = totalCheio;
    }
    var novoOr = prompt("Deseja calcular orçamento de outra(s) empresa(s)?");
    if(novoOr == 'S'){
        if(totalCheio < menorCusto){
            menorEmpresa = nomeEmpresa;
            menorCusto = totalCheio;
            concerto_ar();
        }else{
            concerto_ar();
        }
    }else if(novoOr == 'N'){
        alert('O orçamento de menor valor é o da empresa ' + menorEmpresa + ' por R$' + menorCusto + ' reais.')
        inicio();
    }else{
        alert('Algo saiu errado, tente novamente!');
        concerto_ar();
    }
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert("Muito obrigado e até logo, " + nomeUsu); window.close();
    } else{
        inicio();
    }
}

function erro() {
    alert('Por favor, informe um número entre 1 e 10');
    inicio();
}

inicio();