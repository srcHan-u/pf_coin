import  Chart from 'highcharts';
// chartDiagram
Chart.chart('chartDiagram', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    // tooltip: {
    //     // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    // },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    title: {
        text: ''
    },
    plotOptions: {
        pie: {
            allowPointSelect: false,
            cursor: 'pointer',
            dataLabels: {
                enabled: false,
                // format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Distributed to Community',
            y: 75,
            sliced: true,
            selected: true
        }, {
            name: 'Reserved Funding',
            y: 13
        },  {
            name: 'Founders and Team',
            y: 9
        }, {
            name: 'Advisors',
            y: 2
        }, {
            name: 'Bounty campaign',
            y: 1
        }]
    }]
});

// let a = 
// Chart.char
console.log(Chart)
// analytics-distribution__diagram
