// Use dotenv to pull in private API setup variables from the .env file (not stored on GitHub)
const dotenv = require( 'dotenv' );
dotenv.config();

// Require all necessary packages
var path = require( 'path' );
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const cors = require( 'cors' );
let aylien = require( 'aylien_textapi' );

// Create instance of server and apply settings.
const app = express();
app.use( express.static( 'dist' ) );
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );
app.use( cors() );

// Setup server port and apply listener
const port = 8080;
app.listen( port, function () {

	console.log( `NLP app is listening on port ${port}.` );

});

// Initialize Aylien API
let textapi = new aylien({
	application_id: process.env.API_ID,
	application_key: process.env.API_KEY
});

// Setup default route for app
app.get( '/', function ( req, res ) {

	res.sendFile( 'dist/index.html' );

});

// Setup route for handling Aylien API requests
app.post( '/process', function ( request, response ) {

	console.log( `'Process' POST route triggered with the following content:` );
	console.log( request.body );

	textapi.classify( {
			'url': request.body.url
		}, function ( apiError, apiResponse ) {

			if( apiError === null ){

				console.log( apiResponse.categories[0].label );
				response.send( apiResponse );
				

			}else{

				console.log( apiError );
				response.send( apiError );

			}

		});

});