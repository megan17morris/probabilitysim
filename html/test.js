function gipher( name, padnum){
    filename="../pic/"+String(name)+".gif";
    console.log(filename)
    paddingamount=String(padnum)+"%"
    return(filename, paddingamount)
    
  }
  console.log(gipher("capricorn",9))
  