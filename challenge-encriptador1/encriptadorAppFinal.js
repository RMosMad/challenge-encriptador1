/*-----------------------------------------------------------------------------------------------------------------*/
                                //CODIGO JS DE CHALLENGE ENCRIPTADOR
/*-----------------------------------------------------------------------------------------------------------------*/

///crea elementos de captura
const textoentrada = document.getElementById("texarea1");
const textosalida = document.getElementById("texarea2");

//crea elementos de captura para asignarlos uno para fotos y uno para textos relacionados al secction2
let divImag = document.getElementById("fotos");
let divText = document.getElementById("anuncio");

// creando array de codigos para encriptdo

const clave = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufo"],
];

// crear array para validaciones
const validaciones = [
    ["crtx ", " "],
    ["chck ", " "],
    ["rknn ", " "],
    ["blck ", " "],
];

//llenando array1 de imagenes
const noHayVidaimg = [
    ["imagenes/buscando-algo.jpg"],
    ["imagenes/buscando-algo1.jpg"],
    ["imagenes/buscando-algo2.jpg"],
    ["imagenes/buscando-algo3.jpg"],
];

//llenado de array1 de textos
const noHayVidaTex = [
    ["Alguien con Vida?🧏🏻‍♂️ ME ESCUCHAN?"],
    ["Mucho Silencio !CUIDADO!"],
    ["Ningun Mensaje Fue Encontrado"],
    ["No e Visto Nada😎, Viste Algo?"],
];

//llenando array2 de imagenes
const HayVidaimg = [
    ["imagenes/hayvida.jpg"],
    ["imagenes/hayvida1.jpg"],
    ["imagenes/hayvida2.jpg"],
    ["imagenes/hayvida3.jpg"],
];

//llenado de array2 de textos
const HayVidaTex = [
    ["!Que Bueno¡💖 TIENE PULSO "],
    ["Se Mueve 🤸🏻‍♂️, Solo Dormia 😴"],
    ["Abrio los ojos!😯 !YEAH¡"],
    ["Esta Activo y Fuerte 💪🏻"],
];

//llenando array3 de imagenes
const encriptadoimg = [
    ["imagenes/encriptado.jpg"],
    ["imagenes/encriptado1.jpg"],
    ["imagenes/encriptado2.jpg"],
    ["imagenes/encriptado3.jpg"],
];

//llenado de array3 de textos
const encriptadoTex = [
    ["[Arcano][Enigma][Acertijo]"],
    ["[Protegido][Acertijo][Arcano]"],
    ["[Enigma][Arcano][Protegido] "],
    ["[Acertijo][Protegido][Enigma] "],
];

//llenando array2 de imagenes
const desencriptaimg = [
    ["imagenes/desencriptado.jpg"],
    ["imagenes/desencriptado1.jpg"],
    ["imagenes/desencriptado2.jpg"],
    ["imagenes/desencriptado7.jpg"],
];

//llenado de array2 de textos
const desencriptaTex = [
    [" !Genial Ya Tienes tu Llave! 🗝 "],
    ["!EUREKA¡ Conseguiste Desifrarlo "],
    ["Welcome Mr. Anderson 👓"],
    ["Desbloqueado.. Desbloqueado.. "],
];

/*-----------------------------------------------------------------------------------------------------------------*/
                                //BOLQUE DE LLAMADAS Y ACCIONES
/*-----------------------------------------------------------------------------------------------------------------*/

//llamando funcion repetir
repetir();

//se crean variables para contar
let conta = 0;
let conta1 = 0;
let conta2 = 0;
let conta3 = 0;

/*-----------------------------------------------------------------------------------------------------------------*/
                                    //SECCION DE FUNCIONES
/*-----------------------------------------------------------------------------------------------------------------*/

                                //BOQUE DE FUNCIONES DE FUNCIONAMIENTO

