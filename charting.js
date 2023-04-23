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
      borderColor:['#059DC0','#6AF2F0']
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
      }
    }
  }
});


function updatechart(){
  var updateValues= [switchv.value, stayv.value];
  ctx.data.datasets[0].data=updateValues;
  ctx.update()
}