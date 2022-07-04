const pageContent = document.querySelector("#page-content");

export function createBrigadeiros() {
    pageContent.innerHTML = ``;
    const imgBrigadeiro = document.createElement('img');
    imgBrigadeiro.setAttribute('src', './assets/img/brigadeiro.jpg');
    imgBrigadeiro.setAttribute('width', '320px');
    imgBrigadeiro.setAttribute('alt', 'Brigadeiro de festa, feito com leite condensado e chocolate 50% cacau');
    const shopBtn = document.createElement('button');
    shopBtn.setAttribute('type', 'button');
    shopBtn.textContent = 'Peça agora!';
    pageContent.appendChild(imgBrigadeiro);
    pageContent.appendChild(shopBtn);
}