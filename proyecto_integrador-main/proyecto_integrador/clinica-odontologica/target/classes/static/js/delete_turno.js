function deleteBy(id) {
  const url = "/turno/" + id;
  const settings = {
    method: "DELETE",
  };

  fetch(url, settings)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error al eliminar el turno con ID ${id}`);
      }
      return response.json();
    })
    .then((data) => {
      let row_id = "#tr_" + id;
      document.querySelector(row_id).remove();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
