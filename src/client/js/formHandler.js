import { validURL } from './inputValidation';

// Define function that processes the form submission
const handleSubmit = ( event ) => {

	event.preventDefault(); // Prevent page refresh caused by form submission

	// Get form data
	let formText = ( document.getElementById( 'URL' ) ) ? document.getElementById( 'URL' ).value: "";

	// Exit function early if the URL is invalid
	if( !validURL( formText ) ){

		alert( "Please enter a valid, full URL address.\nExample: https://www.google.com/" );
		return false;

	}

	// Update 'Results' element to let the user know the URL is being processed
	document.getElementById( 'Results' ).innerHTML = 'Processing URL...';
	
	// Send URL request to the server and wait for Aylien API response
	fetch( '/process', {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify( {
			'url': formText
		} )
	})
	// Convert response to JSON format
	.then( (response) => {
		return response.json();
	} )
	// Display results to the user
	.then( (data) => {
		
		let resultText = "";

		if( data.categories ){

			resultText = data.categories[0].label;

		}else{

			resultText = "Sorry, we could not accurately classify the text found at: " + formText;

		}

		document.getElementById( 'Results' ).innerHTML = resultText;

	});

};

export { handleSubmit };