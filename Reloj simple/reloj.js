(function(){
    function actualizar(){

        // VARIABLES
        var fecha = new Date();

        var diaL = fecha.getDay();
        var diaN = fecha.getDate();
        var mes = fecha.getMonth();
        var año = fecha.getFullYear();
        var hora = fecha.getHours();
        var minutos = fecha.getMinutes();
        var segundos = fecha.getSeconds();

        var pDiaLetra = document.getElementById('dia-letra');
        var pDiaNumero = document.getElementById('dia-numero');
        var pMes = document.getElementById('mes');
        var pAño = document.getElementById('año');
        var pHora = document.getElementById('hora');
        var pMinutos = document.getElementById('minutos');
        var pSegundos = document.getElementById('segundos');      

        //CONSTANTES ARRAYS
        const SEMANA = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"]

        const MES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

        // CONDICIONALES
        if(hora < 10){hora = "0" + hora};
        if(minutos < 10){minutos = "0" + minutos};
        if(segundos < 10){segundos = "0" + segundos};

        // AÑADIR CONTENIDO al documento
        pDiaLetra.textContent = SEMANA[diaL];
        pDiaNumero.textContent = diaN;
        pMes.textContent = MES[mes];
        pAño.textContent = año;
        pHora.textContent = hora;
        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;        

        // CONSOLE.LOGs
        /*
        console.log(fecha);
        console.log(dia);
        console.log(mes);
        console.log(año);
        console.log(`${minutos} minutos`);
        console.log(`${segundos} segundos`);
        */
    };

    // Refrescamos nuestro código cada segundo para que nuestro reloj esté en hora
    let intervalo = setInterval(actualizar, 1000);

}());
