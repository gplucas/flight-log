var row = 1;

var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

	// Update required when add a new var
function displayDetails() {
	var departure = document.getElementById("departure").value;
	var arrival = document.getElementById("arrival").value;
	var beforeHobbs = document.getElementById("beforeHobbs").value;
	var afterHobbs = document.getElementById("afterHobbs").value;
	var beforeFob = document.getElementById("beforeFob").value;
	var afterFob = document.getElementById("afterFob").value;
	
	// Update the if
	if(!departure || !arrival || !beforeHobbs || !afterHobbs || !beforeFob || !afterFob) {
		alert("Please fill all the boxes");
		return;
	}
	
	var display = document.getElementById("display");
	
	var newRow = display.insertRow(row);
	
	// Test required. Verify if is required to add a new var cell
	var cell1 = newRow.insertCell(0);
	var cell2 = newRow.insertCell(1);
	var cell3 = newRow.insertCell(2);
	var cell4 = newRow.insertCell(3);
	var cell5 = newRow.insertCell(4);
	var cell6 = newRow.insertCell(5);
	
	// Test required. Verify if is required to add a new cell for each input field
	cell1.innerHTML = departure;
	cell2.innerHTML = arrival;
	cell3.innerHTML = beforeHobbs;
	cell4.innerHTML = afterHobbs;
	cell5.innerHTML = beforeFob;
	cell6.innerHTML = afterFob;
	
	row++;
}