$(document).ready(() => {
  $(document).on("click", "#add-burger", () => {
    let name = $("#burgerName").val();
    $.post("./api/burgers", { name: name }, data => {
      console.log(data);
      location.reload();
    });
  });

  $(document).on("click", ".delete-burger", event => {
    let id = $(event.target).data("id");
    console.log(id);
    $.ajax({
      url: `./api/burgers/${id}`,
      type: "DELETE",
      success: () => {
        location.reload();
      }
    });
  });

  $(document).on("click", ".change-devour", event => {
    let id = $(event.target).data("id");
    $.ajax({
      url: `./api/burgers/${id}`,
      type: "PUT",
      success: () => {
        location.reload();
      }
    });
  });
});
