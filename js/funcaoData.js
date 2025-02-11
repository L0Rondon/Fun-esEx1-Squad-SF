function diaSemana() {
    switch (new Date().getDay()) {
        case 0:
            day = "Domingo";
            break;
        case 1:
            day = "Segunda";
            break;
        case 2:
            day = "Terça";
            break;
        case 3:
            day = "Quarta";
            break;
        case 4:
            day = "Quinta";
            break;
        case 5:
            day = "Sexta";
            break;
        case 6:
            day = "Sabado";
    }
    document.getElementById('diaSemanaAtual').textContent = "Dia da semana: " + day;
};

function mesData() {
    switch (new Date().getMonth()) {
        case 0:
            mes = "Janeiro";
            break;
        case 1:
            mes = "Fevereiro";
            break;
        case 2:
            mes = "Março";
            break;
        case 3:
            mes = "Abril";
            break;
        case 4:
            mes = "Maio";
            break;
        case 5:
            mes = "Junho";
            break;
        case 6:
            mes = "Julho";
            break;
        case 7:
            mes = "Agosto";
            break;
        case 8:
            mes = "Setembro";
            break;
        case 9:
            mes = "Outubro";
            break;
        case 10:
            mes = "Novembro";
            break;
        case 11:
            mes = "Dezembro";
            break;

    }
    document.getElementById('mesAtual').textContent = "Mês atual:  " + mes
};

function anoData() {
    // Pegando a data do Sistema
    let dataAtual = new Date();
    // Pegando o dia do mês
    let numeroAno = dataAtual.getFullYear();
    //Mostrando o mês da data
    document.getElementById('anoAtual').textContent = "Ano: " + numeroAno
};