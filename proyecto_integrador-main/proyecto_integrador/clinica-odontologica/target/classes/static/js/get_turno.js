window.addEventListener("load", function () {
  const url = "http://localhost:8082";

  const settings = {
    method: "GET",
  };

  fetch(`${url}/turnos/listar`, settings)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Error al obtener datos de turnos. Código de estado: ${response.status}`
        );
      }
      return response.json();
    })
    .then((data) => {
      populateTurnosTable(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

function populateTurnosTable(data) {
  const table = document.getElementById("turnoTable");

  for (const turno of data) {
    const turnoRow = table.insertRow();
    const tr_id = "tr_" + turno.id;
    turnoRow.id = tr_id;

    const deleteButton = `<button id="btn_delete_${turno.id}" type="button" onclick="deleteBy(${turno.id})" class="btn btn-danger btn_delete">&times;</button>`;

    const updateButton = `<button id="btn_id_${turno.id}" type="button" onclick="findBy(${turno.id})" class="btn btn-info btn_id">${turno.id}</button>`;

    turnoRow.innerHTML = `
          <td>${updateButton}</td>
          <td class="td_fechaTurno">${turno.fechaYHora}</td>
          <td class="td_pacienteId">${turno.pacienteId}</td>
          <td class="td_odontologoId">${turno.odontologoId}</td>
          <td>${deleteButton}</td>`;
  }
}
