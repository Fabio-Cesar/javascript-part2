const productName = document.getElementById("product-name");
const productDescription = document.getElementById("product-description");
const productPrice = document.getElementById("product-price");
const addBtn = document.getElementById("add-product");
const listBtn = document.getElementById("list-products");
const statusMessage = document.getElementById("status-message");
const productsTable = document.getElementById("products-table");
const infoSection = document.getElementById("info-section");
let productID = 0;
let productList = [];

function addProduct() {
    const nameValue = productName.value;
    const descriptionValue = productDescription.value;
    const priceValue = parseFloat(productPrice.value.replace(',','.'), 10);
    try {
        if (nameValue === "") {
            throw new Error("Nome do produto vazio!")
        }
        if (descriptionValue === "") {
            throw new Error("Descrição do produto vazia!");
        }
        if (isNaN(priceValue)) {
            throw new Error("Valor do produto não é um número!")
        }
        else if (priceValue != productPrice.value.replace(',','.')) {
            throw new Error("Valor do produto não deve possuir letras após os números!");
        }
        if (priceValue.toFixed(2) != priceValue) {
            throw new Error("Valor do produto deve conter no máximo 2 casas decimais!");
        }
        const priceValueDecimal = priceValue.toFixed(2);
        const includeDate = Date.now();
        const productObject = {
            "id": productID,
            "name": nameValue,
            "description": descriptionValue,
            "value": priceValueDecimal,
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

function listProducts() {
    try {
        productsTable.style.display = "none";
        if (productList.length === 0) {
            throw new Error(`Lista de produtos vazia! Inclua pelo menos um produto`);
        }
        productsTable.innerHTML = `<tr><th>Produto</th><th>Valor</th><th>Editar</th><th>Apagar</th></tr>`;
        let i = 0;
        while (i < productList.length) {
            const tableProductID = productList[i].id;
            const tableRow = document.createElement("tr");
            tableRow.setAttribute(`id`,`${tableProductID}`);
            const tableProduct = document.createElement("td");
            tableProduct.textContent = `[ID: ${tableProductID}] ${productList[i].name}`
            tableProduct.addEventListener('click', function() { productsInfo(tableProductID) });
            tableRow.appendChild(tableProduct);
            const tableValue = document.createElement("td");
            tableValue.textContent = `${productList[i].value}`;
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
            productsTable.appendChild(tableRow);
            i++;
        }
        productsTable.style.display = "block";
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
    let i = 0;
    while (i < productList.length) {
        if ((productList[i].id) === searchID) {
            nameInput.value = productList[i].name;
        }
        i++
    }
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'edit-name');
    nameLabel.textContent = 'Nome:';
    const descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('id', 'edit-description');
    i = 0;
    while (i < productList.length) {
        if ((productList[i].id) === searchID) {
            descriptionInput.value = productList[i].description;
        }
        i++
    }
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
    i = 0;
    while (i < productList.length) {
        if ((productList[i].id) === searchID) {
            valueInput.value = productList[i].value;
        }
        i++
    }
    valueInput.setAttribute('type', 'text');
    valueInput.setAttribute('id', 'edit-value');
    const valueLabel = document.createElement('label');
    valueLabel.setAttribute('for', 'edit-value');
    valueLabel.textContent = 'Valor:';
    newValue.appendChild(valueLabel);
    newValue.appendChild(valueInput);
    editRow.replaceChild(newValue, editRow.childNodes[1]);
    const newBtn = document.createElement('td');
    const doneBtn = document.createElement('button');
    doneBtn.setAttribute('class', 'icon-button done-button');
    doneBtn.innerHTML = `<span class="material-icons">done</span>`;
    doneBtn.addEventListener('click', function() { saveEdit(searchID) });
    newBtn.appendChild(doneBtn);
    editRow.replaceChild(newBtn, editRow.childNodes[2]);
}

function saveEdit(searchID) {
    const newName = document.getElementById('edit-name').value;
    const newDescription = document.getElementById('edit-description').value;
    const newValue = parseFloat(document.getElementById('edit-value').value.replace(',','.'), 10);
    try {
        if (newName === "") {
            throw new Error("Nome do produto vazio!")
        }
        if (newDescription === "") {
            throw new Error("Descrição do produto vazia!");
        }
        if (isNaN(newValue)) {
            throw new Error("Valor do produto não é um número!")
        }
        else if (newValue != document.getElementById('edit-value').value.replace(',','.')) {
            throw new Error("Valor do produto não deve possuir letras após os números!");
        }
        if (newValue.toFixed(2) != newValue) {
            throw new Error("Valor do produto deve conter no máximo 2 casas decimais!");
        }
        const newValueDecimal = newValue.toFixed(2); 
        let i = 0;
        while (i < productList.length) {
            if ((productList[i].id) === searchID) {
                productList[i].name = newName;
                productList[i].description = newDescription;
                productList[i].value = newValueDecimal;
            }
            i++;
        }
        statusMessage.innerHTML = `Produto ${newName} editado com sucesso!`;
        listProducts();
    } catch(error) {
        statusMessage.innerHTML = `<p>Falha na edição do produto! Motivo: ${error.message}</p>`;
    }
}

function deleteProduct(searchID) {
    const newProductList = [];
    let i = 0;
    while (i < productList.length) {
        if ((productList[i].id) !== searchID) {
            newProductList.push(productList[i]);
        }
        i++;
    }
    productList = newProductList;
    listProducts();
}

function productsInfo(searchID) {
    let i = 0;
    while (i < productList.length) {
        if (productList[i].id === searchID) {
            position = i;
        }
        i++;
    }
    if (infoSection.hasChildNodes()) {
        const infoID = document.createElement('p');
        infoID.textContent = `ID do produto: ${productList[position].id}`;
        infoSection.replaceChild(infoID, infoSection.childNodes[0]);
        const infoName = document.createElement('p');
        infoName.textContent = `Nome do produto: ${productList[position].name}`;
        infoSection.replaceChild(infoName, infoSection.childNodes[1]);
        const infoDescription = document.createElement('p');
        infoDescription.textContent = `Descrição do produto: ${productList[position].description}`;
        infoSection.replaceChild(infoDescription, infoSection.childNodes[2]);
        const infoValue = document.createElement('p');
        infoValue.textContent = `Valor do produto: ${productList[position].value}`;
        infoSection.replaceChild(infoValue, infoSection.childNodes[3]);
        const infoDate = document.createElement('p');
        const dateIncluded = new Date(productList[position].includedIn);
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
        infoID.textContent = `ID do produto: ${productList[position].id}`;
        infoSection.appendChild(infoID);
        const infoName = document.createElement('p');
        infoName.textContent = `Nome do produto: ${productList[position].name}`;
        infoSection.appendChild(infoName);
        const infoDescription = document.createElement('p');
        infoDescription.textContent = `Descrição do produto: ${productList[position].description}`;
        infoSection.appendChild(infoDescription);
        const infoValue = document.createElement('p');
        infoValue.textContent = `Valor do produto: ${productList[position].value}`;
        infoSection.appendChild(infoValue);
        const infoDate = document.createElement('p');
        const dateIncluded = new Date(productList[position].includedIn);
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
}

addBtn.addEventListener('click', addProduct);
listBtn.addEventListener('click', listProducts);