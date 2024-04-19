let span = document.querySelector('span');
let textWel = document.querySelector('.footer-p-wel');
let textCome = document.querySelector('.footer-h2-come');

function startSorteio() {
    const number1 = Math.ceil(document.querySelector('.input-number1').value)
    const number2 = Math.floor(document.querySelector('.input-number2').value)

    // const textSpan = document.getElementsByTagName('span')

    if (number1 > number2) {
        span.innerHTML = 'O PRIMEIRO NÚMERO É MAIOR QUE O SEGUNDO. POR FAVOR. VERIFIQUE OS NÚMEROs DIGITADOS!';
        span.style.color = 'red';
        textWel.innerHTML= '';
        textCome.innerHTML= '';
    } else {
        const result = Math.floor(Math.random() * (number2 - number1 + 1)) + number1;
        span.innerHTML = `O número sorteado <br> entre ${number1} e ${number2} <br> foi o número: ${result}`;
        span.style.color = 'blue';
        textWel.innerHTML= '';
        textCome.innerHTML= '';
    }
}