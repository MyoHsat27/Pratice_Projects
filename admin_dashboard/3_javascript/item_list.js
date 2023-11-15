$(document).ready(function () {
   $("#itemList").DataTable();
});

$(".fa-compress").hide();

$(".maximize-btn").click(function () {
   let current = $(this).closest(".card");
   current.toggleClass("fullscreen-item-list");
   if (current.hasClass("fullscreen-item-list")) {
      $(".fa-expand").hide();
      $(".fa-compress").show();
   } else {
      $(".fa-compress").hide();
      $(".fa-expand").show();
   }
});
