const dotenv = require( 'dotenv' );
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
let aylien = require( 'aylien_textapi' );

const app = express()

app.use(express.static('dist'))

let textapi = new aylien({
	application_id: process.env.API_ID,
	application_key: process.env.API_KEY
});

console.log( `API ID: ${process.env.API_ID}` );
console.log( `API KEY: ${process.env.API_KEY}` );

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
