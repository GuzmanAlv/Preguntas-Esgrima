document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("comenzar");
  const pregunta = document.getElementById("pregunta");

  // Copia barajada del array
  let preguntasPendientes = shuffleArray([...generales]);

  btn.addEventListener("click", function () {
    // Si ya no quedan, volvemos a barajar
    if (preguntasPendientes.length === 0) {
      alert("¡Has respondido todas las preguntas! Se reiniciará la lista.");
      preguntasPendientes = shuffleArray([...generales]);
    }

    // Sacamos la primera de la lista pendiente
    const preguntaActual = preguntasPendientes.shift();
    pregunta.innerHTML = "Pregunta General<br>" + preguntaActual;
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

const generales = [
  "¿Qué les...? 184",
  "¿Qué ha llegado..? 185",
  "¿Quiénes cayeron …? 186",
  "¿De las ..? 187",
  "¿Cómo llama..? 189",
  "¿Quienes echaban…? 191",
  "¿Que vio…? 192",
  "¿Que echó…? 193",
  "¿Qué habrá…? 194",
  "¿Cómo verán…? 195",
  "¿Qué no pasará…? 196",
  "¿Para que…? 197",
  "¿Quienes buscaban…? 198",
  "¿Quien fue con…? 199",
  "¿Qué acordaron…? 200",
  "¿A quienes envió…? 201",
  "¿Qué está…? 204",
  "¿Ante quien…? 205",
  "¿Según la…? 206",
  "¿Que no encontró…? 208",
  "¿A la juri…? 209",
  "¿Cómo manda…? 210",
  "¿Quiénes se hicieron…? 211",
  "¿Qué hará…? 213",
  "¿Qué les hablo…? 214",
  "¿Qué decía…? 215",
  "¿Quién estaba…? 171",
  "¿Qué hizo zaqueo…? 172",
  "¿Quién vino…? 174",
  "¿Qué es lo…? 175",
  "¿Dónde están…? 177",
  "¿Qué encontrarán…? 178",
  "¿Qué contestaron…? 179",
  "¿Cuándo se le…? 181",
  "¿A quiénes les arre…? 182",
  "¿Cómo despi…? 183",
  "¿A quiénes les dijo…? 151",
  "¿Qué hizo …? 152",
  "¿Qué será…? 154",
  "¿Qué hizo el…? 155",
  "¿Qué hizo el…? 155",
  "¿Qué hacía…? 156",
  "¿De la espo…? 157",
  "¿A quiénes les con…? 158",
  "¿Quién insistía…? 159",
  "¿Cuándo claman…? 160",
  "¿Quién dijo: ¡Oh…? 161",
  "¿Por qué se…? 163",
  "¿Quién contesto: Lo que…? 165",
  "¿Por qué no entendi…? 166",
  "¿Qué hizo el…? 155",
  "¿Quién pidió..? 217",
  "¿Dónde coloc…? 218",
  "¿Cuándo fuero...?219",
  "¿Qué no halla…? 220",
  "¿Quién se acer…? 222",
  "¿Por qué los dos…? 223",
  "¿Qué dijo Cle..? 224",
  "¿Qué le insis..? 226",
  "¿Dónde debian…? 227",
  "¿Quién los lle…? 228",
  "¿A dónde fue…? 229",
  "¿Dónde estaban…? 230",
  "¿Cómo se llamaba …? 1",
  "¿Qué le suce …? 9",
  "¿Cuántos meses …? 14",
  "¿Qué pasó …? 16",
  "¿Dónde vivió …? 20",
  "¿Quién decre …? 21",
  "¿Cómo se llamaba…? 22",
  "¿Qué arbol …? 32",
  "¿Cuántos años …? 35",
  "¿Cómo se llamó …? 36",
  "¿Cuántos días …? 38",
  "¿Qué hacian …? 44",
  "¿Qué hicieron…? 52",
  "¿Quiénes buscaban …? 53",
  "¿Cuántos apostoles …? 55",
  "¿A qué se parece …? 60",
  "¿Quién mandó …? 62",
  "¿Qué le pregun …? 66",
  "¿Qué llevó la …? 67",
  "¿Cómo detuvo …? 71",
  "¿A dónde …? 73",
  "¿Cuántos años pa …? 75",
  "¿Qué mandó…? 79",
  "¿Quiénes recibi …? 80",
  "¿A quienes re…? 84",
  "¿Qué debe se…? 94",
  "¿Por qué si …? 96",
  "¿Quién es el …? 98",
  "¿Quién fue una …? 100",
  "¿Qué sucederá …? 101",
  "¿De que dan …? 102",
  "¿De que les…? 103",
  "¿De que no …? 106",
  "¿Por qué prue …? 110",
  "¿Qué le conta …? 113",
  "¿Quiénes no…? 115",
  "¿Por cuánto …? 116",
  "¿De donde ven…? 120",
  "¿Comó quizo …? 121",
  "¿Qué dia…? 122",
  "¿Qué discul…? 127",
  "¿Qué ale …? 128",
  "¿De que no di …? 130",
  "¿Qué debe ha…? 131",
  "¿Qué hace uno…? 132",
  "¿Por quién …? 133",
  "¿Qué hace la…? 134",
  "¿Cuándo dijo…? 135",
  "¿Quién dijo Pa…? 136",
  "¿Quién contestó Ha …? 137",
  "¿Qué ha hec …? 138",
  "¿A quién …? 139",
  "¿De que debí…? 140",
  "¿Qué le daba…? 141",
  "¿Por qué el…? 142",
  "¿Quién se …? 144",
  "¿Quién se ten…? 145",
  "¿Desde …? 146",
  "¿En donde …? 147",
  "¿Cuándo debe…? 148",
  "¿Cuándo debe …? 149",
  "¿Quienes sali…? 150",
];
console.log(generales.length);
