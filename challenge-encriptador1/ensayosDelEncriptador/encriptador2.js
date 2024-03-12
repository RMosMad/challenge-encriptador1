encriptar();
asignar(encriptar());



//1- cuador de funciones 


//funcion que obtine el valor ingresado por el usuario 
function encriptar() {
    //document.getElementById("encritado").value;
    let encripta ="miguel gomez";
    return encripta;
}

//funcion que asigna la codificacion 
function asignar(texto) {
    let consonantes = "bcdfghjklmnñpqrstvwxyz";
    let letra= "";
    let code = "";
    for(let i = 0; i < texto.length; i++){
        if(texto[i] =="a"){
            letra = "ai";
            code = code + letra;
        }else{
            if(texto[i] =="e"){
                letra = "enter";
                code = code + letra;
            }else{
                if(texto[i] =="i"){
                    letra = "ines";
                    code = code + letra;
                }else{
                    if(texto[i] =="o"){
                        letra = "ober";
                        code = code + letra;
                    }else{
                        if(texto[i] =="u"){
                            letra = "ufat";
                            code = code + letra;
                        }else{
                            if(texto[i] ==" "){
                                letra = " ";
                                code = code + letra;
                            }else{
                            if(consonantes.includes(texto[i])){
                                letra = texto[i];
                                code = code + letra;
                            }else{
                                alert("Error usted Ingreso datos erroneos: Recuerde ingresar solo letras minusculas");
                                    throw Error(limpiarTexarea1());
                            }   }
                        }
                    }
                }
            }
        }

    }
    return console.log(code);
}

//funcion para resetar el sistema, por error de datos 
function limpiarTexarea1() {
    document.getElementById("encritado").value = " ";
    
}

