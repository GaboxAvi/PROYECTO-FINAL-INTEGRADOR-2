document.addEventListener("DOMContentLoaded", function () {
  // Cargar campeones.json
  fetch("campeones.json")
    .then((response) => response.json())
    .then((campeonesJSON) => {
      // Obtener la lista de campeones del archivo JSON
      const campeones = campeonesJSON.campeones;

      const campeonesList = document.getElementById("campeones-list");

      // Iterar a través de los campeones y crear elementos HTML para cada uno
      campeones.forEach((campeon) => {
        const campeonCard = document.createElement("div");
        campeonCard.classList.add("campeon-card");

        const campeonImagen = document.createElement("img");
        campeonImagen.src = campeon.imagen_url;
        campeonImagen.alt = campeon.nombre;
        campeonCard.appendChild(campeonImagen);

        const campeonNombre = document.createElement("h2");
        campeonNombre.textContent = campeon.nombre;
        campeonCard.appendChild(campeonNombre);

        const verMasButton = document.createElement("button");
        verMasButton.textContent = "Ver más";
        campeonCard.appendChild(verMasButton);

        const campeonApodo = document.createElement("h3");
        campeonApodo.classList.add("campeon-apodo");
        campeonCard.appendChild(campeonApodo);

        const campeonDaño = document.createElement("h5");
        campeonDaño.classList.add("campeon-daño");
        campeonCard.appendChild(campeonDaño);

        const campeonRol = document.createElement("h5");
        campeonRol.classList.add("campeon-rol");
        campeonCard.appendChild(campeonRol);

        const historiaParrafo = document.createElement("p");
        historiaParrafo.classList.add("historia-parrafo");
        campeonCard.appendChild(historiaParrafo);

        // Agregar un evento de clic al botón "Ver más" para mostrar la historia
        verMasButton.addEventListener("click", () => {
          campeonApodo.textContent = campeon.apodo;
          campeonDaño.innerHTML = `Daño: <span>${campeon.daño}</span>`;
          campeonRol.innerHTML = `Rol: <span>${campeon.rol}</span>`;
          historiaParrafo.textContent = campeon.historia;

          // Agregar un botón para ocultar la historia
          const ocultarButton = document.createElement("button");
          ocultarButton.textContent = "Ocultar";
          campeonCard.appendChild(ocultarButton);

          // Agregar un evento de clic al botón "Ocultar" para esconder la historia
          ocultarButton.addEventListener("click", () => {
            campeonApodo.textContent = "";
            campeonDaño.innerHTML = "";
            campeonRol.innerHTML = "";
            historiaParrafo.textContent = "";
            campeonCard.removeChild(ocultarButton);
          });
        });

        campeonesList.appendChild(campeonCard);
      });
    })
    .catch((error) => {
      console.error("Error al cargar campeones.json", error);
    });

  // Cargar objetos.json
  fetch("objetos.json")
    .then((response) => response.json())
    .then((objetosJSON) => {
      const objetos = objetosJSON.objetos;

      const objetosList = document.getElementById("objetos-list");

      objetos.forEach((objeto) => {
        const objetoCard = document.createElement("div");
        objetoCard.classList.add("objeto-card");

        const objetoImagen = document.createElement("img");
        objetoImagen.src = objeto.imagen_url;
        objetoImagen.alt = objeto.nombre;
        objetoCard.appendChild(objetoImagen);

        const objetoNombre = document.createElement("h2");
        objetoNombre.textContent = objeto.nombre;
        objetoCard.appendChild(objetoNombre);

        const verMasButton = document.createElement("button");
        verMasButton.textContent = "Ver más";
        objetoCard.appendChild(verMasButton);

        const objetoPrecio = document.createElement("h4");
        objetoPrecio.classList.add("objeto-precio");
        objetoCard.appendChild(objetoPrecio);

        const objetoAtributos = document.createElement("h5");
        objetoAtributos.classList.add("objeto-atributos");
        objetoCard.appendChild(objetoAtributos);

        const objetoHistoria = document.createElement("p");
        objetoHistoria.classList.add("objeto-historia");
        objetoCard.appendChild(objetoHistoria);

        verMasButton.addEventListener("click", () => {
          objetoPrecio.textContent = objeto.precio;
          objetoAtributos.textContent = objeto.atributos;
          objetoHistoria.textContent = objeto.historia;


          // Agregar un botón para ocultar la historia
          const ocultarButton = document.createElement("button");
          ocultarButton.textContent = "Ocultar";
          objetoCard.appendChild(ocultarButton);

          // Agregar un evento de clic al botón "Ocultar" para esconder la historia
          ocultarButton.addEventListener("click", () => {
            objetoPrecio.textContent = "";
            objetoAtributos.textContent = "";
            objetoHistoria.textContent = "";
            objetoCard.removeChild(ocultarButton);
          });
        });

        objetosList.appendChild(objetoCard);
      });
    })
    .catch((error) => {
      console.error("Error al cargar objetos.json", error);
    });
});
