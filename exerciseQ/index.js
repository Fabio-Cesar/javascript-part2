const productName = document.getElementById("product-name");
const productDescription = document.getElementById("product-description");
const productPrice = document.getElementById("product-price");
const addBtn = document.getElementById("add-product");
const listBtn = document.getElementById("list-products");
const statusMessage = document.getElementById("status-message");
const productsTable = document.getElementById("products-table");
const productsTableBody = document.getElementById("products-table-body");
const productsFilter = document.getElementById("filter-products");
const infoSection = document.getElementById("info-section");
const sortName = document.getElementById('name-sort');
const sortValue = document.getElementById('value-sort');
let productID = 1;
let productList = [];

function addProduct() {
    const nameValue = productName.value;
    const descriptionValue = productDescription.value;
    const priceValue = productPrice.value.replace(',','.');
    try {
        validacao(nameValue, descriptionValue, priceValue);    
        const priceFloatValue = parseFloat(priceValue, 10);
        const includeDate = Date.now();
        const productObject = {
            "id": productID,
            "name": nameValue,
            "description": descriptionValue,
            "value": priceFloatValue,
            "includedIn": includeDate
        };
        productList.push(productObject);
        productID++;
        statusMessage.innerHTML = `Produto ${nameValue} incluído com sucesso!`;
        productName.value = "";
        productDescription.value = "";
        productPrice.value = "";        
    } catch(error) {
        statusMessage.innerHTML = `<p>Falha no cadastro do produto! Motivo: ${error.message}</p>`;
    }
}

function validacao(name, description, price) {
    const floatPrice = parseFloat(price, 10);
    if (name === "") {
        throw new Error("Nome do produto vazio!")
    };
    if (description === "") {
        throw new Error("Descrição do produto vazia!");
    };
    if (isNaN(floatPrice)) {
        throw new Error("Valor do produto não é um número!")
    }
    else if (floatPrice != price) {
        throw new Error("Valor do produto não deve possuir letras após os números!");
    };
    if (floatPrice.toFixed(2) != floatPrice) {
        throw new Error("Valor do produto deve conter no máximo 2 casas decimais!");
    };
    if (floatPrice < 0) {
        throw new Error("Valor do produto não pode ser negativo!");
    };
}

function listProducts(list) {
    try {
        productsTable.style.display = "none";
        productsTableBody.innerHTML = "";
        for (product of list) {
            const eachProduct = product;
            const tableProductID = product.id;
            const tableRow = document.createElement("tr");
            tableRow.setAttribute(`id`,`${tableProductID}`);
            const tableProduct = document.createElement("td");
            tableProduct.textContent = `${product.name}`
            tableProduct.addEventListener('click', function() { productsInfo(eachProduct) });
            tableRow.appendChild(tableProduct);
            const tableValue = document.createElement("td");
            tableValue.textContent = `R$ ${product.value.toFixed(2)}`;
            tableRow.appendChild(tableValue);
            const tableEdit = document.createElement("td");
            const editBtn = document.createElement("button");
            editBtn.setAttribute('class', 'icon-button edit-button');
            editBtn.innerHTML = `<span class="material-icons">edit</span>`;
            editBtn.addEventListener('click', function() { editProduct(tableProductID) });
            tableEdit.appendChild(editBtn);
            tableRow.appendChild(tableEdit);
            const tableDelete = document.createElement("td");
            const deleteBtn = document.createElement("button");
            deleteBtn.setAttribute('class', 'icon-button delete-button');
            deleteBtn.innerHTML = `<span class="material-icons">delete</span>`;
            deleteBtn.addEventListener('click', function() { deleteProduct(tableProductID) });
            tableDelete.appendChild(deleteBtn);
            tableRow.appendChild(tableDelete);
            productsTableBody.appendChild(tableRow);
        }
        productsFilter.style.display = "block";
        productsTable.style.display = "block";
        infoSection.style.display = "none";
    } catch(error) {
        statusMessage.innerHTML = `<p>Falha na criação da lista! Motivo: ${error.message}</p>`;
    }
}

