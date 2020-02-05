import { validURL } from './inputValidation';

const handleSubmit = ( event ) => {

	event.preventDefault(); // Prevent page refresh caused by form submission

	// Get form data
	let formText = document.getElementById( 'URL' ).value;

	if( !validURL( formText ) ){

		alert( "Please enter a valid, full URL address.\nExample: https://www.google.com/" );
		return false;

	}

	document.getElementById( 'Results' ).innerHTML = 'Processing URL...';
	
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
	.then( (response) => {
		return response.json();
	} )
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