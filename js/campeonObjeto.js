document.addEventListener("DOMContentLoaded", function () {
  
  // Cargar campeones.json
  fetch("json/campeones.json")
    .then((response) => response.json())
    .then((campeonesJSON) => {
      // Obtener la lista de campeones del archivo JSON
      const campeones = campeonesJSON.campeones;

      const campeonCard = document.getElementById("campeones-list");

      localStorage.setItem("campeonesDescripcion", JSON.stringify(campeones));

      campeones.forEach((campeon) => {

        const htmlContentCampeon = `
          <div class="campeon-card">
            <img src="${campeon.imagen}" alt="${campeon.nombre}">
            <h2>${campeon.nombre}</h2>
            <a href="./descripcion.html?id=${campeon.id}" class="ver-mas-boton">Ver más</a>
          </div>
          `;

        campeonCard.innerHTML += htmlContentCampeon;
      });
    })

    .catch((error) => {
      console.error("Error al cargar campeones.json", error);
    });

  ``;

  //Cargar objetos.json
  fetch("json/objetos.json")
    .then((response) => response.json())
    .then((objetosJSON) => {
      const objetos = objetosJSON.objetos;

      const objetoCard = document.getElementById("objetos-list");

      localStorage.setItem("objetosDescripcion", JSON.stringify(objetos))

      objetos.forEach((objeto) => {

        const htmlContentObjeto = `
          <div class="objeto-card">
            <img src="${objeto.imagen}" alt="${objeto.nombre}">
            <h2>${objeto.nombre}</h2>
            <a href="./descripcion.html?id=${objeto.id}" class="ver-mas-boton">Ver más</a>
          </div>
        `;

        objetoCard.innerHTML += htmlContentObjeto;
      });
    })
    .catch((error) => {
      console.error("Error al cargar objetos.json", error);
    });
});
``;
