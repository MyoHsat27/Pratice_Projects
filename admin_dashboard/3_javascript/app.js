$(".show-menu-btn").click(function (e) {
   e.preventDefault();
   $(".menu").animate({left: 0});
});

$(".hide-menu-btn").click(function (e) {
   e.preventDefault();
   $(".menu").animate({left: `${-100}%`});
});

function go(url) {
   setTimeout(() => {
      location.href = `${url}`;
   }, 500);
}

let screenHeight = $(window).height();
let currentMenuHeight = $(".menu-item-link.active").offset().top;

if (currentMenuHeight > screenHeight * 0.8) {
   $(".nav-menu-container").animate(
      {
         scrollTop: currentMenuHeight,
      },
      500
   );
}
