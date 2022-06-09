function showIMG() {
    const product = document.querySelector('#list-of-products').value;
    let result = '';
    switch (product) {
        case 'product1':
            result = '<img src="./espelho.webp" width="150px" />';
            break;
        case 'product2':
            result = '<img src="./secador.jpg" width="150px" />';
            break;
        case 'product3':
            result = '<img src="./pente.webp" width="150px" />';
            break;
        case 'product4':
            result = '<img src="./shampoo.jpg" width="150px" />';
            break;
        case 'product5':
            result = '<img src="./condicionador.webp" width="150px" />';
    }
    document.querySelector('#result').innerHTML = result;
}

document.querySelector('#show').addEventListener('click', showIMG);