$(".counter-up").counterUp({
   delay: 20,
   time: 1000,
});

let dataArr = [
   "may 24",
   "may 23",
   "may 22",
   "may 21",
   "may 20",
   "may 19",
   "may 18",
   "may 17",
   "may 16",
   "may 15",
   "may 14",
];

let orderCountArr = [8, 6, 5, 5, 4, 7, 6, 3, 9, 6, 5];
let viewerCountArr = [18, 15, 12, 16, 7, 21, 19, 9, 20, 14, 12];

const ctx = document.getElementById("orderViewer").getContext("2d");
const myChart = new Chart(ctx, {
   type: "line",
   data: {
      labels: dataArr,
      datasets: [
         {
            label: "View Count",
            data: viewerCountArr,
            backgroundColor: "#28a74530",
            borderColor: "#28a745",
            borderWidth: 1,
            fill: true,
            tension: 0,
         },
         {
            label: "Order Count",
            data: orderCountArr,
            fill: true,
            backgroundColor: "#007bff30",
            borderColor: "#007bff",
            borderWidth: 1,
            tension: 0,
         },
      ],
   },
   options: {
      scales: {
         x: {
            display: false,
            grid: {display: false},
            ticks: {
               display: false,
            },
         },
         y: {
            display: false,
            beginAtZero: true,
            grid: {display: false},
            ticks: {
               display: false,
            },
         },
      },
      plugins: {
         legend: {
            display: true,
            position: "top",
            labels: {
               fontColor: "#333",
               usePointStyle: true,
            },
         },
      },
   },
});

let orderFromPlace = [9, 15, 7, 8, 4];
let places = ["YGN", "MDY", "NPY", "SHAN", "MGW"];

const orderChart = document.getElementById("orderChart");
const myOrder = new Chart(orderChart, {
   type: "doughnut",
   data: {
      labels: places,
      datasets: [
         {
            label: "My First Dataset",
            data: orderFromPlace,
            backgroundColor: [
               "rgba(255, 99, 132, 0.3)",
               "rgba(255, 159, 64, 0.3)",
               "rgba(75, 192, 192, 0.3)",
               "rgba(54, 162, 235, 0.3)",
               "rgba(153, 102, 255, 0.3)",
            ],
            borderColor: [
               "rgba(255, 99, 132, 0.5)",
               "rgba(255, 159, 64, 0.5)",
               "rgba(75, 192, 192, 0.5)",
               "rgba(54, 162, 235, 0.5)",
               "rgba(153, 102, 255, 0.5)",
            ],
            borderWidth: 1,
            hoverOffset: 4,
         },
      ],
   },
   options: {
      plugins: {
         legend: {
            display: true,
            position: "bottom",
            labels: {
               fontColor: "#333",
            },
         },
      },
   },
});

myChart.height = 300;
