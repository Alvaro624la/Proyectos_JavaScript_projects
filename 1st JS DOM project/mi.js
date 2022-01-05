/*alert('Abre la consola para evaluar completamente el proyecto. ¡Gracias!');*/

/*PRUEBA try...catch*/
try{

/*ver estado de carga del documento (loading)*/
console.log(document.readyState);
/*ver estado de carga de la ventana (undefined)*/
console.log(window.readyState);
/*ERROR para el try...catch (intento hacer lo imposible, ver el estado de carga del HTML (undefined)*/
console.log(document.DOMContentLoaded.readyState);

function cargarDocumento(){
    if(document.readyState === "loading"){
        console.info("HTML cargado");
    } else {
        console.error('no ha cargado bien el HTML');
    }
};
cargarDocumento();

}
catch(err){
    console.log(`No se pudo completar la funcion cargarDocumento debido al error --> ${err}`);
}
finally{console.log('------[Acceso al try...catch --> "cargarDocumento"]------')}

/*ABRIR Y CERRAR OJOS*/
let i = 0;
let contador = document.getElementById('contador');
contador.innerHTML = i;

var ojosAbiertos = document.getElementById('ojos-abiertos');
ojosAbiertos.addEventListener('click', abrir);
var ojosCerrados = document.getElementById('ojos-cerrados');
ojosCerrados.addEventListener('click', cerrar);

function abrir(){
    ojosAbiertos.style.display = "none";
    ojosCerrados.style.display = "block";
    i++;
    contador.innerHTML = i;
    console.log(i);
    /*PARES*/
    if(i === 10){
        diez();
    }
    if(i === 50){
        cincuenta();
    }
    
};
function cerrar(){
    ojosCerrados.style.display = "none";
    ojosAbiertos.style.display = "block";
    i++;
    contador.innerHTML = i;
    console.log(i);
    /*IMPARES*/
    if(i === 25){
        veinticinco();
    }
    if(i === 51){
        cincuentaYUno();
    }
};
let diez = () => alert(`Ya vas a llegar a ${i}. ¡Muy bien!`);

let veinticinco = () => {
    alert(`Vas a llevar ${i} toques ya... ¿No te aburres de abrir y cerrar ojos?`);
    alert(`A los 50 toques, se quiere dormir. Si le dejas...`);
};

let cincuenta = () => alert(`El muñeco ya se va a dormir. No le despiertes más`);

let cincuentaYUno = () => {
    alert(`¡Oh, venga ya...!.`);
    alert(`Te avisé. ¡A DORMIR!`);
    location.reload();
    //document.location.reload(); /*también sirve*/
    //window.location.reload(); /*también sirve*/
};

//CODEPEN CHANGE
/*
let cincuentaYUno = () => {
    alert(`¡Oh, venga ya...!.`);
    document.location.reload(true);
    alert(`Te avisé. ¡A DORMIR!`);
};
*/