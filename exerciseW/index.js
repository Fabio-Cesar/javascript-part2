const pageContent = document.querySelector("#page-content");
let routeLinks = document.querySelectorAll(".route");

import * as brigadeiros from './modules/brigadeiros.js';
import * as cupcakes from './modules/cupcakes.js';
import * as doces from './modules/doces.js';

routeLinks.forEach(addEvent);

function addEvent(target) {
    target.addEventListener('click', (event) => {
        event.preventDefault();
        const routeFix = target.href.split('/');
        changeRoute(routeFix[routeFix.length - 1]);
        const path = window.location.pathname;
        const onStateChange = new CustomEvent('stateChange', { detail: { route: path } });
        window.dispatchEvent(onStateChange);
    });
}

function changeRoute(pathName) {
    if (pathName == "home") {
        history.pushState({pathName}, '', `./`);
    }
    else {
        history.pushState({pathName}, '', `./${pathName}`);
    }
}

window.addEventListener('stateChange', function(e) { 
    switch (e.detail.route) {
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
    }
})

window.addEventListener('popstate', function(e) {
    const path = window.location.pathname;
    const onStateChange = new CustomEvent('stateChange', { detail: { route: path } });
    window.dispatchEvent(onStateChange);
})