function editProduct(searchID) {
    const editRow = document.getElementById(`${searchID}`);
    const newName = document.createElement('td');
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'edit-name');
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'edit-name');
    nameLabel.textContent = 'Nome:';
    const descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('id', 'edit-description');
    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'edit-description');
    descriptionLabel.textContent = 'Descrição:';
    newName.appendChild(nameLabel);
    newName.appendChild(nameInput);
    newName.appendChild(descriptionLabel);
    newName.appendChild(descriptionInput);
    editRow.replaceChild(newName, editRow.childNodes[0]);
    const newValue = document.createElement('td');
    const valueInput = document.createElement('input');
    valueInput.setAttribute('type', 'text');
    valueInput.setAttribute('id', 'edit-value');
    newValue.appendChild(valueInput);
    editRow.replaceChild(newValue, editRow.childNodes[1]);
    const newBtn = document.createElement('td');
    const doneBtn = document.createElement('button');
    doneBtn.setAttribute('class', 'icon-button done-button');
    doneBtn.innerHTML = `<span class="material-icons">done</span>`;
    doneBtn.addEventListener('click', function() { saveEdit(searchID) });
    newBtn.appendChild(doneBtn);
    editRow.replaceChild(newBtn, editRow.childNodes[2]);
    for (product of productList) {
        if ((product.id) === searchID) {
            nameInput.value = product.name;
            descriptionInput.value = product.description;
            valueInput.value = product.value;
        }
    }
}

function saveEdit(searchID) {
    const newName = document.getElementById('edit-name').value;
    const newDescription = document.getElementById('edit-description').value;
    const newValue = document.getElementById('edit-value').value.replace(',','.');
    try {
        validacao(newName, newDescription, newValue);
        const newFloatValue = parseFloat(newValue, 10);
        for (product of productList) {
            if ((product.id) === searchID) {
                product.name = newName;
                product.description = newDescription;
                product.value = newFloatValue;
            }
        }
        statusMessage.innerHTML = `Produto ${newName} editado com sucesso!`;
        listProducts(productList);
    } catch(error) {
        statusMessage.innerHTML = `<p>Falha na edição do produto! Motivo: ${error.message}</p>`;
    }
}

function deleteProduct(searchID) {
    for (index in productList) {
        if (productList[index].id === searchID) {
            productList.splice(index,1)
        }
    }
    listProducts(productList);
}

function filterProduct() {
    const filterList = productList.filter(hasString);
    if (filterList.length === 0) {
        statusMessage.innerHTML = `Não foram encontrados produtos conforme chave de pesquisa!`;
    } else {
        statusMessage.innerHTML = `Foram encontrados ${filterList.length} produtos!`;
    };
    listProducts(filterList);
}

function hasString(product) {
    if (product.name.toLowerCase().includes(productsFilter.value.toLowerCase()) || product.description.toLowerCase().includes(productsFilter.value.toLowerCase())) {
        return true
    }
    else {
        return false
    }
}

function sortByName() {
    const organizedList = productList.sort(sortString);
    listProducts(organizedList);
}

function sortString(productA, productB) {
    if (productA.name.toLowerCase().replace(/[àáãâä]/g, 'a').replace(/[èéêë]/g, 'e').replace(/[ìíîï]/g, 'i').replace(/[òóõôö]/g, 'o').replace(/[ùúüû]/g, 'u').replace(/[ç]/g, 'c') < productB.name.toLowerCase().replace(/[àáãâä]/g, 'a').replace(/[èéêë]/g, 'e').replace(/[ìíîï]/g, 'i').replace(/[òóõôö]/g, 'o').replace(/[ùúüû]/g, 'u').replace(/[ç]/g, 'c')) {
        return -1;
    }
    else if (productA.name.toLowerCase().replace(/[àáãâä]/g, 'a').replace(/[èéêë]/g, 'e').replace(/[ìíîï]/g, 'i').replace(/[òóõôö]/g, 'o').replace(/[ùúüû]/g, 'u').replace(/[ç]/g, 'c') > productB.name.toLowerCase().replace(/[àáãâä]/g, 'a').replace(/[èéêë]/g, 'e').replace(/[ìíîï]/g, 'i').replace(/[òóõôö]/g, 'o').replace(/[ùúüû]/g, 'u').replace(/[ç]/g, 'c')) {
        return 1;
    }
    else {
        return 0;
    }
}

