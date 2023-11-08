const sheetId = "1W5RuCkiPPvxA_KOoAIPc5ue7whjc7-G1mO71HjDey_A";
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const sheetName = "user-data";
const query = encodeURIComponent("Select *");
const url = `${base}&sheet=${sheetName}&tq=${query}`;
const data = [];
const output = document.querySelector(".output");
fetch(url)
  .then((res) => res.text())
  .then((rep) => {
    //Remove additional text and extract only JSON:
    const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
    console.log(JSON.stringify(jsonData, 2, 2));
    const vinos = jsonData.table.rows.map((row) => {
      return {
        Nombre: row.c[0].v,
        Varietal: row.c[1].v,
        Stock: row.c[2].v,
        Precio: row.c[3].v,
        Imagen: row.c[4].v,
      };
    });

    executeCardComponent(vinos);
  })
  .catch((error) => {
    console.error("Error al cargar el sheet:", error);
  });

function executeCardComponent(data) {
  console.log(JSON.stringify(data, 2, 2));
  const wineListContainer = document.getElementById("s3-brand-carousel");

  // Itera sobre cada vino en el JSON
  // Itera sobre cada vino en el JSON
  data.forEach((vino, index) => {
    // Realizar la carga del archivo wine-card-template.html
    fetch("src/component/cardComponent/cardComponent.html")
      .then((response) => response.text())
      .then((template) => {
        //  Reemplazar las variables del template con datos reales
        const wineCardHTML = template
          .replaceAll("{IMAGE}", vino.Imagen)
          .replaceAll("{NAME}", vino.Nombre)
          .replaceAll("{VARIETAL}", vino.Varietal)
          .replaceAll("carousel-item", index === 0 ? "carousel-item active" : "carousel-item");
        //Crear un elemento div para almacenar la tarjeta y agregarlo al contenedor
        const wineCardContainer = document.createElement("div");
        wineCardContainer.innerHTML = wineCardHTML;
        wineListContainer.appendChild(wineCardContainer.firstChild);
      })
     
      .catch((error) => {
        console.error("Error al cargar el template:", error);
      });
  });

  wineListContainer.appendChild(wineCardContainer.firstChild);
}