//Crear una funcion recursiva, que permita hacer una repeticion constante mientras no ocurra una accion del usuario
function repetir() {
    //se llama a la funcio para reponer el texto inicial
    cambiarPlaceholder("Ingrese Arcano ");

    //Habilitacion del boton codificar para evitar recodificaion de una frase
    document.getElementById("codifique").disabled = false;
    console.log("deberia haber habilitado el boton de codificacion ");

    //Habilitacion del boton decodificar para evitar recodificaion de una frase
    document.getElementById("decodifique").disabled = false;
    console.log("deberia haber habilitado el boton de decodificacion ");

    //llamo a la funcion limpiar la salida para garantizar que no exista nada escrito en mi salida
    limpiar("texarea2");

    //realio la captura de los datos del tex area uno si existe algun dato para comparar luego
    let ingreso = document.getElementById("texarea1");

    //asigno el valor del tex area de entrada a una variable, aunque teambien se puede hacer usando ingreso.value
    let textoingresado = ingreso.value;

    //1er condicional que controlara la plataforma de manera automatica
    if (textoingresado === "") {
        const eleimg = generarAleatorio(noHayVidaimg.length);
        const eletex = generarAleatorio(noHayVidaimg.length);
        let imgaleatory = noHayVidaimg[eleimg];
        let texaleatory = noHayVidaTex[eletex];

        //asignando los valores a los divs aleatoreos
        divImag.src = imgaleatory;
        divText.innerHTML = texaleatory;
        console.log("estoy en el primer bucle funcion repetir de 5 seg");
        //funcion de temporizador
        setTimeout(() => repetir(), 5000);

        //este sino es la parte falsa de la validacion de texarea vacio
    }else{
         //comparativa si la frase ingresada presenta Mayusculas
        if(contieneMayusculas(textoingresado) ){
             console.log("en hola estamos finos esta frase si tiene MAYUSCULAS vamos a cambiar el placeholder y 5seg vamos a resetear todo");
             //llamo a la funcion limpiar texarea1
             limpiar("texarea1");
             //se llama a la funcion para cambiar el placeholder
             cambiarPlaceholder("Solo se Permiten Minusculas, ⛔MAYUSCULAS Y ACENTOS NO⛔");
             //funcion de temporizador
             setTimeout(() => repetir(), 7000);

        //este sino es parte falsa de la validacion de las mayusculas 
    }else{
        //comparativa si la frase ingresada presenta Caracteres 
        if(contieneCaracter(textoingresado)){
                console.log("en hola estamos finos esta frase si tiene carateres vamos a cambiar el placeholder y 5seg vamos a resetear todo");
                //llamo a la funcion limpiar texarea1
                limpiar("texarea1");  
                //se llama a la funcion para cambiar el placeholder
                cambiarPlaceholder("Solo se Permiten Minusculas, ⛔ CARACTERES NO ⛔");
                //funcion de temporizador
                setTimeout(() => repetir(), 7000);

            //este sino es la parte falsa de no tener caracteres 
        }else{
            //este sino es el de la comparativa si la frase ya esta encriptada ;
                console.log("estoy en la comparativa de ver si es una  frase encriptada, en este punto no tiene ni mayusculas ni caracteres especiales");
                /*en este condicional estoy llamando a la funcion de validaciones para saber si es un 
                texto encriptado o un texto a encriptar */
                if (validacion(textoingresado) === "desencriptar") {
                    console.log(
                        "estoy en condicional de validacion esta validacion es verdadera"
                    );

                    //imagenes y textos aleatoreos indicanto que si existe actividad usuaria por el lado de desencripciones
                    const eleimgvida = generarAleatorio(HayVidaimg.length);
                    const eletexvida = generarAleatorio(HayVidaTex.length);
                    let imgaleatory1 = HayVidaimg[eleimgvida];
                    console.log("mostrando el valor de imagen aleatorea ", imgaleatory1);
                    let texaleatory1 = HayVidaTex[eletexvida];
                    console.log("mostrando el valor de los textos ", texaleatory1);

                    //asignando los valores a los divs aleatoreos
                    divImag.src = imgaleatory1;
                    divText.innerHTML = texaleatory1;

                    //desabilitacion del boton codificar para evitar recodificaion de una frase
                    document.getElementById("codifique").disabled = true;
                    console.log("deberia haber desabilitado el boton de codificacion ");

                    //llamando la funcion repetir desencripta
                    repetirdesencripta();

                    //este sino es el de la comparativa de validaciones;
                } else {
                    console.log(
                        "estoy en condicional de validacion esta validacion es falsa"
                    );

                    //imagenes y textos aleatoreos indicanto que si existe actividad usuaria por el lado de encriptaciones
                    const eleimgvida = generarAleatorio(HayVidaimg.length);
                    const eletexvida = generarAleatorio(HayVidaTex.length);
                    let imgaleatory1 = HayVidaimg[eleimgvida];
                    console.log("mostrando el valor de imagen aleatorea ", imgaleatory1);
                    let texaleatory1 = HayVidaTex[eletexvida];
                    console.log("mostrando el valor de los textos ", texaleatory1);

                    //asignando los valores a los divs aleatoreos
                    divImag.src = imgaleatory1;
                    divText.innerHTML = texaleatory1;

                    //desabilitacion del boton decodificar para evitar recodificaion de una frase
                    document.getElementById("decodifique").disabled = true;
                    console.log("deberia haber desabilitado el boton de decodificacion ");

                    //llamando la funcion repetirencripta
                    repetirencripta();
                }
            }
        }
    }
}


