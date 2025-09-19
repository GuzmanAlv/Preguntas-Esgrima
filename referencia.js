document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("comenzar1");
  const pregunta = document.getElementById("pregunta");

  // Copia barajada del array
  let preguntasPendientes = shuffleArray([...referencias]);

  btn.addEventListener("click", function () {
    // Si ya no quedan, volvemos a barajar
    if (preguntasPendientes.length === 0) {
      alert("¡Has respondido todas las preguntas! Se reiniciará la lista.");
      preguntasPendientes = shuffleArray([...referencias]);
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
const referencias = [
  "Pregunta de referencia, de acuerdo con Lucas 1:6 – 2",
  "Pregunta de referencia, según Lucas 1:12 – 5",
  "Pregunta de referencia, de acuerdo con Lucas 1:19 – 8",
  "Pregunta de referencia, según Lucas 1:37 – 15",
  "Pregunta de referencia, según Lucas 1:64 – 18",
  "Pregunta de referencia, de acuerdo con Lucas 2:7 – 24",
  "Pregunta de referencia, de acuerdo con Lucas 2:21 – 27",
  "Pregunta de referencia, de acuerdo con Lucas 3:3 – 31",
  "Pregunta de referencia, de acuerdo con Lucas 3:19 – 34",
  "Pregunta de referencia, de acuerdo con Lucas 4:36. – 42",
  "Pregunta de referencia, según Lucas 5:10 – 46",
  "Pregunta de referencia, según Lucas 5:19 – 48",
  "Pregunta de referencia, de acuerdo con Lucas 5:31. – 49",
  "Pregunta de referencia, de acuerdo con Lucas 6:3 – 56",
  "Pregunta de referencia, de acuerdo con Lucas 7:2 – 61",
  "Pregunta de referencia, de acuerdo con Lucas 7:14 – 65",
  "Pregunta de referencia, de acuerdo con Lucas 7:50 – 68",
  "Pregunta de referencia, de acuerdo con Lucas 9:35 – 83",
  "Pregunta de referencia, de acuerdo con Lucas 10:5 - 88",
  "Pregunta de referencia, de acuerdo con Lucas 10:40 – 93",
  "Pregunta de referencia, de acuerdo con Lucas 11:6 – 95",
  "Pregunta de referencia, de acuerdo con Lucas 11:25 - 99",
  "Pregunta de referencia, de acuerdo con Lucas 13:2 – 114",
  "Pregunta de referencia, de acuerdo con Lucas 13:25 – 119",
  "Pregunta de referencia, de acuerdo con Lucas 14:2 – 123",
  "Pregunta de referencia, de acuerdo con Lucas 14:16 – 126",
  "Pregunta de referencia, de acuerdo con Lucas 14:22 – 129",
  "Pregunta de referencia, de acuerdo con Lucas 17:17 – 153",
  "Pregunta de referencia, de acuerdo con Lucas 18:25 – 164",
  "Pregunta de referencia, de acuerdo con Lucas 18:41 – 167",
  "Pregunta de referencia, de acuerdo con Lucas 18:43 – 169",
  "Pregunta de referencia, de acuerdo con Lucas 19:2 – 170",
  "Pregunta de referencia, de acuerdo con Lucas 19:7 – 173",
  "Pregunta de referencia, de acuerdo con Lucas 19:18 – 176",
  "Pregunta de referencia, de acuerdo con Lucas 20:45 – 190",
  "Pregunta de referencia, de acuerdo con Lucas 23:46 – 216",
  "Pregunta de referencia, de acuerdo con Lucas 24:6 – 221",
  "Pregunta de referencia, de acuerdo con Lucas 24:26 – 225",
];
console.log(referencias.length);
