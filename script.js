var row = 1;

var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

	// Update required when add a new var
function displayDetails() {
	var aircraft = document.getElementById("aircraft").value;
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
		alert("You have not completed the form.");
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
	var cell12 = newRow.insertCell(11);
	//var cell13 = newRow.insertCell(12);
	
	// Required to add a new cell for each input field
	cell1.innerHTML = aircraft;
	cell2.innerHTML = date;
	cell3.innerHTML = departure;
	cell4.innerHTML = arrival;
	cell5.innerHTML = beforeHobbs;
	cell6.innerHTML = afterHobbs;
	cell7.innerHTML = beforeFob;
	cell8.innerHTML = afterFob;
	cell9.innerHTML = timeStart;
	cell10.innerHTML = timeTakeoff;
	cell11.innerHTML = timeLanding;
	cell12.innerHTML = timeShutdown;
	//cell13.innerHTML = result;
	
	row++;
}

// Function to reset the form
function resetForm() {
  document.getElementById("myForm").reset();
}