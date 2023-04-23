function gipher(x, name, padnum){
    filename="../pic/"+String(name)+".gif";
    x.src=filename;
    paddingamount=String(padnum)+"%"
    x.style.padding=paddingamount
  }
  function pnger(x, name, padnum){
    filename="../pic/"+String(name)+".png";
    x.src=filename;
    paddingamount=String(padnum)+"%"
    x.style.padding=paddingamount
  }
const cardcolumnlist= document.querySelectorAll('.cardcol');
  function resizetest(){
    let contentbox = document.getElementById('content');
    let contentwidth= contentbox.offsetWidth;
   
    
    if (contentwidth>= 992){
        cardcolumnlist.forEach(card =>{
            card.style.width= '25%';
        });
    } else if(contentwidth>= 600){
        cardcolumnlist.forEach(card =>{
            card.style.width='50%';
        })
    } else{
        cardcolumnlist.forEach(card=>{
            card.style.width= '100%'
        })
    }

}
window.onload = () => { 
    resizetest()
  }
  function openNav() {
    // maybe try to turn it into one function //
    if(window.innerWidth < 550){
      document.getElementById("mySidebar").style.width = "100%";
      document.getElementById("main").style.display = "none";
      document.getElementById("openbtn2").style.display= "block";
    }
    else{
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    }

    
    return
  }
  
  function closeNav() {
    document.getElementById("main").style.display="block"
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("openbtn2").style.display= "none";
    
    return
}

  //Set openbtn value to 0 to begin with. Function should check value, then if 0 execute open, if 1, execute close

  function OCNav(){
    if (document.getElementById("openbtn1").value == 0){
      openNav()
      document.getElementById("openbtn1").value = 1; 
      document.getElementById("openbtn2").value = 1;
      
    }
    else(
      closeNav(),document.getElementById("openbtn1").value = 0,
      document.getElementById("openbtn2").value = 1
      
    )
    
    return
  }
  function OCNavre(){
    window.setTimeout (() => { OCNav (); }, 0);
    window.setTimeout (() => {resizetest(); }, 500);

  }


// On resize, check if button is opened, if not resize the page based on normal breakpoints,
// If the button is opened, subtract the width of sidebar, then resize blocks based on what's left
//Idea: have a test text box, upon resize, the
