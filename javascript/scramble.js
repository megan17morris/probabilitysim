// function permute(string) {
//     if (string.length < 2) return string; // This is our break condition
  
//     var permutations = []; // This array will hold our permutations
//     for (var i = 0; i < string.length; i++) {
//       var char = string[i];
//       console.log(i+" Character is:" +char);
  
//       // Cause we don't want any duplicates:
//       if (string.indexOf(char) != i) // if char was used already
//         continue; // skip it this time
  
//       var remainingString = string.slice(0, i) + string.slice(i + 1, string.length); //Note: you can concat Strings via '+' in JS
//       console.log(i+ "Remaining String: "+ remainingString)
//       for (var subPermutation of permute(remainingString)){
//         console.log("Subpermutation: "+ subPermutation);
        
//         permutations.push(char + subPermutation)
//         console.log("char+subpermutation: " +char + subPermutation);
//     }}
//     return permutations;
//   }

//   var myString = "xxyz";
//  permutations = permute(myString);
//  for (permutation of permutations){
//    console.log(permutation)} //Use the output method of your choice