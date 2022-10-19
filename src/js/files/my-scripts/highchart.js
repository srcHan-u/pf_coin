// import  Chart from 'highcharts';
import Chart from "highcharts/es-modules/Core/Chart/Chart.js";
import LineSeries from "highcharts/es-modules/Series/Line/LineSeries.js";
import PieSeries from "highcharts/es-modules/Series/Pie/PieSeries.js";
// import PieSeries from "highcharts/es-modules/Accessibility/Options/";
import VariablePieSeries from "highcharts/es-modules/Series/VariablePie/VariablePieSeries.js";
// Example to create a simple line chart in a div#container:
const myChart = new Chart("chartDiagram", {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "variablepie",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  title: {
    text: "",
  },
  plotOptions: {
    variablepie: {
      allowPointSelect: false,
      cursor: "pointer",
      // dataLabels: {
      //     // enabled: false,
      //     // format: '<b>{point.name}</b>: {point.percentage:.1f} %'
      // }
    },
  },
  tooltip: {
    headerFormat: '',
    pointFormat: '<span style="color:{point.color}">\u25CF</span> <b>{point.name}</b> <br>' + 'value: <b>{point.y}%</b>'
  },
  series: [
    {
      minPointSize: 10,
      innerSize: "50%",
      zMin: 0,
      name: "distribution of tokens",
      colorByPoint: true,
      data: [
        {
          name: "Distributed to Community",
          y: 75,
          sliced: true,
          selected: true,
          z: 100,
          color: "#B5CF66",
        },
        {
          name: "Reserved Funding",
          y: 13,
          z: 100,
          color: "#FCF3B8",
        },
        {
          name: "Founders and Team",
          y: 9,
          z: 100,
          color: "#BDE0BB",
        },
        {
          name: "Advisors",
          y: 2,
          z: 100,
          color: "#818181",
        },
        {
          name: "Bounty campaign",
          y: 1,
          z: 100,
          color: "#FFD301",
        },
      ],
    },
  ],
});

// console.log(new VariablePieSeries);
// chartDiagram
// Chart.chart('chartDiagram', {
//     chart: {
//         plotBackgroundColor: null,
//         plotBorderWidth: null,
//         plotShadow: false,
//         type: 'pie'
//     },
//     // tooltip: {
//     //     // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//     // },
//     accessibility: {
//         point: {
//             valueSuffix: '%'
//         }
//     },
//     title: {
//         text: ''
//     },
//     plotOptions: {
//         pie: {
//             allowPointSelect: false,
//             cursor: 'pointer',
//             dataLabels: {
//                 enabled: false,
//                 // format: '<b>{point.name}</b>: {point.percentage:.1f} %'
//             }
//         }
//     },
//     series: [{
//         name: 'Brands',
//         colorByPoint: true,
//         data: [{
//             name: 'Distributed to Community',
//             y: 75,
//             sliced: true,
//             selected: true
//         }, {
//             name: 'Reserved Funding',
//             y: 13
//         },  {
//             name: 'Founders and Team',
//             y: 9
//         }, {
//             name: 'Advisors',
//             y: 2
//         }, {
//             name: 'Bounty campaign',
//             y: 1
//         }]
//     }]
// });

// let a =
// Chart.char
// analytics-distribution__diagram

// Chart.chart('chartDiagram', {
//     chart: {
//         type: 'variablepie'
//     },
//     title: {
//         text: 'Countries compared by population density and total area, 2022.'
//     },
//     tooltip: {
//         headerFormat: '',
//         pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
//             'Area (square km): <b>{point.y}</b><br/>' +
//             'Population density (people per square km): <b>{point.z}</b><br/>'
//     },
//     series: [{
//         minPointSize: 10,
//         innerSize: '20%',
//         zMin: 0,
//         name: 'countries',
//         data: [{
//             name: 'Spain',
//             y: 505992,
//             z: 92
//         }, {
//             name: 'France',
//             y: 551695,
//             z: 119
//         }, {
//             name: 'Poland',
//             y: 312679,
//             z: 121
//         }, {
//             name: 'Czech Republic',
//             y: 78865,
//             z: 136
//         }, {
//             name: 'Italy',
//             y: 301336,
//             z: 200
//         }, {
//             name: 'Switzerland',
//             y: 41284,
//             z: 213
//         }, {
//             name: 'Germany',
//             y: 357114,
//             z: 235
//         }]
//     }]
// });
