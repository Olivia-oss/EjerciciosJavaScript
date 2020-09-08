

export class Funciones{

    caracteresTexto = (text="")=>
    (!text)
    ?console.warn("No ingresos texto")
    :console.log("Numeros de caracteres:",text.length);
    
    recorteTexto = (text="",numeroCaracteres)=>
        (!isNaN(text))
        ?console.warn("No ingresos texto")
        :(numeroCaracteres != undefined)
            ?console.log("Texto selecionado: "+ text.substring(0,numeroCaracteres))
            :console.warn("No ingreso longitud");
    
    
    
    separarTexto = (text="",separar = undefined)=>
        (text.length <= 1 )
        ?console.warn("No ingresos texto")
        :(separar != undefined)
            ?console.log("Texto separado: "+  text.split(separar))
            :console.warn("No ingreso separador"); 

    
    
    
    repetirTexto = (text="", numeroVeces=undefined)=>
        (!isNaN(text))
        ?console.warn("No ingresos texto")
        :(numeroVeces != undefined)
            ?console.log("Repiticion de texto: "+ text.repeat(numeroVeces))
            :console.warn("No ingreso numero de veces repetidas"); 
    
}