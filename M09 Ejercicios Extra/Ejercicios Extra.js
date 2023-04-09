/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let arregloPadre = [];
   let propiedades = Object.keys(objeto); //defino lel arreglo de propiedades
   let valoresArreglo = Object.values (objeto); //accedo a los valores del arreglo

   //recorro cada una de los arreglos y los adjunto como pareja de arreglos en el ppal

   for (i = 0; i < propiedades.length; i++){
      arregloPadre.push([propiedades[i], valoresArreglo[i]]);
   }

   console.log(arregloPadre);
   return(arregloPadre);

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let arregloString = string.split('');
   arregloString.sort(); //orden ascendente

   let objetoFinal = {};
   let sumaLetras = 1;
   let pos = 0;

   for (i = 1 ; i<=arregloString.length; i++){
     
      if (arregloString[pos] === arregloString[i]) {
        sumaLetras++;
      } else { //ingreso la variable y el contador al objeto.
         objetoFinal[arregloString[pos]]=sumaLetras;
         pos = i;
         sumaLetras=1;
      }
       
   }
   return(objetoFinal);

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
let minusculas  = [];
let mayusculas = [];

   function esMayuscula(letra)
{
    return letra === letra.toUpperCase();
}

function esMinuscula(letra)
{
    return letra === letra.toLowerCase();
}   


for(var index = 0; index < string.length; index++)
{
    var letraActual = string.charAt(index);
    if(esMayuscula(letraActual))
    {
        mayusculas.push(letraActual);
    }

    if(esMinuscula(letraActual))
    {
       minusculas.push(letraActual);
    }       
} 

return (mayusculas.join('') + minusculas.join(''));

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   let fraseFinal = [];
   let st = 0;
   let j;

  for (i = 0; i < frase.length; i++) {

       if (frase.charAt(i) === ' ') {
           j = i - 1;
           recorrer();
           fraseFinal.push(' ');
           st = i + 1;
       }

       if (i+1  === frase.length) {
           j = i;
           //console.log(j);
           recorrer();
       }

       function recorrer() {
           //console.log(i);
           for (j; j >= st; j = j - 1) {
               //console.log(j);
               fraseFinal.push(frase.charAt(j));
           }
       }


   }


   //console.log(fraseFinal.join(''));
   return (fraseFinal.join(''));

}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
