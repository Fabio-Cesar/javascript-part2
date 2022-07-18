import { cepInput } from "../index.js";

export function showCEPInfo() {
    document.querySelector('body').style.cursor = 'wait'
    fetch(`https://cep.awesomeapi.com.br/json/${cepInput.value.replace('-', '')}`)
    .then(function(resp) {
        if (resp.status === 400) {
            return Promise.reject(`CEP inválido!`)
        }
        if (resp.status === 404) {
            return Promise.reject(`CEP não encontrado!`)
        }
        if (!resp.ok) {
            return Promise.reject(`Requisição falhou!`)
        }
        return resp.json()
    })
    .then(function(data) {
        const cepInfoSection = document.createElement('section');
        const listCepInfo = document.createElement('ul');
        const endereco = document.createElement('li');
        endereco.textContent = `Endereço: ${data.address}`
        const bairro = document.createElement('li');
        bairro.textContent = `Bairro: ${data.district}`
        const cidade = document.createElement('li');
        cidade.textContent = `Cidade: ${data.city}`;
        const estado = document.createElement('li');
        estado.textContent = `Estado: ${data.state}`
        const lat = document.createElement('li');
        lat.textContent = `Latitude: ${data.lat}`;
        const lng = document.createElement('li');
        lng.textContent = `Longitude: ${data.lng}`;
        const mapBtn = document.createElement('button');
        mapBtn.addEventListener('click', function() { showMap(cepInfoSection, data.lat, data.lng)});
        mapBtn.textContent = `Exibir mapa`;
        listCepInfo.appendChild(endereco);
        listCepInfo.appendChild(bairro);
        listCepInfo.appendChild(cidade);
        listCepInfo.appendChild(estado);
        listCepInfo.appendChild(lat);
        listCepInfo.appendChild(lng);
        listCepInfo.appendChild(mapBtn);
        cepInfoSection.appendChild(listCepInfo);
        document.querySelector('body').appendChild(cepInfoSection);
    })
    .catch((error) => console.log(error))
    .finally(() => document.querySelector('body').style.cursor = 'default')
}

function showMap(cepInfoSection, latitude, longitude) {
    // cepInfoSection.innerHTML += `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14671.730106107272!2d${longitude}5!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1658026481909!5m2!1spt-BR!2sbr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    cepInfoSection.innerHTML += `<iframe src="https://maps.google.com.br/maps?q=${latitude}${longitude}&output=embed&z=16" width="400" height="300"></iframe>`
}