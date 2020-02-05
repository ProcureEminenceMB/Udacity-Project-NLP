// Define function that determines if URL is valid
const validURL = ( url ) => {

	let valid = false;

	try{

		let urlObj = new URL( url ); // URL is valid if constructor doesn't throw TypeError exception
		valid = true;

	}catch( error ){

		console.log( error.message ); // Log URL constructor TypeError to console

	}

	return valid;

};

export { validURL };