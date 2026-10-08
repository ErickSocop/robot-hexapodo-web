let botonMenu = document.querySelector(".menu-btn");
let menu = document.querySelector("nav");

botonMenu.addEventListener("click", function () {
    menu.classList.toggle("abierto");
});


let botonSubir = document.querySelector(".subir");

window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
        botonSubir.style.display = "block";
    } else {
        botonSubir.style.display = "none";
    }
});

botonSubir.addEventListener("click", function () {
    window.scrollTo(0, 0);
});

let botonCaminar = document.querySelector("#btn-caminar");
let robot = document.querySelector("#robot-demo");
let estado = document.querySelector("#estado");
let caminando = false;
let intervalo;
let grupo = 1;

if (botonCaminar) {
    botonCaminar.addEventListener("click", function () {
        if (caminando == false) {
            caminando = true;
            robot.classList.add("caminando");
            botonCaminar.textContent = "Detener";

            intervalo = setInterval(function () {
                if (grupo == 1) {
                    estado.textContent = "Grupo 1 apoyado, grupo 2 en el aire";
                    grupo = 2;
                } else {
                    estado.textContent = "Grupo 2 apoyado, grupo 1 en el aire";
                    grupo = 1;
                }
            }, 600);
        } else {
            caminando = false;
            robot.classList.remove("caminando");
            botonCaminar.textContent = "Ver caminar";
            clearInterval(intervalo);
            estado.textContent = "Robot detenido";
        }
    });
}

let formulario = document.querySelector("#form-contacto");

if (formulario) {
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        let nombre = document.querySelector("#nombre").value;
        let correo = document.querySelector("#correo").value;
        let mensaje = document.querySelector("#mensaje").value;
        let respuesta = document.querySelector(".mensaje-form");

        if (nombre == "" || correo == "" || mensaje == "") {
            respuesta.textContent = "Por favor llena todos los campos.";
            respuesta.style.color = "red";
        } else if (correo.includes("@") == false) {
            respuesta.textContent = "El correo no es correcto.";
            respuesta.style.color = "red";
        } else {
            respuesta.textContent = "Gracias " + nombre + ", tu mensaje fue recibido.";
            respuesta.style.color = "green";
            formulario.reset();
        }
    });
}
