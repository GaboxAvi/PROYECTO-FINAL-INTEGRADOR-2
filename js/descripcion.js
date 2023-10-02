document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  const campeones = JSON.parse(localStorage.getItem("campeonesDescripcion"));
  const selectCampeon = campeones.find((campeon) => campeon.id == id);

  const objetos = JSON.parse(localStorage.getItem("objetosDescripcion"));
  const selectObjeto = objetos.find((objeto) => objeto.id == id);

  if (selectCampeon) {
    const htmlDescripcionCampeon = `
            <div class="campeon-card">
                <h1>${selectCampeon.nombre}</h1>
                <h2>${selectCampeon.apodo}</h2>
    
                <img src="${selectCampeon.imagen}" alt="${selectCampeon.nombre}">
                <br>
                <br>  
                <p><strong>Rol: </strong>${selectCampeon.rol}</p>
                <p><strong>Daño: </strong>${selectCampeon.daño}</p>

                <p>${selectCampeon.historia}</p>

                <button onclick="volverIndex()" class="volver-button">Volver Atrás</button>
            </div>
        `;

    const campeonDescripcion = document.querySelector("main div:first-child");
    campeonDescripcion.classList.toggle("campeon-descripcion");
    campeonDescripcion.innerHTML = htmlDescripcionCampeon;
  } else if (selectObjeto) {
    const htmlContentObjeto = `
            <div class="objeto-card">
                <img src="${selectObjeto.imagen}" alt="${selectObjeto.nombre}">
                <br>
                <br>
                <h1>${selectObjeto.nombre}</h1>
                <h3>${selectObjeto.precio}</h3>
        
                <p><strong>Atributos: </strong>${selectObjeto.atributos}</p>
                
    
                <p>${selectObjeto.historia}</p>
    
                <button onclick="volverIndex()" class="volver-button">Volver Atrás</button>
            </div>
            `;

    const objetoDescripcion = document.querySelector("main div:nth-child(2)");
    objetoDescripcion.classList.toggle("objeto-descripcion");
    objetoDescripcion.innerHTML = htmlContentObjeto;
  } else {
    const campeonDescripcion = document.getElementById("campeon-descripcion");
    campeonDescripcion.innerHTML =
      "<p>El campeón u objeto seleccionado no ha sido encontrado.</p>";
  }
});

function volverIndex() {
  window.location.href = "index.html";
}