/*-----------------------------------------------------------------------------------------------------------------*
                                        //FUNCION DE VALIDACIONES

/*-----------------------------------------------------------------------------------------------------------------*/

                                //FUNCION DE VALIDACION DE UNA FRASE ENCRIPTADA
/*-----------------------------------------------------------------------------------------------------------------*/

/* creamos una funcio llamada validacion vamos a crear un bucle for para recorrer arry de validaciones 
 para determinar si la frase que se ingresa esta encriptada o no*/
function validacion(palabra) {
    let palabra1 = "falso";
    console.log(
        "estoy mostando el valor del parametro en funcion valdaciones",
        palabra
    );
    for (let i = 0; i < validaciones.length; i++) {
        console.log(
            "estoy  recorriendo el array de validaciones:",
            validaciones[i]
        );
        //en esta variable vamos a arrojar el valor del texarea1
        if (palabra.includes(validaciones[i][0])) {
            palabra1 = "desencriptar";
            console.log(
                "estoy en la comparativa verdadera de validadciones si incluye el la validacion",
                validaciones[i],
                "en la posicion:",
                i,
                " del array, la varable palabra1 es: ",
                palabra1
            );
        }
    }
    return palabra1;
}

/*-----------------------------------------------------------------------------------------------------------------*/
                                    //FUNCION DE VALIDACION DE MAYUSCULAS
/*-----------------------------------------------------------------------------------------------------------------*/

//se crea una funcion para validar frase o letras en mayusculas
function contieneMayusculas(str) {
    return /[A-ZáéíóúüñÁÉÍÓÚÜÑ]/.test(str);
   }

/*-----------------------------------------------------------------------------------------------------------------*/
                                //FUNCION VALIDACION DE CARACTERES
/*-----------------------------------------------------------------------------------------------------------------*/

