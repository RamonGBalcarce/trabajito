/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("Ingrese su nombre:");
  const añoNacimiento = prompt("Ingrese su año de nacimiento:");
  datosPersona.ciudad = prompt("Ingrese su ciudad:");
  datosPersona.interesPorJs = prompt("¿Le interesa Javascript? (Sí/No)");

  const añoActual = new Date().getFullYear();
  datosPersona.edad = añoActual - añoNacimiento;


}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */

  const nombreElement = document.querySelector("#nombre");
  const edadElement = document.querySelector("#edad");
  const ciudadElement = document.querySelector("#ciudad");
  const javascriptElement = document.querySelector("#javascript");

  nombreElement.textContent = datosPersona.nombre;
  edadElement.textContent = datosPersona.edad;
  ciudadElement.textContent = datosPersona.ciudad;
  javascriptElement.textContent = datosPersona.interesPorJs;


}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const filaElement = document.querySelector("#fila");

  if (filaElement.children.length === 0) {
    listado.forEach((materia) => {
      const cajaElement = document.createElement("div");
      cajaElement.classList.add("caja");

      const imgElement = document.createElement("img");
      imgElement.src = materia.imgUrl;
      imgElement.alt = materia.lenguajes;

      const lenguajesElement = document.createElement("p");
      lenguajesElement.classList.add("lenguajes");
      lenguajesElement.textContent = materia.lenguajes;

      const bimestreElement = document.createElement("p");
      bimestreElement.classList.add("bimestre");
      bimestreElement.textContent = materia.bimestre;

      cajaElement.appendChild(imgElement);
      cajaElement.appendChild(lenguajesElement);
      cajaElement.appendChild(bimestreElement);

      filaElement.appendChild(cajaElement);
    });
  }


}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const sitioElement = document.querySelector("#sitio");
  sitioElement.classList.toggle("dark");
  


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
document.addEventListener("keydown", function(event) {
  if (event.key === "F" || event.key === "f") {
    const sobreMiElement = document.querySelector("#sobre-mi");
    sobreMiElement.classList.remove("oculto");
  }
});
