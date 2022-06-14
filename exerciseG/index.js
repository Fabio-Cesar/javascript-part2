const carSelector = document.querySelector('#list-of-cars');

function showDetails() {
    const car = carSelector.value;
    let result = '';
    switch (car) {
        case 'car1':
            result = '<img src="./assets/images/renault-sandero.jpg" width="150px" /><p>Modelo: Renault Sandero R.S. 2.0</p><p>Fabricante: Renault Sport</p><p>Faixa de Preço: R$99.990</p><p>Velocidade Máxima: 202km/h</p><p>Tempo de 0km/h a 100km/h: 8s</p>';
            break;
        case 'car2':
            result = '<img src="./assets/images/peugeot-2008.jpg" width="150px" /><p>Modelo: Peugeot 2008 Griffe THP 1.6 Turbo</p><p>Fabricante: Grupo PSA</p><p>Faixa de Preço: R$125.990</p><p>Velocidade Máxima: 209km/h</p><p>Tempo de 0km/h a 100km/h: 8.8s</p>';
            break;
        case 'car3':
            result = '<img src="./assets/images/citroen-cactus.webp" width="150px" /><p>Modelo: Citroën C4 Cactus Shine THP 1.6 Turbo</p><p>Fabricante: Grupo PSA</p><p>Faixa de Preço: R$135.990</p><p>Velocidade Máxima: 212km/h</p><p>Tempo de 0km/h a 100km/h: 7.3s</p>';
            break;
        case 'car4':
            result = '<img src="./assets/images/jetta-gli.jpg" width="150px" /><p>Modelo: Volkswagen Jetta GLI 2020</p><p>Fabricante: Volkswagen</p><p>Faixa de Preço: R$205.590</p><p>Velocidade Máxima: 250km/h</p><p>Tempo de 0km/h a 100km/h: 6.8s</p>';
            break;
        default:
            result = '';
    }
    document.querySelector('#result').innerHTML = result;
}

carSelector.addEventListener('change', showDetails);