$(document).ready(() => {
  $(document).on("click", "#add-burger", () => {
    let name = $("#burgerName").val();
    $.post("./api/burgers", { name: name }, data => {
      console.log(data);
    });
  });
});
