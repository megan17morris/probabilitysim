var switchv= document.getElementById("switch#");
var stayv= document.getElementById("stay#")
var ctx= new Chart(myPie, {
  type: 'pie',
  data: {
    labels:['Switch', 'Stay'],
    datasets:[{
      label: '',
      data: [5, 5],
      backgroundColor:['#059DC0', '#6AF2F0'],
      borderColor:['black','black']
    }]
  },
  options:{
    plugins:{
      title:{
        display:true,
        text: "Switch or Stay?",
        font:{
          size: 24
        }
      },
      legend:{
        labels:{
        font:{
          size: 18
        }}
      },
      tooltip: {
        callbacks: {
          label: function(context){
            var label = context.label,
                currentValue = context.raw,
                total = context.chart._metasets[context.datasetIndex].total;
  
            var percentage = parseFloat((currentValue/total*100).toFixed(1));
  
            return label + ": " +currentValue + ' (' + percentage + '%)';
          }
        }
      }
      
    }
  }
});


function updatechart(){
  var updateValues= [switchv.value, stayv.value];
  ctx.data.datasets[0].data=updateValues;
  ctx.update()
}