const handleSubmit = ( event ) => {

	event.preventDefault(); // Prevent page refresh caused by form submission

	// Get form data
	let formText = document.getElementById( 'URL' ).value;
	
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
		document.getElementById( 'results' ).innerHTML = data.categories[0].label;
	});

};

export { handleSubmit };