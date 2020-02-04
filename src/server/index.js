const dotenv = require( 'dotenv' );
dotenv.config();

var path = require( 'path' );
const express = require( 'express' );
const mockAPIResponse = require( './mockAPI.js' );
let aylien = require( 'aylien_textapi' );

const app = express();

app.use( express.static( 'dist' ) );

let textapi = new aylien({
	application_id: process.env.API_ID,
	application_key: process.env.API_KEY
});

console.log( __dirname );

app.get( '/', function ( req, res ) {
	res.sendFile( 'dist/index.html' );
});

// designates what port the app will listen to for incoming requests
const port = 8080;
app.listen( port, function () {
	console.log( `NLP app is listening on port ${port}.` );
});

app.get( '/test', function ( req, res ) {
	console.log( 'GET request on /test path.' );
	res.send( mockAPIResponse );
});

app.get( '/process', function ( request, response ) {
	console.log( 'GET request sent to /process path with the following content:' );
	console.log( request.originalUrl );
});