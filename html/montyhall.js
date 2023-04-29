      var switch1 = 0;
      var stay1 = 0;
      var total1 = 0;
      document.getElementById("switch#").innerHTML= switch1;
      document.getElementById("stay#").innerHTML=stay1;
      document.getElementById("total#").innerHTML=total1;
      document.getElementById("switch%"). innerHTML = "0%";
      document.getElementById("stay%"). innerHTML = "0%"
      
      //document.getElementById("switch%"). innerHTML = (switch1/total1).toFixed(2);
      //document.getElementById("stay%"). innerHTML = (stay1/total1).toFixed(2); 
      function randomIntFromInterval (min,max){
          return Math.floor(Math.random()*(max-min+1) + min)
      }
     // function timeouttest(){
       // document.getElementById("testelement").innerHTML="this should change after a number of seconds"
      //}
      async function placecardoor(cardoor){
  
      await delay(1000);
  
      if (cardoor == 1){
              document.getElementById("d1").src="../pic/car.png";
          }
          else if (cardoor==2){
              document.getElementById("d2").src="../pic/car.png";
          }
          else{
              document.getElementById("d3").src="../pic/car.png";
          }
  
  }
  
      function choosecardoor(cardoor){
          document.getElementById("d1").src="../pic/goat.png";
          document.getElementById("d2").src="../pic/goat.png";
          document.getElementById("d3").src="../pic/goat.png";
          var newtimeout =setTimeout(placecardoor(cardoor), 1000);
      }
      let goatlist = [];
      let doorlist =[];
      let cardoor;
      
      function montyhall(){
        document.getElementById("doorimg1").src = "../pic/cardoor.png";
        document.getElementById("doorimg2").src = "../pic/cardoor.png";
        document.getElementById("doorimg3").src = "../pic/cardoor.png";
        document.getElementById("door1").style.opacity = "100%";
        document.getElementById("door2").style.opacity = "100%";
        document.getElementById("door3").style.opacity = "100%";
        goatlist =[1,2,3];
        doorlist=[1,2,3];
        
        //sbtnlist.forEach(button =>{
          //button.style.display="none";
        //}) For every button list modifier, just going to adjust row style
        document.getElementById("stayswitchrow").style.display="none";
        cardoor = randomIntFromInterval(1,3);
        // need to remove chosen car door from potential goat list
  
        var timingout= setTimeout(choosecardoor(cardoor),1000);
        goatlist.splice(cardoor-1,1);
       // document.getElementById("testelement").innerHTML=goatlist;
        //doorbtnlist.forEach(button => {
          //button.style.display = "block"
        //});
        document.getElementById("startbuttonrow").style.display="none";
        document.getElementById("selectrow").style.display="flex";
        document.getElementById("instruction").innerHTML = "Which door would you like to choose? Click the buttons below for your choice."
      };
      let dchoice;
      function doorchoice(event){
        var x =event.target; 
        //document.getElementById("testelement").innerHTML= "The door choice is " + x.value;
        dchoice=x.value;
        if (dchoice == 1){
          document.getElementById("doorimg1").src = "../pic/cardoorchosen.png";
        }
        else if (dchoice == 2){
          document.getElementById("doorimg2").src = "../pic/cardoorchosen.png";
        }
        else{
          document.getElementById("doorimg3").src = "../pic/cardoorchosen.png";
        }
        doorlist.splice(dchoice-1,1)
        //doorbtnlist.forEach(button => {
          //button.style.display = "none"
        //});
        document.getElementById("selectrow").style.display="none";
        
        //Implement a code to change the door to one with a star
  
        if (dchoice == cardoor){
          goatchoice=goatlist[randomIntFromInterval(0,1)]
          for (var i = 0; i < 2; i++){
            if (doorlist[i]==goatchoice){
              doorlist.splice(i,1);
            }
          }
        }
        else{
          for (var i = 0; i < 2; i++){
            if (goatlist[i] == dchoice){
              goatlist.splice(i,1);
            }
          }
  
          goatchoice = goatlist[0];
          for (var i = 0; i < 2; i++){
            if (doorlist[i] == goatchoice){
              doorlist.splice(i,1);
            }
          }
        }
  
        //Instead of sbtn list, i need to make the start button 
        //disappear and the switch buttons appear
        //sbtnlist.forEach(button => {
          //button.style.display ="block"
        //})
        
        if (goatchoice == 1){
          document.getElementById("door1").style.opacity = "0%";
        }
        else if (goatchoice == 2){
          document.getElementById("door2").style.opacity = "0%";
        }
        else{
          document.getElementById("door3").style.opacity = "0%";
        }
        document.getElementById("instruction").innerHTML =
         "Door " + goatchoice + " is a goat. " + 
         "Would you like to STAY with Door " + dchoice +
          " or would you like to SWITCH to Door " + doorlist[0]+ "? "
        document.getElementById("switchspan").innerHTML= doorlist[0];
        document.getElementById("stayspan").innerHTML=dchoice;
        document.getElementById("stayswitchrow").style.display="flex";
        // Need to reveal one of the goat doors
        //Need to change the text to ask to switch or stay
        }
  
    function schoice(event){
      //sbtnlist.forEach(button => {
        //  button.style.display ="none"
        //})
      var switch1 = document.getElementById("switch#").innerHTML;
      var stay1 = document.getElementById("stay#").innerHTML;
      var total1 = document.getElementById("total#").innerHTML;
      document.getElementById("stayswitchrow").style.display="none";
      var sschoice = event.target.value; 
        if (sschoice =="stay"){
          if(dchoice==cardoor){
            document.getElementById("instruction").innerHTML = 
            "You win a Car!"
            stay1++;
          }
          else{
            document.getElementById("instruction").innerHTML = 
            "You lost but you can have this goat :("
            switch1++;
          }
          if (dchoice==1){
            document.getElementById("door1").style.opacity = "0%";
          }
          else if (dchoice==2){
            document.getElementById("door2").style.opacity = "00%";
          }
          else{
            document.getElementById("door3").style.opacity = "0%";
          }
        }
      else{
        if(dchoice==cardoor){
          document.getElementById("instruction").innerHTML = 
            "You lost but you can have this goat :("
            stay1++;
          }
        else{
          switch1++;
          document.getElementById("instruction").innerHTML = 
            "You win a Car!"
        }
        if (doorlist[0]==1){
          document.getElementById("door1").style.opacity = "0%";
        }
        else if(doorlist[0]==2){
          document.getElementById("door2").style.opacity = "0%";
        }
        else if (doorlist[0]==3){
          document.getElementById("door3").style.opacity = "0%";
        }
      }
        total1++;
      document.getElementById("restartrow").style.display="flex";
      //Switch or Stay
      // If Stay //unveil door choice
        // inside if stay was correct, have area up top say winner
        // if stay incorrect, change up top to loser
      // If switch, unveil last istem in doorlist
        // if switch correct, change to winner
        // if switch incorrect, change to loser
        document.getElementById("switch#").innerHTML=switch1;
        document.getElementById("switch#").value=switch1;
        document.getElementById("stay#").innerHTML=stay1;
        document.getElementById("stay#").value=stay1;
        document.getElementById("total#").innerHTML=total1;
        document.getElementById("total#").value=total1;
        document.getElementById("switch%"). innerHTML = Math.round((switch1/total1).toFixed(3)*100 )+"%";
        document.getElementById("stay%"). innerHTML = Math.round((stay1/total1).toFixed(3)*100 )+ "%"; 
        
        updatechart();
        //document.getElementById("switch%"). innerHTML = (switch1/total1).toFixed(2)*100 +"%";
        //document.getElementById("stay%"). innerHTML = (stay1/total1).toFixed(2)*100 + "%"; 
      }
  
  function delay(milliseconds){
    return new Promise(resolve => {
      setTimeout(resolve,
  milliseconds);
      });
  }
  function restart(event){
    document.getElementById("restartrow").style.display="none";
    // Want Restart to hide everything and then turn them back to goats.
      //Reset door image
      document.getElementById("doorimg1").src = "../pic/cardoor.png";
      document.getElementById("doorimg2").src = "../pic/cardoor.png";
      document.getElementById("doorimg3").src = "../pic/cardoor.png";
      document.getElementById("door1").style.opacity = "100%";
      document.getElementById("door2").style.opacity = "100%";
      document.getElementById("door3").style.opacity = "100%";
      // Reset goat image
      document.getElementById("d1").src="../pic/goat.png";
      document.getElementById("d2").src="../pic/goat.png";
      document.getElementById("d3").src="../pic/goat.png";
    document.getElementById("startbuttonrow").style.display="flex";
  }
  
  function automatedmontyhall(){
    var switch1 = document.getElementById("switch#").innerHTML;
    var stay1 = document.getElementById("stay#").innerHTML;
    var total1 = document.getElementById("total#").innerHTML;
      let cardoor;
      cardoor = randomIntFromInterval(1,3);
      let dchoice;
      dchoice=randomIntFromInterval(1,3);
      if (dchoice == cardoor){
        stay1++;
      }
      else{
        switch1++
      }
      total1++;
    document.getElementById("switch%").innerHTML = Math.round((switch1/total1).toFixed(3)*100 )+"%";
    document.getElementById("stay%").innerHTML = Math.round((stay1/total1).toFixed(3)*100 )+ "%"; 
    document.getElementById("switch#").innerHTML= switch1;
    document.getElementById("switch#").value= switch1;
    document.getElementById("stay#").innerHTML=stay1;
    document.getElementById("stay#").value=stay1;
    document.getElementById("total#").innerHTML=total1;
    document.getElementById("total#").value=total1;
    updatechart();
  } 
  
function automontyhall(){
  
  var rounds= document.getElementById("roundsinput").value;
  
  if (rounds> 1500 || rounds <=0){
    document.getElementById("alertv").style.display="block";
    return
  }
  else{
    document.getElementById("alertv").style.display="none"
  }
  var i=1;
  function myLoop(){
    setTimeout(function(){
      automatedmontyhall();
      i++;
      if(i<rounds){
        myLoop();
      }
    }, 1)
  }
  
  myLoop();
  if(rounds == 1){
    return
  }
  automatedmontyhall();
}


function reset(){
  document.getElementById("switch%").innerHTML = 0;
  document.getElementById("stay%").innerHTML = 0; 
  document.getElementById("switch#").innerHTML= 0;
  document.getElementById("stay#").innerHTML=0;
  document.getElementById("total#").innerHTML=0;
  document.getElementById("switch#").value= 0;
  document.getElementById("stay#").value=0;
  document.getElementById("total#").innerHTML=0;
  updatechart();
}
        
  