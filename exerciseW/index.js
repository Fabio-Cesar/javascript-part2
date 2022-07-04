const pageContent = document.querySelector("#page-content");
const routeLinks = document.querySelectorAll(".route");

import * as brigadeiros from './modules/brigadeiros.js';
import * as cupcakes from './modules/cupcakes.js';
import * as doces from './modules/doces.js';

routeLinks.forEach(addEvent);

function addEvent(target) {
    target.addEventListener('click', (event) => {
        event.preventDefault();
        const pathFix = target.href.split('/');
        changePath(pathFix[pathFix.length - 1]);
        const template = window.location.pathname;
        const onStateChange = new CustomEvent('stateChange', { detail: { path: template } });
        window.dispatchEvent(onStateChange);
    });
}

function changePath(pathName) {
    if (pathName == "home") {
        history.pushState({pathName}, '', `./`);
    }
    else {
        history.pushState({pathName}, '', `./${pathName}`);
    }
}

window.addEventListener('stateChange', function(e) { 
    switch (e.detail.path) {
        case '/exerciseW/':
            pageContent.innerHTML = ``;
            break;
        case '/exerciseW/brigadeiros':
            brigadeiros.createBrigadeiros();
            break;
        case '/exerciseW/cupcakes':
            cupcakes.createCupcakes();
            break;
        case '/exerciseW/doces':
            doces.createDoces();
            break;
        default:
            pageContent.textContent = `Página não existe!`;
    }
})

window.addEventListener('popstate', function() {
    const template = window.location.pathname;
    const onStateChange = new CustomEvent('stateChange', { detail: { path: template } });
    window.dispatchEvent(onStateChange);
})