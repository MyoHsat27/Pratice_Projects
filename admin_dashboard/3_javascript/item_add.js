let category = ["Phone", "Computer", "TV"];
let subCategory = [
   {name: "Iphone", category_id: 0},
   {name: "Samsaung", category_id: 0},
   {name: "Xiaomi", category_id: 0},
   {name: "Oppo", category_id: 0},
   {name: "Vivo", category_id: 0},
   {name: "Msi", category_id: 1},
   {name: "Lenovo", category_id: 1},
   {name: "Hp", category_id: 1},
   {name: "Dell", category_id: 1},
   {name: "Mac", category_id: 1},
   {name: "Asus", category_id: 1},
   {name: "Panasonic", category_id: 2},
   {name: "Samsaung", category_id: 2},
   {name: "Sony", category_id: 2},
   {name: "LG", category_id: 2},
];

category.map((item, index) => {
   $("#mainCategory").append(`<option value="${index}">${item}</option>`);
});

subCategory.map((item, index) => {
   $("#subCategory").append(`<option value="${index}" data-category="${item.category_id}">${item.name}</option>`);
});

$("#mainCategory").change(function (e) {
   let currentCategoryId = $(this).val();
   $("#subCategory option").hide();
   if (currentCategoryId == "default") {
      subCategory.map((item, index) => {
         $(`[data-category=${item.category_id}]`).show();
      });
   } else {
      $(`[data-category=${currentCategoryId}]`).show();
   }
});
