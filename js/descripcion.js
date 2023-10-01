document.addEventListener("DOMContentLoaded", function (){
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    const campeones = JSON.parse(localStorage.getItem("campeonesDescripcion"));

    const selectCampeon = campeones.find((campeon) => campeon.id == id);
    if(selectCampeon){

        console.log("Campeón seleccionado:", selectCampeon);
        
        const htmlDescripcion = `
            <div class="campeon-card">
                <h1>${selectCampeon.nombre}</h1>
                <h2>${selectCampeon.apodo}</h2>
    
                <img src="${selectCampeon.imagen}" alt="${selectCampeon.nombre}">
                <hr>
                <p><strong>Rol: </strong>${selectCampeon.rol}</p>
                <p><strong>Daño: </strong>${selectCampeon.daño}</p>

                <h3>Historia:</h3>
                <p>${selectCampeon.historia}</p>

                <button onclick="volverIndex()" class="volver-button">Volver Atrás</button>
            </div>
        `;
        const campeonDescripcion = document.getElementById("campeon-descripcion");
        campeonDescripcion.innerHTML = htmlDescripcion;

    } else{
        const campeonDescripcion = document.getElementById("campeon-descripcion");
        campeonDescripcion.innerHTML = "<p>El campeón seleccionado no ha sido encontrado.</p>"
    }
    
});

function volverIndex(){
    window.location.href = "index.html";
}