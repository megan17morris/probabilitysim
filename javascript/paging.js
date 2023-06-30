// const list_items = [
//     "Item 1",
//     "Item 2",
//     "Item 3",
//     "Item 4",
//     "Item 5",
//     "Item 6",
//     "Item 7",
//     "Item 8",
//     "Item 9",
//     "Item 10",
//     "Item 11",
//     "Item 12"
// ]

let current_page = 2;
let rows = 3;
let columns = 2;

function DisplayList (items, columns_per_page, rows_per_page, page) {
	page--;

	let start = rows_per_page * columns_per_page*page;
	let end = start + rows_per_page * columns_per_page;
	let paginatedItems = items.slice(start, end);
	

	/*for (let i = 0; i < paginatedItems.length; i++) {
		let item = paginatedItems[i];

		let item_element = document.createElement('div');
		item_element.classList.add('item');
		item_element.innerText = item;
		
		wrapper.appendChild(item_element);
	}*/
	for (let r= 0; r < rows_per_page; r++){
		let rowstart= r * columns_per_page;
		let rowend = rowstart+ columns_per_page;
		let rowItems= paginatedItems.slice(rowstart,rowend);
        console.log("Row number is:");
        console.log(r);
		for (let c=0; c< columns_per_page; c++){
			let item = rowItems[c];
            console.log("Column number is:");
            console.log(c);
            console.log(item);
		}
	}
}

function permute(string) {
    if (string.length < 2) return string; // This is our break condition
  
    var permutations = []; // This array will hold our permutations
    for (var i = 0; i < string.length; i++) {
      var char = string[i];
      console.log(i+" Character is:" +char);
  
      // Cause we don't want any duplicates:
      if (string.indexOf(char) != i) // if char was used already
        continue; // skip it this time
  
      var remainingString = string.slice(0, i) + string.slice(i + 1, string.length); //Note: you can concat Strings via '+' in JS
      console.log(i+ "Remaining String: "+ remainingString)
      for (var subPermutation of permute(remainingString)){
        console.log("Subpermutation: "+ subPermutation);
        
        permutations.push(char + subPermutation)
        console.log("char+subpermutation: " +char + subPermutation);
    }}
    return permutations;
  }

  var myString = "xxyz";
 permutations = permute(myString);
 for (permutation of permutations){
   console.log(permutation)} //Use the output method of your choice

DisplayList(permute("DESK"),columns, rows, current_page);