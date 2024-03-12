//Programa del Encriptador#1

///crea elementos de captura
const textoentrada = document.getElementById("texarea1");
const textosalida = document.getElementById("texarea2");

//crea elementos de captura para asignarlos uno para fotos y uno para textos relacionados al secction2
let divImag = document.getElementById("fotos");
let divText = document.getElementById("anuncio");

// creando array de codigos para encriptdo

const clave = [
    ["e", "enter"],
    ["i", "ines" ],
    ["a", "ai"   ],
    ["o", "ober" ],
    ["u", "ufo"  ],
];

// crear array para validaciones

const validaciones =[
    ["chch"],
    ["ktkt"],["bsg "],["zyzy"],["  "],
];


//llenando array1 de imagenes 
const noHayVidaimg =[
    ["imagenes/buscando-algo.jpg"],
    ["imagenes/buscando-algo1.jpg"],["imagenes/buscando-algo2.jpg"],["imagenes/buscando-algo3.jpg"],
];

//llenado de array1 de textos
const noHayVidaTex =[
    ["Alguien con Vida?🧏🏻‍♂️ ME ESCUCHAN?"],
    ["Mucho Silencio !CUIDADO!"],["Ningun Mensaje Fue Encontrado"],["No e Visto Nada😎, Viste Algo?"],
];

//llenando array2 de imagenes 
const HayVidaimg =[
    ["imagenes/hayvida.jpg"],
    ["imagenes/hayvida1.jpg"],["imagenes/hayvida2.jpg"],["imagenes/hayvida3.jpg"],
];

//llenado de array2 de textos
const HayVidaTex =[
    ["!Que Bueno¡💖 TIENE PULSO "],
    ["Se Mueve 🤸🏻‍♂️, Solo Dormia 😴"],["Abrio los ojos!😯 !YEAH¡"],["Esta Activo y Fuerte 💪🏻"],
];

//llenando array3 de imagenes 
const encriptadoimg =[
    ["imagenes/encriptado.jpg"],
    ["imagenes/encriptado1.jpg"],["imagenes/encriptado2.jpg"],["imagenes/encriptado3.jpg"],
];

//llenado de array3 de textos
const encriptadoTex =[
    ["[Arcano][Enigma][Acertijo]"],
    ["[Protegido][Acertijo][Arcano]"],["[Enigma][Arcano][Protegido] "],["[Acertijo][Protegido][Enigma] "],
];

//llenando array2 de imagenes 
const desencriptaimg =[
    ["imagenes/desencriptado.jpg"],
    ["imagenes/desencriptado1.jpg"],["imagenes/desencriptado2.jpg"],["imagenes/desencriptado7.jpg"],
];

//llenado de array2 de textos
const desencriptaTex =[
    [" !Genial Ya Tienes tu Llave! 🗝 "],
    ["!EUREKA¡ Conseguiste Desifrarlo "],["Welcome Mr. Anderson 👓"],["Desbloqueado.. Desbloqueado.. "],
];

//llamando funcion repetir
repetir();

