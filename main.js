const button = document.getElementById('btn')

button.onclick = (e) => {
    e.preventDefault()
    waterCalculate()
}

function waterCalculate() {
    const peso = document.forms['mainForm']['peso'].value
    const res = peso * 35.0
    showMessage(Math.fround(res))
}

function showMessage(text) {
    const response = document.getElementById('result')
    response.innerHTML = `<p>No seu caso, a quantidade necessária é de ${text}ml durante o dia</p>`
}   