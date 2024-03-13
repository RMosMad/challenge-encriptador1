 // document.getElementById("obtener");


 //ARRAYS

 const clave = [
    ["e", "enter"],
    ["i", "ines" ],
    ["a", "ai"   ],
    ["o", "ober" ],
    ["u", "ufo"  ],
    [" ",  " "   ],
];

const validaciones = [
    ["crtx ",  " "],["chck ",  " "],["rknn ",  " "],["blck ",  " "]
];

//MAS DATOS A INGRESAR

/*palabras a meter como encritadas
- "rknn enterntenterr"
- "blck caisai"
- "chck coberminesdai"
- "crtx gaitober"*/


 /*let obtener="chck coberminesdai";
 let obtener1= obtener;

 if(validacion(obtener)==="desencriptar"){
    console.log("chupame la pinga ");
    console.log(botondesencripta());
 }else{
    console.log("vete a la mierda ");
 }*/
 
 
/*-----------------------------------------------------------------------------------------------------------------*/

                                    //SECCION DE FUNCIONES
                                    
/*-----------------------------------------------------------------------------------------------------------------*/

                                  //FUNCION DE VALIDACIONES 

 /* creamos una funcio llamada validacion vamos a crear un bucle for para recorrer arry de validaciones 
 para determinar si la frase que se ingresa esta encriptada o no*/
function validacion(palabra) {
    let palabra1 = "falso";
    console.log("estoy mostando el valor del parametro en funcion valdaciones", palabra)
    for(let i=0; i < validaciones.length; i++){
        console.log("estoy  recorriendo el array de validaciones:", validaciones[i])
    //en esta variable vamos a arrojar el valor del texarea1
        if(palabra.includes(validaciones[i][0])){ 
            palabra1 = "desencriptar";
            console.log("estoy en la comparativa verdadera de validadciones si incluye el la validacion",validaciones[i],"en la posicion:", i, " del array, la varable palabra1 es: ", palabra1); 
        } 
    }  
    return palabra1;
}

/*-----------------------------------------------------------------------------------------------------------------*/


                              //BOQUE DE FUNCIONES DE DESENCRIPTADO

//se crea funcion del boton decodifique 
function botondesencripta(){
    const ingresar = limpiavalidacio(obtener);
    console.log("estoy en ingresar valor",ingresar);
    const ingresar1 = desencripta(ingresar);
    console.log("estoy en ingrasear1 valor ",ingresar1);
    comparadesencripta();
    //se coloca un tiempo para que salga el resultado en texarea2
    //setTimeout(() => textosalida.value = ingresar, 3000);
    console.log(setTimeout(() => ingresar1, 3000)); 
}

// se crea funcion limpiar validacion 
function limpiavalidacio(palabra) {
    for(let i=0; i < clave.length; i++){
    console.log("estoy en funcion limpiavalidacio mostrando el valor real de la palabra ingresada", palabra);
    if(palabra.includes(validaciones[i][0])){
        console.log("estoy imprimiendo palabra valor", palabra);
        const palabra1 = palabra.slice(5)
         return palabra1
      }        
    } 
  }  

  // se crea funcion desencriptar
  function desencripta(palabra) {
    for(let i=0; i < clave.length; i++){
        if(palabra.includes(clave[i][1])){
       palabra = palabra.replaceAll(
        clave[i][1],
        clave[i][0]
        
         )
     }
    }
    return palabra;
}

//funcion para comparar desencripta
function comparadesencripta() {
    //document.getElementById("texarea1").value = "DESENCRIPTANDO ⏳"; 
    obtener1 = "DESENCRIPTANDO ⏳"; 
    console.log ("estoy en funcion repetirdesencripta mostrando el valor de texarea1 el cual va a cambias a: DESENCRIPTANDO ⏳", obtener1 );
 }

 /*_____________________________________________________________________________________________ */

 //const valida = document.getElementById("texarea1");
let valida = " rknn caisai";


function botonencripta(){
    const ingresar = encripta(valida);
    console.log(ingresar);
}

function encripta(palabra) {
    for(let i=0; i < clave.length; i++){
        if(palabra.includes(clave[i][0])){
       palabra = palabra.replaceAll(
        clave[i][0],
        clave[i][1]
         )
     }
    }
    return palabra;
}

//se crea funcion del boton decodifique 
function botondesencripta(){
    const ingresar = desencripta(ingreso.value);
    textosalida.value = ingresar;
}


// se crea funcion desencriptar

function desencripta(palabra) {
    for(let i=0; i < clave.length; i++){
        if(palabra.includes(clave[i][1])){
       palabra = palabra.replaceAll(
        clave[i][1],
        clave[i][0]
        
         )
     }
    }
    return palabra;
}

let textoentradavalue = ""
//console.log(contieneMayusculas(textoentradavalue))
function contieneMayusculas(palabra) {
    /[A-Z]/.test(palabra);
    if(palabra){
         return console.log("contiene mayusculas");
    }
    /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(palabra);
    if(palabra){
        return console.log("contiene Caracteres");
    }
   
   }
   function contieneCaracter(str) {
    return  /[`!@#$%^&*()_°+\-=\[\]{};':"\\|,.<>\/?~]/.test(str);
   }
   const hola = "java/**/)=&%$script"
   const holeee = "PHP"
   const claro = "Cod*/1|°$#"

   if(contieneCaracter(holeee)){
         console.log("en hola estamos finos")
   
   }else{
    console.log("en hola no tine caracteres especiales")
   }

   function contieneMayusculas(str) {
    return /[A-ZáéíóúüñÁÉÍÓÚÜÑ]/.test(str);
   }
   
   console.log(contieneMayusculas("javáscript")); // false
   console.log(contieneMayusculas("php")); // true
   console.log(contieneMayusculas("coding")); // true
   


/*function anulaMayusculas(validacion) {
    const texto = validacion;
    const comparativa =/[A-ZÁÉÍÓÚÜÑ]/g; // Expresión regular para palabras con al menos una letra mayúscula
    const plbMayusculas = texto.match(comparativa); // Encuentra todas las palabras con al menos una letra mayúscula
    console.log("estoy en el array de mayusculas ", plbMayusculas);
    let mayusculas="";
        if (plbMayusculas) {
        const resp = plbMayusculas.join(', ');
        console.log('Palabras con al menos una letra mayúscula:', resp)
        mayusculas = "mayusculas";
       return setTimeout(() => mayusculas, 2000);

    } else {

        console.log('No hay palabras con mayúsculas');
        mayusculas = "falso";
        return mayusculas;
    }
    
 }*/


 