//Crear una funcion recursiva, que permita hacer una repeticion constante mientras no ocurra una accion del usuario
function repetir() {

    //se llama a la funcio para reponer el texto inicial 
    cambiarPlaceholder("Ingrese Arcano ") 

    //Habilitacion del boton codificar para evitar recodificaion de una frase 
    document.getElementById("codifique").disabled = false;
    console.log("deberia haber habilitado el boton de codificacion ");

    //Habilitacion del boton decodificar para evitar recodificaion de una frase 
    document.getElementById("decodifique").disabled = false;
    console.log("deberia haber habilitado el boton de decodificacion ");

    //llamo a la funcion limpiar la salida para garantizar que no exista nada escrito en mi salida 
    limpiar("texarea2")

    //realio la captura de los datos del tex area uno si existe algun dato para comparar luego 
    let ingreso = document.getElementById("texarea1");

    //asigno el valor del tex area de entrada a una variable, aunque teambien se puede hacer usando ingreso.value
    let textoingresado = ingreso.value;
    
    //1er condicional que controlara la plataforma de manera automatica
    if (textoingresado === ""){
            const eleimg = generarAleatorio(noHayVidaimg.length)
            const eletex = generarAleatorio(noHayVidaimg.length)
            let imgaleatory= noHayVidaimg[eleimg];
            let texaleatory = noHayVidaTex[eletex];

            //asignando los valores a los divs aleatoreos
            divImag.src = imgaleatory;
            divText.innerHTML = texaleatory;   
            
            //funcion de temporizador
            setTimeout(() => repetir(), 5000);

    //este sino es el de la comparativa de textoingresado();
    }else{ 

        /*en este condicional estoy llamando a la funcion de validaciones para saber si es un 
        texto encriptado o un texto a encriptar */
        if(validacion(textoingresado) === "desencriptar"){
            console.log("estoy en condicional de validacion esta validacion es verdadera")

             //imagenes y textos aleatoreos indicanto que si existe actividad usuaria por el lado de desencripciones
            const eleimgvida = generarAleatorio(HayVidaimg.length)
            const eletexvida = generarAleatorio(HayVidaTex.length)
            let imgaleatory1= HayVidaimg[eleimgvida];
            console.log("mostrando el valor de imagen aleatorea ", imgaleatory1);
            let texaleatory1 = HayVidaTex[eletexvida];
            console.log("mostrando el valor de los textos ", texaleatory1)
         
            //asignando los valores a los divs aleatoreos
            divImag.src = imgaleatory1;
            divText.innerHTML = texaleatory1; 

             //desabilitacion del boton codificar para evitar recodificaion de una frase 
             document.getElementById("codifique").disabled = true;
             console.log("deberia haber desabilitado el boton de codificacion ");
              //se crean variables para contar 
              let conta = 0;
              let conta1= 0;
    
             //llamando la funcion repetir desencripta
             repetirdesencripta()

             //se crea una funcion con la condicion para evaluar si se llamo a la funcion para desencritar la palabra 
             function repetirdesencripta(){
                 //crear una variable la cual recibira el codigo de validacion del array de validaciones
                let repitedesencripta = textoentrada.value;
                console.log("estoy en funcion repetirdesencripta mostrando valor de repitedesencripta", repitedesencripta);
                if(repitedesencripta === "DESENCRIPTANDO ⏳"|| repitedesencripta === "DESENCRIPTADO 🔑" ){ 
                    console.log("estoy en la comparativa verdadera de la funcion repetirdesencripta mostrando valor de repitedesencripta", repitedesencripta);

                    //llamando a la funcionrepetirdesencripta1(), para mejorar error de ciclo
                    repetirdesencripta1()

                    //creando la funcion repetirdesencripta1() para ejecutar otro bucle 
                    function repetirdesencripta1() {
                       
                    //va a cambiar el texarea1 a desencriptado
                    document.getElementById("texarea1").value = "DESENCRIPTADO 🔑";
                    console.log ("estoy en la comparativa verdadera de la funcion repetirdesencripta mostrando el valor de texarea1 el cual va a cambias a: DESENCRIPTADO 🔑", );

                     //el boton de decodificado fue accionado
                     console.log(" estamos en la verificacion de el accionamiento del boton decodificado el cual fue accionado");
                     const eleimgdesencripta = generarAleatorio(desencriptaimg.length)
                     const eletexdesencripta = generarAleatorio(desencriptaTex.length)
                     let imgaleatory2= desencriptaimg[eleimgdesencripta];
                     console.log("mostrando el valor de imagen aleatorea ", imgaleatory2);
                     let texaleatory2 = desencriptaTex[eletexdesencripta];
                     console.log("mostrando el valor de los textos ", texaleatory2)
                  
                     //asignando los valores a los divs aleatoreos
                     divImag.src = imgaleatory2;
                     divText.innerHTML = texaleatory2; 
                     console.log("estoy en la verificacion de el accionamiento del boton decodificado el cual fue accionado mostrando imagenes y textos de desencriptado en los divs ");

                     //comparativa para determinar si en este punto el usuario borró el texarea o pego una frase nueva 
                     let repitedesencripta1 = textoentrada.value;
                     console.log("estoy en comparativa de texarea1 para saber si la variable repitedesencripta != DESENCRIPTADO 🔑 si es distinto deberia reiniciar ", repitedesencripta1 );
                     if(repitedesencripta1 != "DESENCRIPTADO 🔑"){
                         //temporizado de reset
                         setTimeout(() => repetir(), 1000);

                    //este sino es el de la comparativa de repetirdecenripta1();
                     }else{
                        //condicional para permitir que los textos y fotos de desencriptado cambien unas 3 veces
                        if(conta <= 3){
                        conta++
                        console.log("incremento de conta", conta);
                        //temporizador retorno a la funcion de desencriptado para dar interactividad de desencirpciones
                        setTimeout(() => repetirdesencripta1(), 5000);
                            
                        //este sino es el de la comparativa del contador de las imagenes desncriptadas();
                        }else{

                        //limpiar el texarea1
                        limpiar("texarea1")
                        
                        console.log("limpiando texarea por primera vez de aqui voy a llamar cambiarPlaceholder(Sistema Activo) y a repetirplaceholde() que debe activarse 4seg despues");

                        //se llama a la funcion para cambiar el placeholder
                        cambiarPlaceholder("Sistema Activo");
                        //se llama a la funcion repetir placeholder para mostrar acticvidad en el texarea de entrada
                        setTimeout(() => repiteplaceholder(), 4000);
                       
                        //funcion repetir para el cambio del placeholder y para determinar si en este punto el usuario ingreso o pego una frase nueva 
                        function repiteplaceholder() {
                        let repitedesencripta2 = textoentrada.value;
                        console.log("en repetir placeholder mostrando el valor de texarea el cual deberia estar vacio por defecto", repitedesencripta2);
                        if(conta1 <= 3 && repitedesencripta2 === "" ){
                        conta1++
                        console.log("en repetir placeholder mostrando el valor de conta1 el cual deberia ser 1" , conta1,"y de aqui deberia llamar  ala funcion placeholder() y deberia hacer un decremento de sg y borrar nuevamente el texarea1");
                        console.log("estoy en la verificacion de la recursividad de repetir placeholder en vecese", conta1)
                        //funcion de temporizador
                         setTimeout(() =>repiteplaceholder() , 4000);
                      
                        
                    //este sino es el de la comparativa que esta entro de la funcion repetirplaceholder();
                    }else{ 
                        //se llama a la funcion repetir que va a llamar a una funcion para limpiar texarea2
                        //funcion de temporizador
                        setTimeout(() => limpiar("texarea2"), 1000);
                        console.log("estoy en la verificacion de el accionamiento del boton decodificado el cual fue accionado limpieza del tex area2 ")
                      
                        //funcion de temporizador repetir para volver al inicio despues de 5seg
                        setTimeout(() => repetir(), 3000);
                        }
                    } 
                } 

            }
         }   
       
                //este sino es el de la comparativa de repetirdecenripta();
                }else{ 
                     
                    //se hace otra comparativa para saber si el texarea1 esta limpio y volver al principio del codigo
                    if (repitedesencripta === "") {
                   
                    console.log("deberia haber llamado a repetir() con retardeo de 2seg ");
                    //funcion de temporizador repetir para volver al inicio despues de 2seg
                    setTimeout(() => repetir(), 2000);

                    //este sino es el de la comparativa de repetirdecenripta() texarea vacia;
                    }else{ 

                        //se llama a la funcion de validaciones para saver si el texto sigue siendo un texto a desencritar, y por parametros le vamos a pasar el valor del texarea1 que esta en este momento

                        if(validacion(repitedesencripta) === "desencriptar"){
                            console.log("estoy en condicional de validacion esta validacion es verdadera")

                          console.log("estamos en comparativa verdadera de la funcion  repetirdesencripta() mostrando imagenes de hayvida[], la variable repetirdescritiva es;",repitedesencripta);
                     
                            //imagenes y textos aleatoreos indicanto que si existe actividad usuaria por el lado de encriptaciones 
                            const eleimgvida = generarAleatorio(HayVidaimg.length)
                            const eletexvida = generarAleatorio(HayVidaTex.length)
                            let imgaleatory1= HayVidaimg[eleimgvida];
                            console.log("mostrando el valor de imagen aleatorea ", imgaleatory1);
                            let texaleatory1 = HayVidaTex[eletexvida];
                            console.log("mostrando el valor de los textos ", texaleatory1)
                
                            //asignando los valores a los divs aleatoreos
                            divImag.src = imgaleatory1;
                            divText.innerHTML = texaleatory1;
                    
                            //funcion de temporizador
                            setTimeout(() => repetirdesencripta(), 3000);

                            //este sino es la parte falsa de validaciones de repetirdesencripta()
                        } else{
                            console.log("estamos en comparativa falsa de la funcion  repetirdesencripta(), la variable repetirdescritiva es;",repitedesencripta);
                            
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
            
        //este sino es el de la comparativa de validaciones;
        }else{
            console.log("estoy en condicional de validacion esta validacion es falsa")

            //imagenes y textos aleatoreos indicanto que si existe actividad usuaria por el lado de encriptaciones 
            const eleimgvida = generarAleatorio(HayVidaimg.length)
            const eletexvida = generarAleatorio(HayVidaTex.length)
            let imgaleatory1= HayVidaimg[eleimgvida];
            console.log("mostrando el valor de imagen aleatorea ", imgaleatory1);
            let texaleatory1 = HayVidaTex[eletexvida];
            console.log("mostrando el valor de los textos ", texaleatory1)
         
            //asignando los valores a los divs aleatoreos
            divImag.src = imgaleatory1;
            divText.innerHTML = texaleatory1; 

               //desabilitacion del boton decodificar para evitar recodificaion de una frase 
               document.getElementById("decodifique").disabled = true;
               console.log("deberia haber desabilitado el boton de decodificacion ");

            //creamos una variable contadora local 
             let conta2 = 0;
             let conta3= 0;
             //llamando la funcion repetirencripta
             repetirencripta()

             //se crea una funcion con la condicion para evaluar si se llamo a la funcion para desencritar la palabra 
             function repetirencripta(){
             //crear una variable la cual recibira el codigo de validacion del array de validaciones
             let repiteEncripta = textoentrada.value;
             console.log("estoy en funcion repetirdesencripta mostrando valor de repitedesencripta", repiteEncripta);
                if(repiteEncripta === "ENCRIPTANDO ⏳"|| repiteEncripta === "ENCRIPTADO 🔐" ){ 
                    console.log("estoy en la comparativa verdadera de la funcion repetirdesencripta mostrando valor de repitedesencripta", repiteEncripta);

                    //llamando a la funcionrepetirencripta1(), para mejorar error de ciclo
                    repetirencripta1()

                    
                    //creando la funcion repetirencripta1() para ejecutar otro bucle 
                    function repetirencripta1() {

                    //va a cambiar el texarea1 a encriptado
                   document.getElementById("texarea1").value = "ENCRIPTADO 🔐";
                   console.log ("estoy en la comparativa verdadera de la funcion repetirencripta mostrando el valor de texarea1 el cual va a cambiar a: ENCRIPTADO 🔐", );

                     //el boton de codificado fue accionado
                     console.log(" estamos en la verificacion de el accionamiento del boton decodificado el cual fue accionado");
                     const eleimgencripta = generarAleatorio(encriptadoimg.length)
                     const eletexencripta = generarAleatorio(encriptadoTex.length)
                     let imgaleatory3= encriptadoimg[eleimgencripta];
                     console.log("mostrando el valor de imagen aleatorea ", imgaleatory3);
                     let texaleatory3 = encriptadoTex[eletexencripta];
                     console.log("mostrando el valor de los textos ", texaleatory3);
                  
                     //asignando los valores a los divs aleatoreos
                     divImag.src = imgaleatory3;
                     divText.innerHTML = texaleatory3; 
                     console.log("estoy en la verificacion de el accionamiento del boton decodificado el cual fue accionado mostrando imagenes y textos de desencriptado en los divs ");

                       //comparativa para determinar si en este punto el usuario borró el texarea o pego una frase nueva 
                       repiteEncripta = textoentrada.value;
                       console.log("estoy en comparativa de texarea1 para saber si la variable repitedesencripta != ENCRIPTADO 🔐 si es distinto deberia reiniciar ", repiteEncripta  );
                       if(repiteEncripta  != "ENCRIPTADO 🔐"){
                           //temporizado de reset
                           setTimeout(() => repetir(), 1000);
  
                       }else{
  
                          //condicional para permitir que los textos y fotos de encriptado cambien unas 3 veces
                          if(conta2 <= 3){
                          conta2++
                          console.log("incremento de conta", conta2);
                          //temporizador retorno a la funcion de encriptado para dar interactividad de desencirpciones
                          setTimeout(() => repetirencripta1(), 5000);
  
                          }else{
  
                          //limpiar el texarea1
                          limpiar("texarea1")
                          
                          console.log("limpiando texarea por primera vez de aqui voy a llamar cambiarPlaceholder(Sistema Activo) y a repetirplaceholde() que debe activarse 4seg despues");
  
                          //se llama a la funcion para cambiar el placeholder
                          cambiarPlaceholder("Sistema Activo");
                          //se llama a la funcion repetir placeholder para mostrar acticvidad en el texarea de entrada
                          setTimeout(() => repiteplaceholder(), 4000);
                         
                          //funcion repetir para el cambio del placeholder y para determinar si en este punto el usuario ingreso o pego una frase nueva 
                          function repiteplaceholder() {
                          let repitedesencripta2 = textoentrada.value;
                          console.log("en repetir placeholder mostrando el valor de texarea el cual deberia estar vacio por defecto", repitedesencripta2);
                          if(conta3 <= 3 && repitedesencripta2 === "" ){
                          conta3++
                          console.log("en repetir placeholder mostrando el valor de conta1 el cual deberia ser 1" , conta3,"y de aqui deberia llamar  ala funcion placeholder() y deberia hacer un decremento ");
                          console.log("estoy en la verificacion de la recursividad de repetir placeholder en vecese", conta3)
                          //funcion de temporizador
                           setTimeout(() =>repiteplaceholder() , 4000);
                        
                          
                      }else{ 
                          //se llama a la funcion repetir que va a llamar a una funcion para limpiar texarea2
                          //funcion de temporizador
                          setTimeout(() => limpiar("texarea2"), 1000);
                          console.log("estoy en la verificacion de el accionamiento del boton decodificado el cual fue accionado limpieza del tex area2 ")
                        
                          //funcion de temporizador repetir para volver al inicio despues de 5seg
                          setTimeout(() => repetir(), 3000);
                        }
                    } 
                }
            }
        }   
        
                  }else{ 
                       
                      //se hace otra comparativa para saber si el texarea1 esta limpio y volver al principio del codigo
                      if (repiteEncripta === "") {
                     
                      console.log("deberia haber llamado a repetir() con retardo de 2seg ");
                      //funcion de temporizador repetir para volver al inicio despues de 2seg
                      setTimeout(() => repetir(), 2000);

                     //este sino es el de la comparativa de repetirenripta() texarea vacia;
                 }else{ 

                     //se llama a la funcion de validaciones para saver si el texto sigue siendo un texto a desencritar, y por parametros le vamos a pasar el valor del texarea1 que esta en este momento

                     if(validacion(repiteEncripta) === "desencriptar"){
                        console.log("estoy en condicional de validacion esta validacion es verdadera")

                        console.log("estamos en comparativa verdadera de la funcion  repetirencripta(), la variable repetirecritiva es;",repiteEncripta);
                             //habilitacion del boton decodificar para decodificaion de una frase 
                             document.getElementById("decodifique").disabled = false;
                             console.log("deberia haber habilitado el boton de decodificacion ");

                             //en este punto tambien se debe volver a bloquear el boton de encriptacion para evitar que se encripte nuevamente
                            
                             //desabilitacion del boton codificar para evitar recodificaion de una frase 
                             document.getElementById("codifique").disabled = true;
                             console.log("deberia haber desabilitado el boton de codificacion ");

                            //se supone que el texto ingresado en este punto es una frase para desencriptar por ende se llamara a la funcion repetirdesencripta();
                            repetirdesencripta();

                    
                    //este sino es la parte falsa de validaciones de repetirencripta()
                    }else{
                     
                            //imagenes y textos aleatoreos indicanto que si existe actividad usuaria por el lado de encriptaciones 
                            const eleimgvida = generarAleatorio(HayVidaimg.length)
                            const eletexvida = generarAleatorio(HayVidaTex.length)
                            let imgaleatory1= HayVidaimg[eleimgvida];
                            console.log("mostrando el valor de imagen aleatorea ", imgaleatory1);
                            let texaleatory1 = HayVidaTex[eletexvida];
                            console.log("mostrando el valor de los textos ", texaleatory1)
                
                            //asignando los valores a los divs aleatoreos
                            divImag.src = imgaleatory1;
                            divText.innerHTML = texaleatory1;
                    
                            //funcion de temporizador
                            setTimeout(() => repetirencripta(), 3000);
                        }
                        }
                    }
                }
            }
        }
    }

    //se espera en cualquier momento hacer uso del boton de copiado 



                 //SECCION DE FUNCIONES
    
//se crea la funcion de copiado a ttraves del boton de copiar
function btn(){
    let tomar = document.getElementById("texarea2");
    let titulo = document.getElementById("parrafo");

    tomar.select();
    document.execCommand("copy");
    titulo.innerHTML = " El Texto que proviene del ingreso se copiado🖱 " ;
    //se genero este numero para no crear una funcion y asi aplicar un temporizado
    setTimeout(() => titulo.innerHTML = "Aqui 👇 Aparecera el Texto Encriptado 🔐 o Dencriptado 🔑", 3000);
}

//creando una funcio para escoger un dato aleatoreo
function generarAleatorio(tamaño) {
    return Math.floor(Math.random()*tamaño);
}


/* creamos una funcio llamada validacion vamos a crear un bucle for para recorrer arry de validaciones 
 para determinar si la frase que se ingresa esta encriptada o no*/
function validacion(palabra) {
    let palabra1 = "falso";
    console.log("estoy mostando el valor del parametro en funcion valdaciones", palabra)
    for(let i=0; i < validaciones.length; i++){
        console.log("estoy recorriendo array de validaciones", validaciones[i])
    //en esta variable vamos a arrojar el valor del texarea1
        if(palabra.includes(validaciones[i])){
            palabra1 = "desencriptar";
            console.log("estoy dentro de validadciones si incluye el la validacion, la varable palabra1 es: ", palabra1, "la clave esta en la posicion:", i ) 
        }
    }  
    return palabra1;
}


//se crea funcion del boton decodifique 
function botondesencripta(){
    const ingresar = desencripta(textoentrada.value);
    comparadesencripta();
    //se coloca un tiempo para que salga el resultado en texarea2
    setTimeout(() => textosalida.value = ingresar, 3000);
    
}


// se crea funcion desencriptar
function desencripta(palabra) {
    for(let i=0; i < clave.length; i++){
        if(palabra.includes(clave[i][1])){
       palabra = palabra.replaceAll(
        clave[i][1],clave[i][0],)
        if(palabra.includes(validaciones[i])){
            palabra = palabra.replaceAll(
                validaciones[i],validaciones[4],) ;
            console.log("estoy dentro de validadciones si incluye el la validacion, la varable palabra1 es: ", palabra, "la clave esta en la posicion:", i ); 
        }
        } 
    } 
    return palabra;
}


//se crea una funcion limpiar, que va a limpiar los texarea
function limpiar(id) {
     document.getElementById(id).value = ""; 
}


//funcion para comparar desencripta
function comparadesencripta() {
    document.getElementById("texarea1").value = "DESENCRIPTANDO ⏳"; 
    console.log ("estoy en funcion repetirdesencripta mostrando el valor de texarea1 el cual va a cambias a: DESENCRIPTANDO ⏳" );
 }


 //funcion para cuando se accione el boton de encriptacion
 function botonencripta(){
    const ingresar = encripta(textoentrada.value);
    comparaencripta()
    textosalida.value = ingresar;
}
function encripta(palabra) {
    let enigma = "";
    for(let i=0; i < clave.length; i++){
        if(palabra.includes(clave[i][0])){
       palabra = palabra.replaceAll(
        clave[i][0],clave[i][1])
     }
   }
     enigma = generarAleatorio(validaciones.length);
     let texaleatory4= validaciones[enigma];
     palabra = texaleatory4 + palabra
     console.log("estoy dentro de validadciones si incluye el la validacion, la varable palabra1 es: ", palabra); 
     return palabra;
}

 //funcion para comparar encripta
function comparaencripta() {
    document.getElementById("texarea1").value = "ENCRIPTANDO ⏳"; 
    console.log ("estoy en funcion repetirdesencripta mostrando el valor de texarea1 el cual va a cambias a: DESENCRIPTANDO ⏳" );
 }

 //funcion par cambiar el texto del placeholder
 function cambiarPlaceholder(texto) {
    var textarea = document.getElementById("texarea1");
    textarea.placeholder = texto;
  }


