const button = document.getElementById('btn')

button.onclick = (e) => {
    e.preventDefault()
    waterCalculate()
}

function waterCalculate() {
    const peso = document.forms['mainForm']['peso'].value
    const res = peso * 35
    showMessage(res)
}

function showMessage(text) {
    const response = document.getElementById('result')
    const message = `<p>No seu caso, a quantidade necessária é de ${text} litros por dia</p>`

    response.innerHTML = message
}