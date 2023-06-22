const ctx = document.getElementById('myChart1');
  const data={
  datasets: [{
    data: [], //{x: 8.91, y: 9.68}, {x: 5.52, y: 8.03}, {x: 8.73, y: 6.7}, {x: 6.52, y: 1.52}, {x: 5.97, y: 2.96}, {x: 2.12, y: 2.56}, {x: 3.98, y: 0.93}, {x: 9.18, y: 9.55}, {x: 2.34, y: 3.37}, {x: 7.87, y: 9.3}, {x: 5.07, y: 3.85}, {x: 4.1, y: 6.78}, {x: 0.21, y: 3.46}, {x: 0.02, y: 4.37}, {x: 5.85, y: 1.76}, {x: 9.64, y: 4.41}, {x: 2.76, y: 6.84}, {x: 3.25, y: 5.89}, {x: 1.77, y: 1.1}, {x: 9.66, y: 5.84}, {x: 7.0, y: 2.38}, {x: 0.71, y: 3.57}, {x: 7.77, y: 5.96}, {x: 5.68, y: 3.91}, {x: 5.29, y: 6.73}, {x: 3.47, y: 2.05}, {x: 8.18, y: 0.83}, {x: 3.87, y: 9.81}],
    backgroundColor: 'rgb(255, 99, 132)'
  }],
};
const myChart1 = new Chart(ctx, {
    type: 'scatter',
    data: data,
   
    options: {
        maintainaspectratio: false,
        plugins: {
         legend: {
            display: false
         }
      },  
      aspectRatio: 1,  
      scales: {
       x:{ticks:{
        display:false
       },
          min:0,
          max:10},
       y:{ticks:{
        display:false
       },
        min:0,
        max:10
      }
      }
    }
  });
 /* const mix =document.getElementById("myChart1");
  const mixedChart = new Chart(mix, {
    data:{
      datasets:[{
        type: 'scatter',
        label: 'Scatterplot',
        data:[{x: 4.4, y: 7.91}, {x: 8.57, y: 8.41}, {x: 8.91, y: 9.68}, {x: 5.52, y: 8.03}, {x: 8.73, y: 6.7}, {x: 6.52, y: 1.52}, {x: 5.97, y: 2.96}, {x: 2.12, y: 2.56}, {x: 3.98, y: 0.93}, {x: 9.18, y: 9.55}, {x: 2.34, y: 3.37}, {x: 7.87, y: 9.3}, {x: 5.07, y: 3.85}, {x: 4.1, y: 6.78}, {x: 0.21, y: 3.46}, {x: 0.02, y: 4.37}, {x: 5.85, y: 1.76}, {x: 9.64, y: 4.41}, {x: 2.76, y: 6.84}, {x: 3.25, y: 5.89}, {x: 1.77, y: 1.1}, {x: 9.66, y: 5.84}, {x: 7.0, y: 2.38}, {x: 0.71, y: 3.57}, {x: 7.77, y: 5.96}, {x: 5.68, y: 3.91}, {x: 5.29, y: 6.73}, {x: 3.47, y: 2.05}, {x: 8.18, y: 0.83}]
      }, {
        type: 'doughnut',
        label: 'doughnut',
        data:[300],
        background:['rgb(255,99,132)']
      }],
    },
    options:{
      aspectRatio:1
    }
  })*/
 // This code needs to generate the points on click
let pointstoadd=0;
function pointspan(){
  newval=document.getElementById("pointinput").value;
  document.getElementById("pointspan").innerHTML= newval;
  if (newval>1){
    document.getElementById("adds").innerHTML='s';
  }
  else{
    document.getElementById("adds").innerHTML="";
  }




}
function addpointsbtn(){
  pointstoadd = document.getElementById("pointinput").value;


  addpoints(pointstoadd);
}
let totalpoints = 0;
let incircle = 0;
function addpoints(number){
 //Using this Section to create the animation
  dartimg=document.getElementById("dartimg");
  dartimg.src="../pic/dartbsingle1.gif";
  dartimg.style.display="block";


  if (!number){
  number=1;
}
let distance;
for (let i = 0; i < number; i++){
  let xval = (Math.random()*10).toFixed(2);
  let yval=(Math.random()*10).toFixed(2);
  myChart1.data.datasets[0].data.push({x:xval, y:yval});
  totalpoints++;
  distance=Math.sqrt(((5-xval)**2)+((5-yval)**2));
  if (distance < 5){
    incircle++;
  }


}


//myChart1.data.datasets[0].data[0]//
/*document.getElementById("test1").innerHTML=distance;*/
document.getElementById("pointsin").innerHTML = incircle;
document.getElementById("totalpoints").innerHTML=totalpoints;
document.getElementById("pointspercent").innerHTML= (incircle/totalpoints * 100).toFixed(2) + "%";
myChart1.update();
document.getElementById("piestimate").innerHTML=(4*(incircle/totalpoints)).toFixed(4);
};
function cleargraph(){


document.getElementById("pointsin").innerHTML = 0;
incircle=0;
document.getElementById("totalpoints").innerHTML=0;
totalpoints=0;
document.getElementById("pointspercent").innerHTML=0;
myChart1.data.datasets[0].data=[];
myChart1.update();
document.getElementById('piestimate').innerHTML=3.14;




};


