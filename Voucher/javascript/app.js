function addRow() {
   $("tbody").append(`<tr class="tableRow" >
                        <td class="border border-gray-300 p-2">
                           <div
                              class="deleteRowBtn border-2 border-blue-500 text-blue-500 p-2 flex justify-center items-center rounded-md w-10 cursor-pointer hover:bg-blue-500 hover:text-white transition ease-out active:bg-blue-600 active:border-blue-600"
                           >
                              <svg
                                 class="w-5"
                                 xmlns="http://www.w3.org/2000/svg"
                                 class="h-6 w-6"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                                 stroke-width="2"
                              >
                                 <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                 />
                              </svg>
                           </div>
                        </td>
                        <td class="border border-gray-300 p-2">
                           <input type="text" class="input-control product-name "   />
                        </td>
                        <td class=" border border-gray-300 p-2">
                           <input type="text" class="input-control product-price w-24 text-end" placeholder="0"  min="0" />
                        </td>
                        <td class=" border border-gray-300 p-2">
                           <input type="number" class="input-control product-quantity w-24 text-end" placeholder="0" min="0" />
                        </td>
                        <td class="price border border-gray-300 p-2 text-end text-xl font-bold w-40">0</td>
                     </tr>`);
}

function calculateTotal() {
   $(".total-price").html(
      $(".price")
         .toArray()
         .map((el) => el.innerHTML)
         .reduce((x, y) => Number(x) + Number(y))
   );
}

// To get default first row in load
addRow();

$(".addNewListBtn").click(function (e) {
   e.preventDefault();
   addRow();
});

$("tbody").delegate(".deleteRowBtn", "click", function (e) {
   if ($("tbody tr").length !== 1) {
      $(this).parentsUntil("tbody").remove();
      calculateTotal();
   }
});

$("tbody").delegate("input", "keyup ", function (e) {
   let cost = $(this).parentsUntil("tbody").find(".product-price").val();
   let quantity = $(this).parentsUntil("tbody").find(".product-quantity").val();
   $(this)
      .parentsUntil("tbody")
      .find(".price")
      .html(cost * quantity);

   calculateTotal();
});
