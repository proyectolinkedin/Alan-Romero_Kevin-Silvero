window.addEventListener("load", function () {
  const url = "http://localhost:8082";

  const settings = {
    method: "GET",
  };

  fetch(`${url}/pacientes/listar`, settings)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Error al obtener datos de pacientes. Código de estado: ${response.status}`
        );
      }
      return response.json();
    })
    .then((data) => {
      populatePacientesTable(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

function populatePacientesTable(data) {
  const table = document.getElementById("pacienteTable");

  for (const paciente of data) {
    const pacienteRow = table.insertRow();
    const tr_id = "tr_" + paciente.id;
    pacienteRow.id = tr_id;

    const deleteButton = `<button id="btn_delete_${paciente.id}" type="button" onclick="deleteBy(${paciente.id})" class="btn btn-danger btn_delete">&times;</button>`;

    const updateButton = `<button id="btn_id_${paciente.id}" type="button" onclick="findBy(${paciente.id})" class="btn btn-info btn_id">${paciente.id}</button>`;

    pacienteRow.innerHTML = `
          <td>${updateButton}</td>
          <td class="td_nombre">${paciente.nombre.toUpperCase()}</td>
          <td class="td_apellido">${paciente.apellido.toUpperCase()}</td>
          <td class="td_dni">${paciente.dni}</td>
          <td class="td_fechaIngreso">${paciente.fechaIngreso}</td>
          <td class="td_calle">${paciente.domicilioSalidaDto.calle.toUpperCase()}</td>
          <td class="td_numero">${paciente.domicilioSalidaDto.numero}</td>
          <td class="td_localidad">${paciente.domicilioSalidaDto.localidad.toUpperCase()}</td>
          <td class="td_provincia">${paciente.domicilioSalidaDto.provincia.toUpperCase()}</td>
          <td>${deleteButton}</td>`;
  }
}
