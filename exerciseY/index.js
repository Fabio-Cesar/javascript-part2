import { verificarcep, cephifen, backspacecep } from "./modules/cep.js";
import { showCEPInfo } from "./modules/cepAPI.js";

export const cepInput = document.querySelector('#cep');
export const cepSearch = document.querySelector('#search-btn');

cepInput.addEventListener('input', verificarcep);
cepInput.addEventListener('keyup', cephifen);
cepInput.addEventListener('keydown', backspacecep);
cepSearch.addEventListener('click', showCEPInfo);