function sortByValue() {
    const organizedList = productList.sort(sortNumber);
    listProducts(organizedList);
}

function sortNumber(productA, productB) {
    return productA.value - productB.value;
}

function productsInfo(product) {
    if (infoSection.hasChildNodes()) {
        const infoID = document.createElement('p');
        infoID.textContent = `ID do produto: ${product.id}`;
        infoSection.replaceChild(infoID, infoSection.childNodes[0]);
        const infoName = document.createElement('p');
        infoName.textContent = `Nome do produto: ${product.name}`;
        infoSection.replaceChild(infoName, infoSection.childNodes[1]);
        const infoDescription = document.createElement('p');
        infoDescription.textContent = `Descrição do produto: ${product.description}`;
        infoSection.replaceChild(infoDescription, infoSection.childNodes[2]);
        const infoValue = document.createElement('p');
        infoValue.textContent = `Valor do produto: ${product.value}`;
        infoSection.replaceChild(infoValue, infoSection.childNodes[3]);
        const infoDate = document.createElement('p');
        const dateIncluded = new Date(product.includedIn);
        const year = `${dateIncluded.getFullYear()}`;
        let month = `${dateIncluded.getMonth() + 1}`;
        if (month.length === 1) {
            month = `0${month}`;
        };
        let day = `${dateIncluded.getDate()}`;
        if (day.length === 1) {
            day = `0${day}`;
        };
        let hour = `${dateIncluded.getHours()}`;
        if (hour.length === 1) {
            hour = `0${hour}`;
        };
        let minute = `${dateIncluded.getMinutes()}`;
        if (minute.length === 1) {
            minute = `0${minute}`;
        };
        let second = `${dateIncluded.getSeconds()}`;
        if (second.length === 1) {
            second = `0${second}`;
        };
        infoDate.textContent = `Data de inclusão do produto: ${day}/${month}/${year} - ${hour}:${minute}:${second}`;
        infoSection.replaceChild(infoDate, infoSection.childNodes[4]);
    } else {
        const infoID = document.createElement('p');
        infoID.textContent = `ID do produto: ${product.id}`;
        infoSection.appendChild(infoID);
        const infoName = document.createElement('p');
        infoName.textContent = `Nome do produto: ${product.name}`;
        infoSection.appendChild(infoName);
        const infoDescription = document.createElement('p');
        infoDescription.textContent = `Descrição do produto: ${product.description}`;
        infoSection.appendChild(infoDescription);
        const infoValue = document.createElement('p');
        infoValue.textContent = `Valor do produto: ${product.value}`;
        infoSection.appendChild(infoValue);
        const infoDate = document.createElement('p');
        const dateIncluded = new Date(product.includedIn);
        const year = `${dateIncluded.getFullYear()}`;
        let month = `${dateIncluded.getMonth() + 1}`;
        if (month.length === 1) {
            month = `0${month}`;
        };
        let day = `${dateIncluded.getDate()}`;
        if (day.length === 1) {
            day = `0${day}`;
        };
        let hour = `${dateIncluded.getHours()}`;
        if (hour.length === 1) {
            hour = `0${hour}`;
        };
        let minute = `${dateIncluded.getMinutes()}`;
        if (minute.length === 1) {
            minute = `0${minute}`;
        };
        let second = `${dateIncluded.getSeconds()}`;
        if (second.length === 1) {
            second = `0${second}`;
        };
        infoDate.textContent = `Data de inclusão do produto: ${day}/${month}/${year} - ${hour}:${minute}:${second}`;
        infoSection.appendChild(infoDate);
    }
    infoSection.style.display = 'block';
}

addBtn.addEventListener('click', addProduct);
listBtn.addEventListener('click', () => { listProducts(productList) });
productsFilter.addEventListener('keyup', filterProduct);
sortName.addEventListener('click', sortByName);
sortValue.addEventListener('click', sortByValue);