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
//     "Item 12",
// 	"Item 13",
//     "Item 14",
//     "Item 15",
//     "Item 16",
//     "Item 17",
//     "Item 18"
// ]

function DisplayList (items, wrapper,columns_per_page, rows_per_page, page) {
	wrapper.innerHTML = "";
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
		let newrow = document.createElement("tr");
		for (let c=0; c< columns_per_page; c++){
			let item = rowItems[c];
			if (item){
			let item_element= document.createElement("td");
			item_element.classList.add('item');
			item_element.innerText= item;
			newrow.appendChild(item_element);
			}
		}
		wrapper.appendChild(newrow);
	}
}

/* Idea: Establish which page element ("DESK", "MOOD", or "Personal") which can each hold their own current page)*/
function SetupPagination (items, wrapper,columns_per_page, rows_per_page, pageelement) {
	wrapper.innerHTML = "";
	let page_count = Math.ceil(items.length / (rows_per_page*columns_per_page));
	let openbtn = OpenButton(items, pageelement);
	let closedbtn =CloseButton(items, page_count, pageelement);
	wrapper.appendChild(openbtn);
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, items, pageelement);
		
		wrapper.appendChild(btn);
	}
	wrapper.appendChild(closedbtn);

}

function PaginationButton (page, items, pageelement) {
	let button = document.createElement('button');
	button.innerText = page;
	let idtext = "Button" + page;
	button.setAttribute('id', idtext);
	if (pageelement.current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		pageelement.current_page = page;
		DisplayList(items, pageelement.list_element, columns, rows, pageelement.current_page);
		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');
		button.classList.add('active');
	});

	return button;
}
function OpenButton(items, pageelement){
	let openbtn = document.createElement("button");
	openbtn.classList.add("openingbutton");
	openbtn.innerText= "<";
	openbtn.addEventListener("click", function(){
		if (pageelement.current_page>1){
			pageelement.current_page = pageelement.current_page-1
			DisplayList(items, list_element, columns, rows, pageelement.current_page);
			let current_btn = document.querySelector('.pagenumbers button.active');
			current_btn.classList.remove('active');
			let id_text = "#Button" + pageelement.current_page;
			let new_btn = document.querySelector(id_text);
			new_btn.classList.add('active');

			/* I am able to deactive the active status when it uses the arrow. I would like to have each
			numbered button have an id so that I can refer back to it and highlight 
			the correct button*/
			
		}
	});
	return openbtn;
}
function CloseButton(items, page_count, pageelement){
	let closedbtn = document.createElement("button");
	closedbtn.classList.add("closingbutton");
	/*let rightcircleimage = document.createElement("img");*/

	closedbtn.innerHTML=">";
	closedbtn.addEventListener("click", function(){
		if (pageelement.current_page < page_count){
			pageelement.current_page = pageelement.current_page+1;
			DisplayList(items, list_element, columns, rows, pageelement.current_page);
			let current_btn = document.querySelector('.pagenumbers button.active');
			current_btn.classList.remove('active');
			let id_text = "#Button" + pageelement.current_page;
			let new_btn = document.querySelector(id_text);
			new_btn.classList.add('active');

			/* I am able to deactive the active status when it uses the arrow. I would like to have each
			numbered button have an id so that I can refer back to it and highlight 
			the correct button*/
			
		}
	});
	return closedbtn;
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

const list_element = document.getElementById('list');
const pagination_element = document.getElementById('pagination');
let current_page = 1;
let rows = 3;
let columns = 2;

let desk ={current_page:1, list_element : document.getElementById("list"),
 pagination_element: document.getElementById("pagination")};

let mood ={current_page:1, list_element: document.getElementById("moodlist"),
 pagination_element: document.getElementById("moodpages")};

let personal = {current_page:1};

DisplayList(permute("DESK"), desk.list_element, columns, rows, current_page);
SetupPagination(permute("DESK"), desk.pagination_element, columns, rows, desk);

moodpermute= permute("MOOD");
DisplayList(moodpermute, mood.list_element, 2, 3, 1);
SetupPagination(moodpermute, mood.pagination_element, 2 , 3, mood);