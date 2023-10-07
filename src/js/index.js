const sheetId = "1W5RuCkiPPvxA_KOoAIPc5ue7whjc7-G1mO71HjDey_A";
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const sheetName = "user-data";
const query = encodeURIComponent("Select *");
const url = `${base}&sheet=${sheetName}&tq=${query}`;
const data = [];
const output = document.querySelector(".output");
fetch(
  url    
)
  .then((res) => res.text() )
  .then((rep) => {
     //Remove additional text and extract only JSON:
    const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
    console.log(JSON.stringify( jsonData , 2 , 2));
    
  })
  .catch((error) => {
    console.error("Error al cargar el sheet:", error);
  });
