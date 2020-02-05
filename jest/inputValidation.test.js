import { validURL } from '../src/client/js/inputValidation';

test( `Validates Google's landing page`, () => {
	expect( validURL( 'https://www.google.com/' ) ).toBe( true );
} );

test( `Validates truncated Google's landing page`, () => {
	expect( validURL( 'www.google.com/' ) ).toBe( false );
} );