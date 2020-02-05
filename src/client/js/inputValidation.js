const validURL = ( url ) => {

	let valid = false;

	try{

		let urlObj = new URL( url );
		valid = true;

	}catch( error ){

		console.log( error.message );

	}

	return valid;

};

export { validURL };