const pageContent = document.querySelector("#page-content");
const routeLinks = document.querySelectorAll(".route");
const routes = {
    'home': 0,
    'brigadeiros': 1,
    'cupcakes': 2,
    'doces': 3
}

import * as brigadeiros from './modules/brigadeiros.js';
import * as cupcakes from './modules/cupcakes.js';
import * as doces from './modules/doces.js';

routeLinks.forEach(addEvent);

function addEvent(target) {
    target.addEventListener('click', (event) => {
        event.preventDefault();
        const pathFix = target.href.split('/');
        changePath(pathFix[pathFix.length - 1]);
    });
}

function changePath(pathName) {
    if (pathName == "home") {
        history.pushState({pathName}, '', `./`);
        const onStateChange = new CustomEvent('stateChange', { detail: { path: routes[pathName] } });
        window.dispatchEvent(onStateChange);
    }
    else {
        history.pushState({pathName}, '', `./${pathName}`);
        const onStateChange = new CustomEvent('stateChange', { detail: { path: routes[pathName] } });
        window.dispatchEvent(onStateChange);
    }
}

window.addEventListener('stateChange', function(e) { 
    switch (e.detail.path) {
        case 0:
            pageContent.innerHTML = `<p>Página Inicial</p>`;
            break;
        case 1:
            brigadeiros.createBrigadeiros();
            break;
        case 2:
            cupcakes.createCupcakes();
            break;
        case 3:
            doces.createDoces();
            break;
        default:
            pageContent.textContent = `Página não existe!`;
    }
})

window.addEventListener('load', function() {
    const pathLocation = location.pathname.split('/');
    const template = pathLocation[pathLocation.length - 1];
    const onStateChange = new CustomEvent('stateChange', { detail: { path: routes[template] } });
    window.dispatchEvent(onStateChange);
})

window.addEventListener('popstate', function() {
    const pathLocation = location.pathname.split('/');
    const template = pathLocation[pathLocation.length - 1];
    const onStateChange = new CustomEvent('stateChange', { detail: { path: routes[template] } });
    window.dispatchEvent(onStateChange);
})