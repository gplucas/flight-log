var row = 1;

var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

function displayDetails() {
	var departure = document.getElementById("departure").value;
	var arrival = document.getElementById("arrival").value;
	
	if(!departure || !arrival) {
		alert("Please fill all the boxes");
		return;
	}
	
	var display = document.getElementById("display");
	
	var newRow = display.insertRow(row);
	
	var cell1 = newRow.insertCell(0);
	var cell2 = newRow.insertCell(1);
	
	cell1.innerHTML = departure;
	cell2.innerHTML = arrival;
	
	row++;
}