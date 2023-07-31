let calculo = {
    numero1: 0,
    numero2: 0,
    operacion: '',
    resultado: 0
}

const isNumber = (numero) => {
    if (Number(numero) === numero) {
        return true;
    } else {
        return false;
    }
}

const numero1 = (numero, operacion) => {
    calculo.numero1 = numero;
    calculo.operacion = operacion;
    visor.textContent='';
    const divOperacion = document.querySelector("#operacion")
    divOperacion.textContent = `${calculo.numero1} ${calculo.operacion}`;
    console.log(calculo);
}

const numero2 = (numero) => {
    calculo.numero2 = numero;
    switch (calculo.operacion) {
        case '+':
            calculo.resultado = calculo.numero1 + calculo.numero2;
            break
        case '-':
            calculo.resultado = calculo.numero1 - calculo.numero2;
            break
        case '*':
            calculo.resultado = calculo.numero1 * calculo.numero2;
            break;
        case '/':
            calculo.resultado = calculo.numero1 / calculo.numero2;
            break
    }
    const divOperacion = document.querySelector("#operacion")
    divOperacion.textContent = divOperacion.textContent + ` ${calculo.numero2}`;
    const visor = document.querySelector('#visor');
    visor.textContent = calculo.resultado;
}

const handleKeyPress = (event) => {
    console.log(event.key);
    if (isNumber(Number(event.key)) && event.key!=' ') {
        const visor = document.querySelector('#visor');
        if (visor.textContent.length<=6) {
            visor.textContent=visor.textContent + event.key;
        }
    } else {
        switch (event.key) {
            case '+':
            case '-':
            case '/':
            case '*':
                    if (calculo.operacion=='') {
                        numero1(Number(visor.textContent), event.key);
                        visor.textContent='';
                    }
                break;
            case '=':
            case 'Enter':
                if (calculo.operacion!=='') {
                    numero2(Number(visor.textContent),'+');
                }
            default:
                break;
        }
        console.log(false);
    }
}

const handleBackspace =(event) => {
    if (event.key==='Backspace') {
        calculo.numero1=0;
        calculo.numero2=0;
        calculo.operacion = '';
        calculo.resultado = 0;
        const visor = document.querySelector('#visor');
        visor.textContent = '';
        const operacion = document.querySelector('#operacion');
        operacion.textContent = '';
    }
}

document.addEventListener('keypress', handleKeyPress);
document.addEventListener('keydown', handleBackspace);