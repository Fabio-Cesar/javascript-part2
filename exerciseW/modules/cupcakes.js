const pageContent = document.querySelector("#page-content");

export function createCupcakes() {
    pageContent.innerHTML = ``;
    const imgCupcakes = document.createElement('img');
    imgCupcakes.setAttribute('src', './assets/img/cupcake.webp');
    imgCupcakes.setAttribute('width', '320px');
    imgCupcakes.setAttribute('alt', 'Cupcakes para festa, sabores variados a escolha do cliente');
    const shopBtn = document.createElement('button');
    shopBtn.setAttribute('type', 'button');
    shopBtn.textContent = 'Peça agora!';
    pageContent.appendChild(imgCupcakes);
    pageContent.appendChild(shopBtn);
}