const idade = parseInt(prompt("Qual a sua idade: "))
const Cidade = (prompt("Qual a sua cidade: "))
const mesNasc = parseInt(prompt("Qual o mês em que nasceu (1,2,3...): "))
if (idade >= 18) {
    if (Cidade == "Campinas") {
        switch (mesNasc) {
            case 1:
                mes = false;
                break;
            case 2:
                mes = true;
                break;
            case 3:
                mes = false;
                break;
            case 4:
                mes = true;
                break;
            case 5:
                mes = false;
                break;
            case 6:
                mes = true;
                break;
            case 7:
                mes = false;
                break;
            case 8:
                mes = true;
                break;
            case 9:
                mes = true;
                break;
            case 10:
                mes = false;
                break;
            case 11:
                mes = false;
                break;
            case 12:
                mes = false;
                break;
        }
        if (mes == true) {
            document.getElementById('permissãoEntrada').textContent = "Entrada Permitida";
        } else {
            document.getElementById('permissãoEntrada').textContent = "A entrada Não foi permitida";
        }

    } else {
        document.getElementById('permissãoEntrada').textContent = "A entrada Não foi permitida";
    }
}
else {
    document.getElementById('permissãoEntrada').textContent = "A entrada Não foi permitida";
}