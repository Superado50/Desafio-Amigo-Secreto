/*El principal objetivo de este desafío es fortalecer
tus habilidades en lógica de programación. Aquí deberás 
desarrollar la lógica para resolver el problema.*/
let ingresoAmigos = [];

function agregarAmigo() {
    //se obtienen las referencias de los elementos HTML
    let seleccionaInput = document.querySelector('.input-name');
    let seleccionaLista = document.getElementById('listaAmigos');
    //se obtiene el valor ingresado en el input
    let nuevoAmigo = seleccionaInput.value.trim();
    //se valida si el input está vacío y se genera alert para solicitar ingreso de datos
    if(nuevoAmigo === ''){
        alert('Por favor inserte un nombre');
        return;
    }
    
// se agrega un nuevo dato dentro del array
ingresoAmigos.push(nuevoAmigo);
//se limpia el contenido de la lista para evitar duplicados
seleccionaLista.innerHTML = '';
//se recorre el array y se crean las filas para cada nombre
ingresoAmigos.forEach(nombre => {
    let li = document.createElement('li');
    li.textContent = nombre;
    seleccionaLista.appendChild(li);
});

// se limpia el input después de cada ingreso
seleccionaInput.value = '';
seleccionaInput.focus();

}
 

function sortearAmigos(){

}



     



