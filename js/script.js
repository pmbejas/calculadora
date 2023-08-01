let calculo = {
    numero1: 1,
    numero2: null,
    operacion: '',
    resultado: null,
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
        case '%':
            calculo.resultado = calculo.numero1 % calculo.numero2;
            break
    }
    const divOperacion = document.querySelector("#operacion")
    divOperacion.textContent = divOperacion.textContent + ` ${calculo.numero2}`;
    const visor = document.querySelector('#visor');
    visor.textContent = calculo.resultado;
}

const handleKeyPress = (event) => {
    const visor = document.querySelector('#visor');
    if (isNumber(Number(event.key)) && event.key!=' ' && calculo.numero2===null) {
        if (visor.textContent.length<=10) {
            visor.textContent=visor.textContent + event.key;
        }
    } else {
        switch (event.key) {
            case '+':
            case '-':
            case '/':
            case '*':
            case '%':
                    if (calculo.operacion==='') {
                        numero1(Number(visor.textContent), event.key);
                        visor.textContent='';
                    } else {
                        if (calculo.numero2!==null) {
                            numero1(Number(visor.textContent), event.key);
                            visor.textContent='';
                            calculo.numero2= null;
                            calculo.resultado=null;
                        }
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
    }
}

const handleKeyDown = (event) => {
    if (event.key==='Escape') {
        calculo.numero1=0;
        calculo.numero2=null;
        calculo.operacion = '';
        calculo.resultado = null;
        const visor = document.querySelector('#visor');
        visor.textContent = '';
        const operacion = document.querySelector('#operacion');
        operacion.textContent = '';
    }
    if (event.key==='Backspace') {
        const visor = document.querySelector('#visor');
        if (visor.textContent.length>0 && calculo.resultado===null) {
            visor.textContent = visor.textContent.slice(0, -1);
        }
    }
}

const handleClick = (event) => {
    let tecla = null;
    let teclaDown = null;
    switch (event.target.id) {
        case 'boton0':
            tecla = '0';
            break;
        case 'boton1':
            tecla = '1';
            break;
        case 'boton2':
            tecla = '2';
            break;
        case 'boton3':
            tecla = '3';
            break;
        case 'boton4':
            tecla = '4';
            break;
        case 'boton5':
            tecla = '5';
            break;
        case 'boton6':
            tecla = '6';
            break;
        case 'boton7':
            tecla = '7';
            break;
        case 'boton8':
            tecla = '8';
            break;
        case 'boton9':
            tecla = '9';
            break;
        case 'botonIgual':
            tecla = 'Enter'
            break;
        case 'botonResto':
            tecla = '%';
            break;
        case 'botonx':
            tecla = '*';
            break;
        case 'botonMenos':
            tecla = '-';
            break;
        case 'botonMas':
            tecla = '+';
            break;
        case 'botonDivision':
            tecla = '/';
            break;
        case 'botonIgual':
            tecla = '=';
            break
        case 'botonc':
            teclaDown = 'Escape';
            break;
        case 'botonBorrar':
            teclaDown = 'Backspace';
            break;
        default:
            break;
    }
    if (tecla!==null) {
        const eventoKeyPress = new KeyboardEvent("keypress", { key: tecla});
        document.dispatchEvent(eventoKeyPress);
    }
    if (teclaDown!==null) {
        const eventoKeyDown = new KeyboardEvent("keydown", { key: teclaDown});
        document.dispatchEvent(eventoKeyDown);
    }
}

document.addEventListener('keypress', handleKeyPress);
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('click', handleClick);
