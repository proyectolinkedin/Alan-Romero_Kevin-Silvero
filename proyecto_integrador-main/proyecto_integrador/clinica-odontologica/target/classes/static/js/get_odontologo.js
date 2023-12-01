window.addEventListener("load", function () {
  const url = "http://localhost:8082";

  const settings = {
    method: "GET",
  };

  fetch(`${url}/odontologos/listar`, settings)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Error al obtener datos de odontólogos. Código de estado: ${response.status}`
        );
      }
      return response.json();
    })
    .then((data) => {
      populateOdontologosTable(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

function populateOdontologosTable(data) {
  const table = document.getElementById("odontologoTable");

  for (const odontologo of data) {
    const odontologoRow = table.insertRow();
    const tr_id = "tr_" + odontologo.id;
    odontologoRow.id = tr_id;

    const deleteButton = `<button id="btn_delete_${odontologo.id}" type="button" onclick="deleteBy(${odontologo.id})" class="btn btn-danger btn_delete">&times;</button>`;

    const updateButton = `<button id="btn_id_${odontologo.id}" type="button" onclick="findBy(${odontologo.id})" class="btn btn-info btn_id">${odontologo.id}</button>`;

    odontologoRow.innerHTML = `
          <td>${updateButton}</td>
          <td class="td_matricula">${odontologo.matricula.toUpperCase()}</td>
          <td class="td_nombre">${odontologo.nombre.toUpperCase()}</td>
          <td class="td_apellido">${odontologo.apellido.toUpperCase()}</td>
          <td>${deleteButton}</td>`;
  }
}
