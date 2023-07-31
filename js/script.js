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

const handleBackspace =(event) => {
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

const boton1 = document.querySelector('#boton1');
boton1.addEventListener('click', () => {
    const tecla = '1';
    const eventoKeyPress = new KeyboardEvent("keypress", { key: tecla});
    document.dispatchEvent(eventoKeyPress);
});

const boton2 = document.querySelector('#boton2');
boton2.addEventListener('click', () => {
    const tecla = '2';
    const eventoKeyPress = new KeyboardEvent("keypress", { key: tecla});
    document.dispatchEvent(eventoKeyPress);
});

const boton3 = document.querySelector('#boton3');
boton3.addEventListener('click', () => {
    const tecla = '3';
    const eventoKeyPress = new KeyboardEvent("keypress", { key: tecla});
    document.dispatchEvent(eventoKeyPress);
});

const boton4 = document.querySelector('#boton4');
boton4.addEventListener('click', () => {
    const tecla = '4';
    const eventoKeyPress = new KeyboardEvent("keypress", { key: tecla});
    document.dispatchEvent(eventoKeyPress);
});

const boton5 = document.querySelector('#boton5');
boton5.addEventListener('click', () => {
    const tecla = '5';
    const eventoKeyPress = new KeyboardEvent("keypress", { key: tecla});
    document.dispatchEvent(eventoKeyPress);
});

const boton6 = document.querySelector('#boton6');
boton6.addEventListener('click', () => {
    const tecla = '6';
    const eventoKeyPress = new KeyboardEvent("keypress", { key: tecla});
    document.dispatchEvent(eventoKeyPress);
});

const boton7 = document.querySelector('#boton7');
boton7.addEventListener('click', () => {
    const tecla = '7';
    const eventoKeyPress = new KeyboardEvent("keypress", { key: tecla});
    document.dispatchEvent(eventoKeyPress);
});

const boton8 = document.querySelector('#boton8');
boton8.addEventListener('click', () => {
    const tecla = '8';
    const eventoKeyPress = new KeyboardEvent("keypress", { key: tecla});
    document.dispatchEvent(eventoKeyPress);
});

const boton9 = document.querySelector('#boton9');
boton9.addEventListener('click', () => {
    const tecla = '9';
    const eventoKeyPress = new KeyboardEvent("keypress", { key: tecla});
    document.dispatchEvent(eventoKeyPress);
});

const boton0 = document.querySelector('#boton0');
boton0.addEventListener('click', () => {
    const tecla = '0';
    const eventoKeyPress = new KeyboardEvent("keypress", { key: tecla});
    document.dispatchEvent(eventoKeyPress);
});

const botonMas = document.querySelector('#botonMas');
botonMas.addEventListener('click', () => {
    const tecla = '+';
    const eventoKeyPress = new KeyboardEvent("keypress", { key: tecla});
    document.dispatchEvent(eventoKeyPress);
});

const botonMenos = document.querySelector('#botonMenos');
botonMenos.addEventListener('click', () => {
    const tecla = '-';
    const eventoKeyPress = new KeyboardEvent("keypress", { key: tecla});
    document.dispatchEvent(eventoKeyPress);
});

const botonx = document.querySelector('#botonx');
botonx.addEventListener('click', () => {
    const tecla = '*';
    const eventoKeyPress = new KeyboardEvent("keypress", { key: tecla});
    document.dispatchEvent(eventoKeyPress);
});

const botonDivision = document.querySelector('#botonDivision');
botonDivision.addEventListener('click', () => {
    const tecla = '/';
    const eventoKeyPress = new KeyboardEvent("keypress", { key: tecla});
    document.dispatchEvent(eventoKeyPress);
});

const botonResto = document.querySelector('#botonResto');
botonResto.addEventListener('click', () => {
    const tecla = '%';
    const eventoKeyPress = new KeyboardEvent("keypress", { key: tecla});
    document.dispatchEvent(eventoKeyPress);
});


const botonIgual = document.querySelector('#botonIgual');
botonIgual.addEventListener('click', () => {
    const tecla = '=';
    const eventoKeyPress = new KeyboardEvent("keypress", { key: tecla});
    document.dispatchEvent(eventoKeyPress);
});

const botonc = document.querySelector('#botonc');
botonc.addEventListener('click', () => {
    const tecla = 'Escape';
    const eventoKeyPress = new KeyboardEvent("keydown", { key: tecla});
    document.dispatchEvent(eventoKeyPress);
});

const botonBorrar = document.querySelector('#botonBorrar');
botonBorrar.addEventListener('click', () => {
    const tecla = 'Backspace';
    const eventoKeyPress = new KeyboardEvent("keydown", { key: tecla});
    document.dispatchEvent(eventoKeyPress);
});

document.addEventListener('keypress', handleKeyPress);
document.addEventListener('keydown', handleBackspace);
