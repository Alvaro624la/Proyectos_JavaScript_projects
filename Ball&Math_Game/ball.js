// VARIABLES
let main = document.getElementById('main');
let form = document.getElementsByTagName('form');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let operador = document.getElementById('operador');
let resultado = document.getElementById('resultado');
let evaluar = document.getElementById('bt');
let ball = document.getElementById('ball');
const NOAUDIO = new Audio("incorrecto-sound.mp3");
const SIAUDIO = new Audio("correcto-sound.mp3");


//FUNCIONES
//CANCELAR EL EVENTO SUBMIT DEL BOTON
evaluar.addEventListener('click', (event) => {
    event.preventDefault();
});

//VARIABLES para CONDICIONES
let numeroProceso = -1;
// -1 -> reinicio loop
// 0 -> esperar a cajas(2seg)
// 1 -> abrir cajas por resutado correcto
// 2 -> las cajas se van (efecto: bola avanza)

//VIDAS
let vidas = 10;

function empezar() {
    if(numeroProceso == -1){
        console.log(`${numeroProceso}:\n\tSe inicia el proceso único de inicio.\n\tSe crean y se espera a las cajas (2s).`);
    };
    //CREACION DE NUMEROS en INPUTS para las OPERACIONES
    let random1 = Math.random()+10*Math.random()//*10;
    let random1Entero = Math.floor(random1);
    num1.value = `${random1Entero}`;
    
    let random2 = Math.random()+10*Math.random()//*10;
    let random2Entero = Math.floor(random2);
    num2.value = `${random2Entero}`;

    operador.value = '+';

    //para CONDICIONAL
    let total = random1Entero + random2Entero;

    //CREACIÓN DE CAJAS
    //CAJA LEFT
    let leftBox = document.createElement('div');
    main.appendChild(leftBox);

    leftBox.id = 'left-box';
    leftBox.className = ('box-left no');

    //CAJA RIGHT
    let rightBox = document.createElement('div');
    main.appendChild(rightBox);

    rightBox.id = 'right-box';
    rightBox.className = ('box-right no');

    function entrar(){
        leftBox.classList.add('left-in-move');
        rightBox.classList.add('right-in-move');
        function listo(){
            numeroProceso++;
            //numeroProceso = 0
            if(numeroProceso == 0){
                console.log(`${numeroProceso}:\n\tSe espera a evaluar el resultado`);
                console.log(`Resultado: ${total.toString()}`);

                //EVENTOS
                evaluar.addEventListener('click', () => {
                    function funcionEvaluar() {
                        if(resultado.value != total){
                            NOAUDIO.play();

                            evaluar.style.backgroundColor = 'red';
                            resultado.style.border = '1px solid red';
                            leftBox.classList.add('red');
                            rightBox.classList.add('red');
        
                            function a() {
                                evaluar.style.backgroundColor = 'white';
                                resultado.style.border = '1px solid black';
                                leftBox.classList.remove('red');
                                rightBox.classList.remove('red');

                                resultado.value = "";
                                resultado.placeholder = "";
                            };
                            window.setTimeout(a, 1000);
        
                            console.error(`El resultado es el falso.`);
                            /*
                            vidas--;
                            console.log(vidas);
                            if(vidas == 0){
                                alert('Has perdido.');
                                window.location.reload();
                                alert('Reinicio del juego. Vidas llenas');
                            };
                            */
                        } else if(resultado.value == total){
                            SIAUDIO.play();
                            
                            evaluar.style.backgroundColor = 'green';
                            resultado.style.border = '1px solid green';
        
                            function a() {
                                evaluar.style.backgroundColor = 'white';
                                resultado.style.border = '1px solid black';
                            };
                            window.setInterval(a, 1000);
        
                            leftBox.classList.add('yes');
                            rightBox.classList.add('yes');
                            
                            //ABRIR
                            leftBox.classList.add('left-yes-move');
                            rightBox.classList.add('right-yes-move');
                            numeroProceso++;
                            //numeroProceso = 1
                            console.log(`${numeroProceso}:\n\tEl resultado es correcto.\n\tColor a verde\n\tSe abren las cajas.`);
                            function finReinicio(){
                                numeroProceso++;
                                //numeroProceso = 2
                                if(numeroProceso == 2){
                                    console.log(`${numeroProceso}:\n\tLas cajas se han abierto.\n\tLas cajas se van(efecto: la bola avanza hacia delante(abajo)).\n[${new Date().getHours()}h ${new Date().getMinutes()}min ${new Date().getSeconds()}s]`);

                                    num1.value = "";
                                    num2.value = "";
                                    resultado.value = "";
                        
                                    leftBox.classList.add('left-out-move');
                                    rightBox.classList.add('right-out-move');

                                    //reiniciar y crear el bucle infinito del juego
                                    numeroProceso = -1;

                                    if(numeroProceso == -1){empezar();}

                                    function eliminar(){
                                        leftBox.classList.add('eliminar');
                                        rightBox.classList.add('eliminar');
                                    };        
                                    window.setTimeout(eliminar, 2000);

                                };
                            };
                        };
                        window.setTimeout(finReinicio, 2000);
                    };
                    funcionEvaluar();
                });
            };
        }
        window.setTimeout(listo, 2000);
    }
    //INTERVALO PARA LAS TRANSITIONS
    window.setTimeout(entrar, 0500);
};
if(numeroProceso == -1){empezar();}
//window.onload = empezar();