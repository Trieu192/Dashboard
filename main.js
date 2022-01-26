

  let options = {
    chart: {
      type: 'line',
      height: "280px",

      toolbar:{
          show:false,
      }
    },
    stroke: {
        curve:"smooth",
        width: 8,
        colors:["#6E00FF"],
    },
    markers: {
        size:7,
        colors:["#6E00FF"],
    },
    gird:{
        strokeDashArray: 10,
    },
    series: [{
      name: 'engagement',
      data: [5,3,10,8,29,19,22]
    }],
    xaxis: {
      categories: ["Feb","Mar","Apr","May","Jun","Jul","Aug"]
    }
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();


//    Radial Bar Chart

let optionsRadial= {
    series: [50],
    chart: {
        height: 280,
        type: 'radialBar',
        },
    plotOptions: {
        radialBar: {
        hollow: {
            size: '60%',
        },
        dataLabels: {
            name:{
                show:false,
            }
        },
         value: {
             formatter:function(val){
                 return parseInt(val);
             },
                color:'#555',
                fontSize : '36px',
                fontWeight : 500,

            }
        },
    },
    stroke: {
        lineCap: "round",
    },
    fill: {
        colors: ["#FFB100"],
    },
    labels:[""]

    };
let chartRadial = new ApexCharts(document.querySelector("#emailChart"), optionsRadial);
chartRadial.render();
  