//const excelFileUrl = "../src/docs/velcerno.xlsx";
// Crear una nueva instancia de FileReader
//const reader = new FileReader();

// Configurar el evento onload para ejecutarse cuando se complete la lectura del archivo
//reader.onload = function (e) {
//  const data = new Uint8Array(e.target.result);

  // Procesar el archivo Excel
//  const workbook = XLSX.read(data, { type: "array" });
//  const sheetName = workbook.SheetNames[0];
//  const excelData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

  // Llamar a las funciones para procesar y mostrar los datos
//  executeCardComponent(excelData);
//};

// Realizar la lectura del archivo desde la URL
//fetch(excelFileUrl)
//  .then((response) => response.blob()) // Convertir la respuesta a un Blob
//  .then((blob) => reader.readAsArrayBuffer(blob))
//  .catch((error) => {
//    console.error("Error al cargar el archivo:", error);
//  });




//function executeCardComponent(data) {
//    const wineListContainer = document.getElementById("wineList");
  
    // Itera sobre cada vino en el JSON
    // Itera sobre cada vino en el JSON
//    data.forEach((vino) => {
      // Realizar la carga del archivo wine-card-template.html
//      fetch("src/component/cardComponent/cardComponent.html")
//        .then((response) => response.text())
//        .then((template) => {
          // Reemplazar las variables del template con datos reales
//          const wineCardHTML = template
//            .replaceAll("{IMAGE}", vino.Imagen)
//            .replaceAll("{NAME}", vino.Nombre)
//            .replaceAll("{VARIETAL}", vino.Varietal)
//            .replaceAll("{STOCK}", vino.Stock)
//            .replaceAll("{PRICE}", vino.Precio);
  
          // Crear un elemento div para almacenar la tarjeta y agregarlo al contenedor
//          const wineCardContainer = document.createElement("div");
//          wineCardContainer.innerHTML = wineCardHTML;
//          wineListContainer.appendChild(wineCardContainer.firstChild);
//        })
//        .catch((error) => {
//          console.error("Error al cargar el template:", error);
//        });
//    });
//  }
