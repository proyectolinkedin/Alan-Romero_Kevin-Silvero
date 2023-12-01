window.addEventListener("load", function () {
  const formulario = document.querySelector("#add_new_odontologo");
  const url = "http://localhost:8082";

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(formulario);

    const settings = {
      method: "POST",
      body: formData,
    };

    console.log("Lanzar la consulta a la API...");

    fetch(`${url}/odontologos/registrar`, settings)
      .then(handleResponse)
      .catch(handleError);
  });

  function handleResponse(response) {
    if (!response.ok) {
      throw new Error(
        `Error al agregar el odontólogo. Código de estado: ${response.status}`
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
