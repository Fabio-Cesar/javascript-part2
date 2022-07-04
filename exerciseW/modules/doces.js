const pageContent = document.querySelector("#page-content");

export function createDoces() {
    pageContent.innerHTML = ``;
    const imgDoces = document.createElement('img');
    imgDoces.setAttribute('src', './assets/img/doces.jpg');
    imgDoces.setAttribute('width', '220px');
    imgDoces.setAttribute('alt', 'Doces, balas e pirulitos organizados em uma mesa para festa');
    const shopBtn = document.createElement('button');
    shopBtn.setAttribute('type', 'button');
    shopBtn.textContent = 'Peça agora!';
    pageContent.appendChild(imgDoces);
    pageContent.appendChild(shopBtn);
}