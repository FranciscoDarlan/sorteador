
function startSorteio() {
    const number1 = Math.ceil(document.querySelector('.input-number1').value)
    const number2 = Math.floor(document.querySelector('.input-number2').value)

    const textSpan = document.getElementsByTagName('span')


    const result = Math.floor(Math.random() * (number2 - number1 + 1)) + number1;

    alert(result)

}