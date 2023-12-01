window.addEventListener("load", function () {
  const formulario = document.querySelector("#add_new_paciente");
  const url = "http://localhost:8082";

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(formulario);
    const payload = {};

    formData.forEach((value, key) => {
      payload[key] = isNaN(value) ? value : Number(value);
    });

    console.log(payload);

    const settings = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    };

    console.log("Lanzar la consulta a la API...");

    fetch(`${url}/pacientes/registrar`, settings)
      .then(handleResponse)
      .catch(handleError);
  });

  function handleResponse(response) {
    if (!response.ok) {
      throw new Error(
        `Error al agregar el paciente. Código de estado: ${response.status}`
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
    formulario.reset();
  }
});
