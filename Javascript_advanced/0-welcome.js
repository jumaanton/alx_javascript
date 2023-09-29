function welcome(firstName, lastName) {
	// Create the fullName variable by concatenating firstName and lastName with a space in between
	var fullName = firstName + ' ' + lastName;
  
	// Define the displayFullName function
	function displayFullName() {
	  // Display an alert with the welcome message containing the fullName variable
	  alert('Welcome ' + fullName + '!');
	}
  
	// Call the displayFullName function
	displayFullName();
  }