function dateProperties() {
    const chosendate = document.querySelector('#chosendate').value;
    const fullDate = new Date(chosendate);
    const date = fullDate.getUTCDate();
    const month = fullDate.getUTCMonth()+1;
    const year = fullDate.getUTCFullYear();
    const day = fullDate.getUTCDay();
    const timestamp = fullDate.getTime();
    let resultHTML = `<p>Dia ${date}</p><p>Mês ${month}</p><p>Ano ${year}</p>`;
    switch (day) {
        case 0:
            resultHTML += `<p>Domingo</p>`;
            break;
        case 1:
            resultHTML += `<p>Segunda-feira</p>`;
            break;
        case 2:
            resultHTML += `<p>Terça-feira</p>`;
            break;
        case 3:
            resultHTML += `<p>Quarta-feira</p>`;
            break;
        case 4:
            resultHTML += `<p>Quinta-feira</p>`;
            break;
        case 5:
            resultHTML += `<p>Sexta-feira</p>`;
            break;
        case 6:
            resultHTML += `<p>Sábado</p>`;
            break;
    }
    switch(month) {
        case 1:
            resultHTML += `<p>Janeiro</p>`;
            break;
        case 2:
            resultHTML += `<p>Fevereiro</p>`;
            break;
        case 3:
            resultHTML += `<p>Março</p>`;
            break;
        case 4:
            resultHTML += `<p>Abril</p>`;
            break;
        case 5:
            resultHTML += `<p>Maio</p>`;
            break;
        case 6:
            resultHTML += `<p>Junho</p>`;
            break;
        case 7:
            resultHTML += `<p>Julho</p>`;
            break;
        case 8:
            resultHTML += `<p>Agosto</p>`;
            break;
        case 9:
            resultHTML += `<p>Setembro</p>`;
            break;
        case 10:
            resultHTML += `<p>Outubro</p>`;
            break;
        case 11:
            resultHTML += `<p>Novembro</p>`;
            break;
        case 12:
            resultHTML += `<p>Dezembro</p>`;
    }
    resultHTML += `<p>Data em milissegundos (desde 01/01/1970): ${timestamp}</p>`;
    document.querySelector('#result').innerHTML = resultHTML;
};

document.getElementById('show').addEventListener('click', dateProperties);