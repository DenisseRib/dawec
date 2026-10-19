function ejercicio5() {
  let notasDiez = [0, 1, 4, 2, 4, 6, 7, 8, 3, 10, 4, 6, 8, 4, 7];
  let aprobados = notasDiez.filter(nota => nota >5);
  console.log(notasDiez);
  console.log(aprobados);
}ejercicio5()

function ejercicioPalabras(){
   let palabras = ["hola" , "que tal" , "adios" , "chao" , "gusbai" ]; 
   let solo6 = palabras.filter(palabras => palabras.length<6);
    console.log(palabras);
    console.log(solo6);

}ejercicioPalabras()

function ejercicioMedia() {
    let notasDiez = [0, 1, 4, 2, 4, 6, 7, 8, 3, 10, 4, 6, 8, 4, 7];
  let sumaNotas = notasDiez.reduce((valorAnt, valorAct) => valorAnt + valorAct , 0);
  let media = sumaNotas/ notasDiez.length;
  console.log(media);
} ejercicioMedia()
