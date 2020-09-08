export class Funciones{



    caracteresTexto(text){
        return text.length;
    }
    
    
    recorteTexto(text,numeroCaracteres){
        return text.substring(0,numeroCaracteres);
    }
    
    
    
    separarTexto(text,separar){
        const array = text.split(separar);
        return array;
    }
    
    
    
    repetirTexto(text, numeroVeces){
        return text.repeat(numeroVeces);
    }
}