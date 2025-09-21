document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("comenzar1");
  const pregunta = document.getElementById("pregunta");

  // Copia barajada del array
  let preguntasPendientes = shuffleArray([...situacion]);

  btn.addEventListener("click", function () {
    // Si ya no quedan, volvemos a barajar
    if (preguntasPendientes.length === 0) {
      alert("¡Has respondido todas las preguntas! Se reiniciará la lista.");
      preguntasPendientes = shuffleArray([...situacion]);
    }

    // Sacamos la primera de la lista pendiente
    const preguntaActual = preguntasPendientes.shift();
    pregunta.innerHTML =  preguntaActual;
  });

  // Función para barajar (Fisher–Yates)
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
});
const situacion = [
"¿Quién lo dijo y a quién?: Tu -   6",
"¿Quién lo dijo y a quién?: No tengan -  25",
"¿Quién lo dijo y a quién?: ¿Por qué - 29",
"¿Quién lo dijo y a quién?: ¡Adorarás  -  39",
"¿Quién lo dijo y a quién?: ¿Acaso -  58",
"Quién lo dijo, a quién, y cuál fue la respuesta?: - ¿Cómo 72",
"¿Quién lo dijo y a quién?:  Cuídense -   104",
"¿Quién lo dijo y a quién?: ¡Necio! - 107",
"¿Quién lo dijo y en respuesta a qué? - 118",
"¿Quién lo dijo, a quién y cuál fue la respuesta?: ¿Está - 125",
"¿Quién lo dijo, a quién y cuál fue la respuesta?: Maestro - 162",
"¿Quién lo dijo, a quién y cuál fue el resultado? - 168",
"¿Quién lo dijo, cuándo y por qué? - 180",
"¿Quién lo dijo, a quién y cuándo?: Entonces - 188",
"¿Quién lo dijo, a quién y cuándo?: Esta - 203",
"¿Quién lo dijo a quién y sobre quién? - 212",

];
console.log(situacion.length);