//funcion de validacion de caracteres  pos si la frase ingresada presenta un caracter especial
   function contieneCaracter(str) {
    return  /[0-9`!@#$%^&*()_°+\-=\[\]{};':"\\|,´.<>\/?~]/.test(str);
   }
   
/*-----------------------------------------------------------------------------------------------------------------*/
                                //FUNCION DE REPETICION DE DESENCRIPTADO
/*-----------------------------------------------------------------------------------------------------------------*/

//se crea una funcion con la condicion para evaluar si se llamo a la funcion para desencritar la palabra
function repetirdesencripta() {
    //crear una variable la cual recibira el codigo de validacion del array de validaciones
    let repitedesencripta = textoentrada.value;
    console.log(
        "estoy en funcion repetirdesencripta mostrando valor de repitedesencripta",
        repitedesencripta
    );
    if (
        repitedesencripta === "DESENCRIPTANDO ⏳" ||
        repitedesencripta === "DESENCRIPTADO 🔑"
    ) {
        console.log(
            "estoy en la comparativa verdadera de la funcion repetirdesencripta mostrando valor de repitedesencripta",
            repitedesencripta
        );

        //llamando a la funcionrepetirdesencripta1(), para mejorar error de ciclo
        repetirdesencripta1();

        //este sino es el de la comparativa de repetirdecenripta();
    } else {
        //se hace otra comparativa para saber si el texarea1 esta limpio y volver al principio del codigo
        if (repitedesencripta === "") {
            console.log("deberia haber llamado a repetir() con retardeo de 2seg ");
            //funcion de temporizador repetir para volver al inicio despues de 2seg
            setTimeout(() => repetir(), 1000);

            //este sino es el de la comparativa de repetirdecenripta() texarea vacia;
        } else {
            //se llama a la funcion de validaciones para saver si el texto sigue siendo un texto a desencritar, y por parametros le vamos a pasar el valor del texarea1 que esta en este momento
            if (validacion(repitedesencripta) === "desencriptar") {
                console.log(
                    "estoy en condicional de validacion esta validacion es verdadera"
                );

                //imagenes y textos aleatoreos indicanto que si existe actividad usuaria por el lado de encriptaciones
                const eleimgvida = generarAleatorio(HayVidaimg.length);
                const eletexvida = generarAleatorio(HayVidaTex.length);
                let imgaleatory1 = HayVidaimg[eleimgvida];
                console.log("mostrando el valor de imagen aleatorea ", imgaleatory1);
                let texaleatory1 = HayVidaTex[eletexvida];
                console.log("mostrando el valor de los textos ", texaleatory1);

                //asignando los valores a los divs aleatoreos
                divImag.src = imgaleatory1;
                divText.innerHTML = texaleatory1;

                //funcion de temporizador recursivo
                setTimeout(() => repetirdesencripta(), 3000);

                //este sino es la parte falsa de validaciones de repetirdesencripta()
            } else {
                console.log(
                    "estamos en comparativa falsa de la funcion  repetirdesencripta(), la variable repetirdescritiva es;",
                    repitedesencripta
                );

                //habilitacion del boton codificar para codificaion de una frase
                document.getElementById("codifique").disabled = false;
                console.log("deberia haber habilitado el boton de codificacion ");

                //en este punto se debe desabilitar el boton de desencriptar ya que esta habilitado para evitar su accionar se bloquea nuevamente

                //desabilitacion del boton decodificar para evitar recodificaion de una frase
                document.getElementById("decodifique").disabled = true;
                console.log("deberia haber desabilitado el boton de decodificacion ");

                //se supone que el texto ingresado en este punto es una frase para encriptar por ende se llamara a la funcion repetirencripta();
                repetirencripta();
            }
        }
    }
}

/*-----------------------------------------------------------------------------------------------------------------*/
                    //FUNCION DE REPETICION DE DESENCRIPTADO CONTINUACION
/*-----------------------------------------------------------------------------------------------------------------*/

//creando la funcion repetirdesencripta1() para ejecutar otro bucle
function repetirdesencripta1() {
    //va a cambiar el texarea1 a desencriptado
    document.getElementById("texarea1").value = "DESENCRIPTADO 🔑";
    console.log(
        "estoy en la comparativa verdadera de la funcion repetirdesencripta mostrando el valor de texarea1 el cual va a cambias a: DESENCRIPTADO 🔑"
    );

    //el boton de decodificado fue accionado
    console.log(
        " estamos en la verificacion de el accionamiento del boton decodificado el cual fue accionado"
    );
    
    //en este punto se debe desabilitar el boton de desencriptar ya que esta habilitado para evitar que desencriptenuevamente

    //desabilitacion del boton decodificar para evitar recodificaion de una frase
    document.getElementById("decodifique").disabled = true;
    console.log("deberia haber desabilitado el boton de decodificacion ");

    const eleimgdesencripta = generarAleatorio(desencriptaimg.length);
    const eletexdesencripta = generarAleatorio(desencriptaTex.length);
    let imgaleatory2 = desencriptaimg[eleimgdesencripta];
    console.log("mostrando el valor de imagen aleatorea ", imgaleatory2);
    let texaleatory2 = desencriptaTex[eletexdesencripta];
    console.log("mostrando el valor de los textos ", texaleatory2);

    //asignando los valores de imagenes y textos aleatoreos de desncripcion a los divs
    divImag.src = imgaleatory2;
    divText.innerHTML = texaleatory2;
    console.log(
        "estoy en la verificacion de el accionamiento del boton decodificado el cual fue accionado mostrando imagenes y textos de desencriptado en los divs "
    );

    //comparativa para determinar si en este punto el usuario borró el texarea o pego una frase nueva
    let repitedesencripta1 = textoentrada.value;
    console.log(
        "estoy en comparativa de texarea1 para saber si la variable repitedesencripta != DESENCRIPTADO 🔑 si es distinto deberia reiniciar ",
        repitedesencripta1
    );
    if (repitedesencripta1 != "DESENCRIPTADO 🔑") {
        //se hace otra comparativa para saber si el texarea1 esta limpio y volver al principio del codigo
        if (repitedesencripta1 === "") {
            console.log("deberia haber llamado a repetir() con retardeo de 1seg ");
            //funcion de temporizador repetir para volver al inicio despues de 2seg
            setTimeout(() => repetir(), 1000);

            //este sino es el de la comparativa de repitedesencripta1 texarea vacia;
        } else {
            //se llama a la funcion de validaciones para saver si el texto sigue siendo un texto a desencritar, y por parametros le vamos a pasar el valor del texarea1 que esta en este momento
            if (validacion(repitedesencripta1) === "desencriptar") {
                console.log(
                    "estoy en condicional de validacion esta validacion es verdadera"
                );

                //imagenes y textos aleatoreos indicanto que si existe actividad usuaria por el lado de encriptaciones
                const eleimgvida = generarAleatorio(HayVidaimg.length);
                const eletexvida = generarAleatorio(HayVidaTex.length);
                let imgaleatory1 = HayVidaimg[eleimgvida];
                console.log("mostrando el valor de imagen aleatorea ", imgaleatory1);
                let texaleatory1 = HayVidaTex[eletexvida];
                console.log("mostrando el valor de los textos ", texaleatory1);

                //asignando los valores a los divs aleatoreos
                divImag.src = imgaleatory1;
                divText.innerHTML = texaleatory1;

                //en este punto se debe habilitar el boton de desencriptar ya que estaba desabilitado para evitar que reencriptara

                //habilitacion del boton decodificar para poder decodificar nueva
                document.getElementById("decodifique").disabled = false;
                console.log("deberia haber habilitado el boton de decodificacion ");

                //funcion de temporizador recursivo
                setTimeout(() => repetirdesencripta(), 3000);

                //este sino es la parte falsa de validaciones de repetirdesencripta()
            } else {
                console.log(
                    "estamos en comparativa falsa de la funcion  repetirdesencripta(), la variable repetirdescritiva es;",
                    repitedesencripta1
                );

                //habilitacion del boton codificar para codificaion de una frase
                document.getElementById("codifique").disabled = false;
                console.log("deberia haber habilitado el boton de codificacion ");

                //en este punto se debe desabilitar el boton de desencriptar ya que esta habilitado para evitar su accionar se bloquea nuevamente

                //desabilitacion del boton decodificar para evitar recodificaion de una frase
                document.getElementById("decodifique").disabled = true;
                console.log("deberia haber desabilitado el boton de decodificacion ");

                //se supone que el texto ingresado en este punto es una frase para encriptar por ende se llamara a la funcion repetirencripta();
                repetirencripta();
            }
        }

        //este sino es el de la comparativa de repetirdecenripta1();
    } else {
        //condicional para permitir que los textos y fotos de desencriptado cambien unas 3 veces
        if (conta <= 3) {
            conta++;
            console.log("incremento de conta", conta);
            //temporizador retorno a la funcion de desencriptado1 recursividad, para dar interactividad de desencirpciones
            setTimeout(() => repetirdesencripta1(), 5000);

            //este sino es el de la comparativa del contador de las imagenes desncriptadas();
        } else {
            //limpiar el texarea1
            limpiar("texarea1");

            console.log(
                "limpiando texarea por primera vez de aqui voy a llamar cambiarPlaceholder(Sistema Activo) y a repetirplaceholde() que debe activarse 4seg despues"
            );

            //se llama a la funcion para cambiar el placeholder
            cambiarPlaceholder("Sistema Activo");
            //se llama a la funcion repetir placeholder para mostrar acticvidad en el texarea de entrada
            setTimeout(() => repiteplaceholder(), 4000);
        }
    }
}

/*------------------------------------------------------------------------------------------------------------------*/
                             //FUNCION DE REPETICION DE ENCRIPTADO
/*-----------------------------------------------------------------------------------------------------------------*/

//se crea una funcion con la condicion para evaluar si se llamo a la funcion para encriptar la palabra
function repetirencripta() {
    //crear una variable la cual recibira el codigo de validacion del array de validaciones
    let repiteEncripta = textoentrada.value;
    console.log(
        "estoy en funcion repetirdesencripta mostrando valor de repitedesencripta",
        repiteEncripta
    );
    if (
        repiteEncripta === "ENCRIPTANDO ⏳" ||
        repiteEncripta === "ENCRIPTADO 🔐"
    ) {
        console.log(
            "estoy en la comparativa verdadera de la funcion repetirdesencripta mostrando valor de repitedesencripta",
            repiteEncripta
        );

        //llamando a la funcionrepetirencripta1(), para mejorar error de ciclo
        repetirencripta1();
    } else {
        //se hace otra comparativa para saber si el texarea1 esta limpio y volver al principio del codigo
        if (repiteEncripta === "") {
            console.log("deberia haber llamado a repetir() con retardo de 2seg ");
            //funcion de temporizador repetir para volver al inicio despues de 2seg
            setTimeout(() => repetir(), 1000);

            //este sino es el de la comparativa de repetirenripta() texarea vacia;
        } else {
            //se llama a la funcion de validaciones para saver si el texto sigue siendo un texto a desencritar, y por parametros le vamos a pasar el valor del texarea1 que esta en este momento

            if (validacion(repiteEncripta) === "desencriptar") {
                console.log(
                    "estamos en comparativa verdadera de la funcion  repetirencripta(), la variable repetirecritiva es;",
                    repiteEncripta
                );

                //desabilitacion del boton codificar para que no hacer recodificaion de una frase
                document.getElementById("codifique").disabled = true;
                console.log("deberia haber desabilitado el boton de codificacion ");

                //en este punto se debe habilitar el boton de desencriptar ya que esta frase es un encriptado
                //habilitacion del boton decodificar
                document.getElementById("decodifique").disabled = false;
                console.log("deberia haber habilitado el boton de decodificacion ");

                //se supone que el texto ingresado en este punto es una frase para desencriptar por ende se llamara a la funcion repetirdesencripta();
                repetirdesencripta();

                //este sino es la parte falsa de validaciones de repetirencripta()
            } else {
                //imagenes y textos aleatoreos indicanto que si existe actividad usuaria por el lado de encriptaciones
                const eleimgvida = generarAleatorio(HayVidaimg.length);
                const eletexvida = generarAleatorio(HayVidaTex.length);
                let imgaleatory1 = HayVidaimg[eleimgvida];
                console.log("mostrando el valor de imagen aleatorea ", imgaleatory1);
                let texaleatory1 = HayVidaTex[eletexvida];
                console.log("mostrando el valor de los textos ", texaleatory1);

                //asignando los valores a los divs aleatoreos
                divImag.src = imgaleatory1;
                divText.innerHTML = texaleatory1;

                //funcion de temporizador
                setTimeout(() => repetirencripta(), 3000);
            }
        }
    }
}

/*------------------------------------------------------------------------------------------------------------------*/
                       //FUNCION DE REPETICION DE ENCRIPTADO CONTINUACION
/*-----------------------------------------------------------------------------------------------------------------*/

//creando la funcion repetirencripta1() para ejecutar otro bucle
function repetirencripta1() {
    //va a cambiar el texarea1 a encriptado
    document.getElementById("texarea1").value = "ENCRIPTADO 🔐";
    console.log(
        "estoy en la comparativa verdadera de la funcion repetirencripta mostrando el valor de texarea1 el cual va a cambiar a: ENCRIPTADO 🔐"
    );

    //el boton de codificado fue accionado
    console.log(
        " estamos en la verificacion de el accionamiento del boton decodificado el cual fue accionado"
        );
      
    //desabilitacion del boton codificar para que no hacer recodificaion de una frase
    document.getElementById("codifique").disabled = true;
    console.log("deberia haber desabilitado el boton de codificacion ");
    
    const eleimgencripta = generarAleatorio(encriptadoimg.length);
    const eletexencripta = generarAleatorio(encriptadoTex.length);
    let imgaleatory3 = encriptadoimg[eleimgencripta];
    console.log("mostrando el valor de imagen aleatorea ", imgaleatory3);
    let texaleatory3 = encriptadoTex[eletexencripta];
    console.log("mostrando el valor de los textos ", texaleatory3);

    //asignando los valores a los divs aleatoreos
    divImag.src = imgaleatory3;
    divText.innerHTML = texaleatory3;
    console.log(
        "estoy en la verificacion de el accionamiento del boton decodificado el cual fue accionado mostrando imagenes y textos de desencriptado en los divs "
    );

    //comparativa para determinar si en este punto el usuario borró el texarea o pego una frase nueva
    let repiteEncripta1 = textoentrada.value;
    console.log(
        "estoy en comparativa de texarea1 para saber si la variable repitedesencripta != ENCRIPTADO 🔐 si es distinto deberia reiniciar ",
        repiteEncripta1
    );
    if (repiteEncripta1 != "ENCRIPTADO 🔐") {
        //se hace otra comparativa para saber si el texarea1 esta limpio y volver al principio del codigo
        if (repiteEncripta1 === "") {
            console.log("deberia haber llamado a repetir() con retardo de 1seg ");
            //funcion de temporizador repetir para volver al inicio despues de 1seg
            setTimeout(() => repetir(), 1000);

            //este sino es el de la comparativa de repetirenripta1 texarea vacia;
        } else {
            //se llama a la funcion de validaciones para saver si el texto sigue siendo un texto a desencritar, y por parametros le vamos a pasar el valor del texarea1 que esta en este momento

            if (validacion(repiteEncripta1) === "desencriptar") {
                console.log(
                    "estamos en comparativa verdadera de la funcion  repetirencripta(), la variable repetirecritiva es;",
                    repiteEncripta1
                );

                //desabilitacion del boton codificar para que no hacer recodificaion de una frase
                document.getElementById("codifique").disabled = true;
                console.log("deberia haber desabilitado el boton de codificacion ");

                //en este punto se debe habilitar el boton de desencriptar ya que esta frase es un encriptado
                //habilitacion del boton decodificar
                document.getElementById("decodifique").disabled = false;
                console.log("deberia haber habilitado el boton de decodificacion ");

                //se supone que el texto ingresado en este punto es una frase para desencriptar por ende se llamara a la funcion repetirdesencripta();
                repetirdesencripta();

                //este sino es la parte falsa de validaciones de repetirencripta()
            } else {
                //imagenes y textos aleatoreos indicanto que si existe actividad usuaria por el lado de encriptaciones
                const eleimgvida = generarAleatorio(HayVidaimg.length);
                const eletexvida = generarAleatorio(HayVidaTex.length);
                let imgaleatory1 = HayVidaimg[eleimgvida];
                console.log("mostrando el valor de imagen aleatorea ", imgaleatory1);
                let texaleatory1 = HayVidaTex[eletexvida];
                console.log("mostrando el valor de los textos ", texaleatory1);

                //asignando los valores a los divs aleatoreos
                divImag.src = imgaleatory1;
                divText.innerHTML = texaleatory1;
                
                //habilitacion del boton codificar ya que es otra frase a encriptar
                document.getElementById("codifique").disabled = false;
                console.log("deberia haber desabilitado el boton de codificacion ");

                //funcion de temporizador
                setTimeout(() => repetirencripta(), 3000);
            }
        }
        //este sino es la comparativa falsa de repiteEncripta1 != "ENCRIPTADO 🔐"
    } else {
        //condicional para permitir que los textos y fotos de encriptado cambien unas 3 veces
        if (conta2 <= 3) {
            conta2++;
            console.log("incremento de conta", conta2);
            //temporizador retorno a la funcion de encriptado para dar interactividad de desencirpciones
            setTimeout(() => repetirencripta1(), 5000);
        } else {
            //limpiar el texarea1
            limpiar("texarea1");

            console.log(
                "limpiando texarea por primera vez de aqui voy a llamar cambiarPlaceholder(Sistema Activo) y a repetirplaceholde() que debe activarse 4seg despues"
            );

            //se llama a la funcion para cambiar el placeholder
            cambiarPlaceholder("Sistema Activo");
            //se llama a la funcion repetir placeholder para mostrar acticvidad en el texarea de entrada
            setTimeout(() => repiteplaceholder(), 4000);
        }
    }
}

/*------------------------------------------------------------------------------------------------------------------*/
                                    //BLOQUE DE FUNCIONES DE EVENTOS
/*------------------------------------------------------------------------------------------------------------------*/

                                          //FUNCION DE COPIADO
/*------------------------------------------------------------------------------------------------------------------*/

//se crea la funcion de copiado a ttraves del boton de copiar
function btn() {
    let tomar = document.getElementById("texarea2");
    let titulo = document.getElementById("parrafo");

    tomar.select();
    document.execCommand("copy");
    titulo.innerHTML = " El Texto que Proviene del Ingreso se Copiado 🖱 ";
    //se genero este numero para no crear una funcion y asi aplicar un temporizado
    setTimeout(
        () =>
        (titulo.innerHTML =
            "!Aqui! 👇 Aparecera el Texto Encriptado 🔐 o Dencriptado 🔑"),
        3000
    );
}

/*-----------------------------------------------------------------------------------------------------------------*/
                               //BOQUE DE FUNCIONES DE DESENCRIPTADO
/*-----------------------------------------------------------------------------------------------------------------*/

//se crea funcion del boton decodifique
function botondesencripta() {
    const ingresar = limpiavalidacio(textoentrada.value);
    console.log("estoy en ingresar valor", ingresar);
    const ingresar1 = desencripta(ingresar);
    console.log("estoy en ingrasear1 valor ", ingresar1);
    comparadesencripta();
    //se coloca un tiempo para que salga el resultado en texarea2
    setTimeout(() => (textosalida.value = ingresar1), 3000);
}

// se crea funcion limpiar validacion
function limpiavalidacio(palabra) {
    for (let i = 0; i < clave.length; i++) {
        console.log(
            "estoy en funcion limpiavalidacio mostrando el valor real de la palabra ingresada",
            palabra
        );
        if (palabra.includes(validaciones[i][0])) {
            console.log("estoy imprimiendo palabra valor", palabra);
            const palabra1 = palabra.slice(5);
            return palabra1;
        }
    }
}

// se crea funcion desencriptar
function desencripta(palabra) {
    for (let i = 0; i < clave.length; i++) {
        if (palabra.includes(clave[i][1])) {
            palabra = palabra.replaceAll(clave[i][1], clave[i][0]);
        }
    }
    return palabra;
}

//funcion para comparar desencripta
function comparadesencripta() {
    document.getElementById("texarea1").value = "DESENCRIPTANDO ⏳";
    console.log(
        "estoy en funcion repetirdesencripta mostrando el valor de texarea1 el cual va a cambias a: DESENCRIPTANDO ⏳"
    );
}

/*------------------------------------------------------------------------------------------------------------------*/
                               //BOQUE DE FUNCIONES DE ENCRIPTADO
/*------------------------------------------------------------------------------------------------------------------*/

//funcion para cuando se accione el boton de encriptacion
function botonencripta() {
    const ingresar = encripta(textoentrada.value);
    comparaencripta();
    setTimeout(() => (textosalida.value = ingresar), 3000);
}
function encripta(palabra) {
    let enigma = "";
    for (let i = 0; i < clave.length; i++) {
        if (palabra.includes(clave[i][0])) {
            palabra = palabra.replaceAll(clave[i][0], clave[i][1]);
        }
    }
    enigma = generarAleatorio(validaciones.length);
    let texaleatory4 = validaciones[enigma][0];
    console.log(
        "estoy dentro de funcion encripta generando aleatorio,",
        enigma,
        " aqui se improme el valor de la validaccion a asignar : ",
        texaleatory4
    );
    palabra = texaleatory4 + palabra;
    console.log(
        "estoy dentro de funcion encripta incluyendo la validacion, a la varable palabra debesria ser: ",
        palabra
    );
    return palabra;
}
//funcion para comparar encripta
function comparaencripta() {
    document.getElementById("texarea1").value = "ENCRIPTANDO ⏳";
    console.log(
        "estoy en funcion repetirdesencripta mostrando el valor de texarea1 el cual va a cambias a: DESENCRIPTANDO ⏳"
    );
}

/*------------------------------------------------------------------------------------------------------------------*/
                           //BLOQUE DE FUNCIONES DE APOYO DEL PROYECTO
/*------------------------------------------------------------------------------------------------------------------*/

//creando una funcio para escoger un dato aleatoreo
function generarAleatorio(tamaño) {
    return Math.floor(Math.random() * tamaño);
}
/*-----------------------------------------------------------------------------------------------------------------*/

//se crea una funcion limpiar, que va a limpiar los texarea
function limpiar(id) {
    document.getElementById(id).value = "";
}

/*-----------------------------------------------------------------------------------------------------------------*/

//funcion para cambiar el texto del placeholder
function cambiarPlaceholder(texto) {
    var textarea = document.getElementById("texarea1");
    textarea.placeholder = texto;
}

/*-----------------------------------------------------------------------------------------------------------------*/

//funcion repetir para el cambio del placeholder y para determinar si en este punto el usuario ingreso o pego una frase nueva
function repiteplaceholder() {
    let repitedesencripta2 = textoentrada.value;
    console.log(
        "en repetir placeholder mostrando el valor de texarea el cual deberia estar vacio por defecto",
        repitedesencripta2
    );
    if (conta1 <= 3 && repitedesencripta2 === "") {
        conta1++;
        console.log(
            "en repetir placeholder mostrando el valor de conta1 el cual deberia ser 1",
            conta1,
            "y de aqui deberia llamar  ala funcion placeholder() y deberia hacer un decremento de sg y borrar nuevamente el texarea1"
        );
        console.log(
            "estoy en la verificacion de la recursividad de repetir placeholder en vecese",
            conta1
        );

        //funcion de temporizador recursiva del placeholder
        setTimeout(() => repiteplaceholder(), 4000);

        //este sino es el de la comparativa que esta entro de la funcion repetirplaceholder();
    } else {
        //se llama a la funcion repetir que va a llamar a una funcion para limpiar texarea2
        //funcion de temporizador
        setTimeout(() => limpiar("texarea2"), 1000);
        console.log(
            "estoy en la verificacion de el accionamiento del boton decodificado el cual fue accionado limpieza del tex area2 "
        );

        //funcion de temporizador repetir para volver al inicio despues de 5seg
        setTimeout(() => repetir(), 3000);
    }
}
