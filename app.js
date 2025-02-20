let listaAmigos = [];

function agregarElementoLista(nombre) {
    let listaHTML = document.getElementById("listaAmigos"); // Seleccionamos la lista <ul>
    let nuevoElemento = document.createElement("li"); // Creamos un nuevo <li>
    nuevoElemento.textContent = nombre; // Asignamos el texto del nombre
    listaHTML.appendChild(nuevoElemento); // Agregamos el <li> a la lista
    return;
}

function borrarLista(){
    document.querySelector("ul").innerHTML = ''; 
    return;

}

function sortearAmigos() {
    if (listaAmigos.length === 0) {
        modificacionElemento('h2', 'No hay amigos para sortear');
        return;
    }

        let indiceAleatorio = Math.floor(Math.random()*listaAmigos.length);
        let amigoAleatorio = listaAmigos[indiceAleatorio];
        borrarLista();
        // Selecciona el elemento donde mostrarás el nombre
        let resultado = document.getElementById("resultado");
        
        resultado.textContent = `El amigo secreto es: ${amigoAleatorio}`;
        listaAmigos=[]
        
    

   return;
}



function limpiarInput(){
    document.querySelector('#amigo').value= ''; 
    return;
}
    
function modificacionElemento(elemento, texto){
    let elementohtml = document.querySelector(elemento);
    elementohtml.innerHTML = texto;
    return; 
}

function botonAñadir(){
    let nombre = document.getElementById("amigo").value;
    if (nombre.trim() === ''){
        modificacionElemento('h2', 'Por favor, inserta un nombre.');
        return;
    }
    else {
        limpiarInput();
        agregarElementoLista(nombre);
        modificacionElemento('h2', 'Escribe otro nombre');
        listaAmigos.push(nombre);
        return;
    }   
    
}
  




