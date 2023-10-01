document.addEventListener("DOMContentLoaded", function () {
  // Cargar campeones.json
  fetch("json/campeones.json")
    .then((response) => response.json())
    .then((campeonesJSON) => {
      // Obtener la lista de campeones del archivo JSON
      const campeones = campeonesJSON.campeones;

      const campeonCard = document.getElementById("campeones-list");

      localStorage.setItem("campeonesDescripcion",JSON.stringify(campeones));
      
      campeones.forEach((campeon) => {
        const htmlContent = `
          <div class="campeon-card">
            <img src="${campeon.imagen}" alt="${campeon.nombre}">
            <h2>${campeon.nombre}</h2>
            <a href="./descripcion.html?id=${campeon.id}" class="ver-mas-boton">Ver más</a>
          </div>
          `;
        
        campeonCard.innerHTML += htmlContent;
      });
    })

    .catch((error) => {
      console.error("Error al cargar campeones.json", error);
    });

  // Cargar objetos.json
  // fetch("json/objetos.json")
  //   .then((response) => response.json())
  //   .then((objetosJSON) => {
  //     const objetos = objetosJSON.objetos;

  //     const objetosList = document.getElementById("objetos-list");

  //     objetos.forEach((objeto) => {
  //       const objetoCard = document.createElement("div");
  //       objetoCard.classList.add("objeto-card");

  //       const objetoImagen = document.createElement("img");
  //       objetoImagen.src = objeto.imagen;
  //       objetoImagen.alt = objeto.nombre;
  //       objetoCard.appendChild(objetoImagen);

  //       const objetoNombre = document.createElement("h2");
  //       objetoNombre.textContent = objeto.nombre;
  //       objetoCard.appendChild(objetoNombre);

  //       const verMasButton = document.createElement("button");
  //       verMasButton.textContent = "Ver más";
  //       objetoCard.appendChild(verMasButton);

  //       const objetoPrecio = document.createElement("h4");
  //       objetoPrecio.classList.add("objeto-precio");
  //       objetoCard.appendChild(objetoPrecio);

  //       const objetoAtributos = document.createElement("h5");
  //       objetoAtributos.classList.add("objeto-atributos");
  //       objetoCard.appendChild(objetoAtributos);

  //       const objetoHistoria = document.createElement("p");
  //       objetoHistoria.classList.add("objeto-historia");
  //       objetoCard.appendChild(objetoHistoria);

  //       verMasButton.addEventListener("click", () => {
  //         objetoPrecio.textContent = objeto.precio;
  //         objetoAtributos.textContent = objeto.atributos;
  //         objetoHistoria.textContent = objeto.historia;

  //         // Agregar un botón para ocultar la historia
  //         const ocultarButton = document.createElement("button");
  //         ocultarButton.textContent = "Ocultar";
  //         objetoCard.appendChild(ocultarButton);

  //         // Agregar un evento de clic al botón "Ocultar" para esconder la historia
  //         ocultarButton.addEventListener("click", () => {
  //           objetoPrecio.textContent = "";
  //           objetoAtributos.textContent = "";
  //           objetoHistoria.textContent = "";
  //           objetoCard.removeChild(ocultarButton);
  //         });
  //       });

  //       objetosList.appendChild(objetoCard);
  //     });
  //   })
  //   .catch((error) => {
  //     console.error("Error al cargar objetos.json", error);
  //   });
});
