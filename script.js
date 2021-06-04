var row = 1;

var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

	// Update required when add a new var
function displayDetails() {
	var date = document.getElementById("date").value;
	var departure = document.getElementById("departure").value;
	var arrival = document.getElementById("arrival").value;
	var beforeHobbs = document.getElementById("beforeHobbs").value;
	var afterHobbs = document.getElementById("afterHobbs").value;
	var beforeFob = document.getElementById("beforeFob").value;
	var afterFob = document.getElementById("afterFob").value;
	var timeStart = document.getElementById("timeStart").value;
	var timeTakeoff = document.getElementById("timeTakeoff").value;
	var timeLanding = document.getElementById("timeLanding").value;
	var timeShutdown = document.getElementById("timeShutdown").value;
	
	// Alert to show the user to fill at least the first three input fields
	 if(!date || !departure || !arrival) {
		alert("Please, fill at least the Date, Departure and Arrival fields");
		return;
	 }
	
	var display = document.getElementById("display");
	
	var newRow = display.insertRow(row);
	
	// Required to add a new var cell always when update the code
	var cell1 = newRow.insertCell(0);
	var cell2 = newRow.insertCell(1);
	var cell3 = newRow.insertCell(2);
	var cell4 = newRow.insertCell(3);
	var cell5 = newRow.insertCell(4);
	var cell6 = newRow.insertCell(5);
	var cell7 = newRow.insertCell(6);
	var cell8 = newRow.insertCell(7);
	var cell9 = newRow.insertCell(8);
	var cell10 = newRow.insertCell(9);
	var cell11 = newRow.insertCell(10);
	
	// Required to add a new cell for each input field
	cell1.innerHTML = date;
	cell2.innerHTML = departure;
	cell3.innerHTML = arrival;
	cell4.innerHTML = beforeHobbs;
	cell5.innerHTML = afterHobbs;
	cell6.innerHTML = beforeFob;
	cell7.innerHTML = afterFob;
	cell8.innerHTML = timeStart;
	cell9.innerHTML = timeTakeoff;
	cell10.innerHTML = timeLanding;
	cell11.innerHTML = timeShutdown;
	
	row++;
}