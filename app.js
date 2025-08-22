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
    /*se recorre el array y se crean las filas para cada nombre
    se usa el forEach porque es más eficiente para recorrer un array. Además se hace uso de
    una función tipo flecha =>{} (es anónima), la función recibe un parámetro que en este caso
    se denomina "nombre" y "nombre" recibe el valor de la posición del array en cada vuelta 
    para que la función tipo flecha pueda representarlo uno a uno
    El método forEach, siempre parte con el nombre del array que va a recorrer y recibe una
    función como argumento y la función debe tener por lo menos 1 parámetro en forma obligatoria
    su sintáxis es esta: array.forEach(function(parámetro){}); */
    ingresoAmigos.forEach(nombre => {
        //esta línea crea cada iteración una nueva fila en HTML
        let li = document.createElement('li');
        /*en esta línea se le pasa a la etiqueta li recién creada, el valor de la 
        posición en la que se encuentre la iteración del forEach*/
        li.textContent = nombre;
        /*en esta línea el método appendChild(), crea un hijo a un nodo padre
        en este caso, a la variable sellecionLista que en realidad hace referencia 
        a la lista ul con id = 'listaAmigos' que está escrita en el código HTML
        y le dice que cree un nuevo elemento con etiqueta <li> y con el valor
        que corresponda a cada iteración que gamos en el forEach*/
        seleccionaLista.appendChild(li);
    });

    // se limpia el input después de cada ingreso
    seleccionaInput.value = '';
    seleccionaInput.focus();
}
 
function sortearAmigo() {
    // 1. Se debe validar que el array no esté vacío.
    if (ingresoAmigos.length === 0) {
        alert("¡No hay amigos en la lista para sortear! Agrega al menos uno.");
        return; // Detiene la ejecución de la función si no hay participantes
    }

    // 2. Genera un índice aleatorio usando Math.random() y Math.floor().
    let indiceAleatorio = Math.floor(Math.random() * ingresoAmigos.length);

    // 3. Utiliza el índice aleatorio para acceder al dato correspondiente en el array.
    let valorObtenido = ingresoAmigos[indiceAleatorio];

    // 4. Obtiene las referencias a los elementos del HTML que se van a modificar.
    let listaAmigosUI = document.getElementById('listaAmigos');
    let resultadoUI = document.getElementById('resultado');
    let botonSorteo = document.querySelector('.button-draw');

    // 5. La lista <ul> id="listaAmigos" debe desaparecer.
    listaAmigosUI.style.display = 'none';

    // 6. Muestra el resultado utilizando document.getElementById() y innerHTML.
    resultadoUI.innerHTML = `<li>el amigo secreto es: ${valorObtenido}</li>`;

    // 7. Se debe deshabilitar el botón que origina esta acción.
    /*botonSorteo.disabled = false;
    botonSorteo.textContent = "Sorteo Finalizado";*/
}



     



