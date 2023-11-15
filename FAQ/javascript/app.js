const url = "https://jsonplaceholder.typicode.com/posts";
let list = [];

async function fetchPost() {
   let response = await fetch(url);
   let post = await response.json();
   list = post.slice(0, 10);

   list.map((item) => {
      $(".faq-list").append(` <div class="faq-item">
               <div class="faq-item-title border-b-0 p-3 border border-gray-300 rounded rounded-b-none flex justify-between items-center hover:bg-gray-100 cursor-pointer">
                  <div class="font-semibold select-none w-11/12">${item.title}</div>
                  <svg
                     class="w-5 cursor-pointer transition ease-out faq-item-icon "
                     xmlns="http://www.w3.org/2000/svg"
                     class="h-6 w-6"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                     stroke-width="2"
                  >
                     <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
               </div>
               <div
                  class="select-none faq-item-body p-3 border-x border-gray-300 rounded rounded-t-none bg-gray-100 text-sm font-semibold hidden"
               >
                 ${item.body}
               </div>
            </div>
         </div>`);
   });

   $(".faq-item").click(function (e) {
      $(this).children(".faq-item-title").toggleClass("border-b-0");
      $(this).find(".faq-item-icon").toggleClass("-rotate-180");
      $(this).children(".faq-item-body").toggle(300);
   });
}
fetchPost();
