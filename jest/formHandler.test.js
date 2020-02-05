import { handleSubmit } from '../src/client/js/formHandler';

test( `Validates handleSubmit() failure.`, () => {
  	window.alert = () => {};  // Create empty alert method to prevent false failures from jsdom
	expect( handleSubmit( new Event( 'submit' ) ) ).toBe( false );
} );