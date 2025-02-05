// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/*Crear la lógica que permita al usuario ingresar el nombre de una persona, 
el programa deberá validar que el nombre ingresado no sea una cadena vacía y 
que contenga solo letras. Deberá permitir ingresar varios nombres y agregarlos 
a una lista de nombres, la cual se deberá mostrar en el archivo index.html. 
También deberá  realizar un sorteo aleatorio y determinar quién es el "amigo secreto". 
El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". 
Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, 
un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando 
el resultado en pantalla. */

let nombres = [];
let amigoSecreto = "";
let inputNombre = document.getElementById("amigo");
let botonAgregar = document.getElementById("agregar");
let botonSortear = document.getElementById("sortear");
let listaNombres = document.getElementById("lista-nombres");
let amigo = document.getElementById("amigo-secreto");

botonAgregar.addEventListener("click", () => {
  let nombre = inputNombre.value;
  if (nombre === "" || !validarNombre(nombre)) {
    alert("Nombre no válido");
  } else {
    nombres.push(nombre);
    listaNombres.innerHTML = "";
    nombres.forEach((nombre) => {
      let li = document.createElement("li");
      li.textContent = nombre;
      listaNombres.appendChild(li);
    });
    inputNombre.value = "";
  }
}
