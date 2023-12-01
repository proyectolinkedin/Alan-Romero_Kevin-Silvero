window.addEventListener("load", function () {
  const formulario = document.querySelector("#add_new_turno");
  const url = "http://localhost:8082";

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const fechaYHora = document.querySelector("#fechaTurno");
    const odontologo_id = document.querySelector("#odontologoId");
    const paciente_id = document.querySelector("#pacienteId");

    const payload = {
      fechaYHora: formatFechaYHora(fechaYHora.value),
      odontologo_id: odontologo_id.value,
      paciente_id: paciente_id.value,
    };

    console.log(payload);

    const settings = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(`${url}/turnos/registrar`, settings)
      .then(handleResponse)
      .catch(handleError);
  });

  function handleResponse(response) {
    if (!response.ok) {
      throw new Error(
        `Error al agregar el turno. Código de estado: ${response.status}`
      );
    }

    return response.json();
  }

  function handleError(error) {
    console.error("Error:", error);

    let errorAlert =
      '<div class="alert alert-danger alert-dismissible">' +
      '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
      "<strong> Error, intente nuevamente</strong> </div>";

    document.querySelector("#response").innerHTML = errorAlert;
    document.querySelector("#response").style.display = "block";

    resetUploadForm();
  }

  function resetUploadForm() {
    document.querySelector("#fechaTurno").value = "";
    document.querySelector("#pacienteId").value = "";
    document.querySelector("#odontologoId").value = "";
  }

  function formatFechaYHora(fechaYHora) {
    // Formatear la fecha y hora según tus necesidades
    return fechaYHora.replace("T", " ") + ":00";
  }
});
