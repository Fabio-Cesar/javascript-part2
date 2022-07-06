const coin = document.querySelector('#coin-code')
const startDate = document.querySelector('#start-date')
const endDate = document.querySelector('#end-date')
const showBtn = document.querySelector('#show-results')
const tableSection = document.querySelector('#coin-table')

function showResults() {
    document.querySelector('body').style.cursor = 'wait'
    tableSection.innerHTML = ``
    const moeda = coin.value
    const stringStartDate = startDate.value.replace(/-/g, '')
    const dateStart = new Date(startDate.value)
    const timestampStartDate = dateStart.getTime()
    const stringEndDate = endDate.value.replace(/-/g, '')
    const dateEnd = new Date(endDate.value)
    const timestampEndDate = dateEnd.getTime()
    let timestampDiff = timestampEndDate - timestampStartDate
    const oneDay = 8.64 * (10 ** 7)
    try {
        const timeNow = Date.now() - (3600000 * 3)
        if (timestampEndDate < timestampStartDate) {
            throw new Error('Data final deve ser maior do que a data inicial!')
        }
        if (timestampStartDate > timeNow || timestampEndDate > timeNow) {
            throw new Error('Data inicial e final não podem ser maiores do que a data de hoje!')
        }
        fetch(`https://economia.awesomeapi.com.br/json/last/${moeda}-BRL`)
        .then(function(resp) {
            if (!resp.ok) {
                return new Error('Requisição falhou!')
            }
            if (resp.status === 404) {
                return new Error('Requisição não encontrada no servidor!')
            }
            return resp.json()
        })
        .then(function(data) {
            const priceDate = `Mais Recente`
            const timestamp = new Date(data[`${moeda}BRL`].timestamp * 1000)
            const stringDate = timestamp.toLocaleString()
            const highPrice = data[`${moeda}BRL`].high
            const lowPrice = data[`${moeda}BRL`].low
            const stringHighLow = `Max: ${highPrice} Min: ${lowPrice}`
            const price = data[`${moeda}BRL`].bid
            createTable()
            createTableRow(priceDate, stringDate, stringHighLow, price)
            for (i = timestampEndDate; i >= timestampStartDate; i -= oneDay) {
                const dateFromI = new Date(i)
                const yearUTC = `${dateFromI.getUTCFullYear()}`
                let monthUTC = `${dateFromI.getUTCMonth() + 1}`
                if (monthUTC.length === 1) {
                    monthUTC = `0${monthUTC}`;
                };
                let dateUTC = `${dateFromI.getUTCDate()}`
                if (dateUTC.length === 1) {
                    dateUTC = `0${dateUTC}`;
                };
                fetch(`https://economia.awesomeapi.com.br/json/daily/${moeda}-BRL/?start_date=${stringStartDate}&end_date=${yearUTC}${monthUTC}${dateUTC}`)
                .then(function(resp) {
                    if (!resp.ok) {
                        return new Error('Requisição falhou!')
                    }
                    if (resp.status === 404) {
                        return new Error('Requisição não encontrada no servidor!')
                    }
                    return resp.json()
                })
                .then(function(data) {
                    try {
                        const priceDate = `${dateUTC}/${monthUTC}/${yearUTC}`
                        const timestamp = new Date(data[0].timestamp * 1000)
                        const stringDate = timestamp.toLocaleString()
                        const highPrice = data[0].high
                        const lowPrice = data[0].low
                        const stringHighLow = `Max: ${highPrice} Min: ${lowPrice}`
                        const price = data[0].bid
                        createTableRow(priceDate, stringDate, stringHighLow, price)
                    } catch (error) {
                        console.error(error)
                    } finally {
                        timestampDiff -= oneDay
                        if (timestampDiff === 0) {
                            document.querySelector('body').style.cursor = 'default'
                        }
                    }
                })
                .catch((error) => console.log(error))
                .finally(function() {
                    timestampDiff -= oneDay
                    if (timestampDiff === 0) {
                        document.querySelector('body').style.cursor = 'default'
                    }
                })
            }
        })
        .catch((error) => console.log(error))
    } catch (error) {
        console.error(error)
    }
}

function createTable() {
    const tableCreated = document.createElement('table')
    tableCreated.setAttribute('id','info-table')
    tableSection.appendChild(tableCreated)
    const tableRow1 = document.createElement('tr')
    const tableHeader1 = document.createElement('th')
    tableHeader1.textContent = 'Cotação'
    const tableHeader2 = document.createElement('th')
    tableHeader2.textContent = 'Data e Hora das Informações'
    const tableHeader3 = document.createElement('th')
    tableHeader3.textContent = 'Valores Mínimos e Máximos do Dia'
    const tableHeader4 = document.createElement('th')
    tableHeader4.textContent = 'Fechamento do Dia'
    tableRow1.appendChild(tableHeader1)
    tableRow1.appendChild(tableHeader2)
    tableRow1.appendChild(tableHeader3)
    tableRow1.appendChild(tableHeader4)
    tableCreated.appendChild(tableRow1)
}

function createTableRow(info1, info2, info3, info4) {
    const tableCreated = document.querySelector('#info-table')
    const tableRow = document.createElement('tr')
    const tableData1 = document.createElement('td')
    tableData1.textContent = `${info1}`
    const tableData2 = document.createElement('td')
    tableData2.textContent = `${info2}`
    const tableData3 = document.createElement('td')
    tableData3.textContent = `${info3}`
    const tableData4 = document.createElement('td')
    tableData4.textContent = `${info4}`
    tableRow.appendChild(tableData1)
    tableRow.appendChild(tableData2)
    tableRow.appendChild(tableData3)
    tableRow.appendChild(tableData4)
    tableCreated.appendChild(tableRow)
}

showBtn.addEventListener('click', showResults)