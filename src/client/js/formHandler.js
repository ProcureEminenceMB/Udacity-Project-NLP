const handleSubmit = ( event ) => {

	event.preventDefault(); // Prevent page refresh caused by form submission

	// Get form data
	let formText = document.getElementById( 'URL' ).value;

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

			resultText = "Sorry, we could not accurately classify the text found at: <br>" + formText;

		}

		document.getElementById( 'Results' ).innerHTML = resultText;

	});

};

export { handleSubmit };