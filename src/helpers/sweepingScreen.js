export const sweepingScreen = ( history ) => {

	let xDown = null;                                                        
	let yDown = null;
	
	document.addEventListener( 'touchstart', handleTouchStart, false );        
	document.addEventListener( 'touchmove', handleTouchMove, false );
	
	function getTouches( evt ) {

		return evt.touches ||             // browser API
				evt.originalEvent.touches; // jQuery
	}; //end function                                                     

	function handleTouchStart( evt ) {
		
		let firstTouch = null;
		firstTouch = getTouches(evt)[0];                                    
		xDown = firstTouch.clientX;                                      
		yDown = firstTouch.clientY;                                      
	}; //end function                                           

	function handleTouchMove( evt ) {

		try {
			
			const arrNav = [
				'aboutMe',
				'portafolio',
				'contact',
			];

			if ( ! xDown || ! yDown )
				return;

			let myUrl = window.location.pathname.replace( "/", "" );
			const found = arrNav.find( element => element === myUrl );
			const idxFound = arrNav.indexOf( found );

			let xUp = evt.touches[0].clientX;                                    
			let yUp = evt.touches[0].clientY;

			let xDiff = xDown - xUp;
			let yDiff = yDown - yUp;

			// console.log( xDiff );
			
			// console.log( yDiff );

			if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
				if ( xDiff > 0 ) {
					/* left swipe */ 
					
					if( idxFound < 2 )
						history.push( `/${ arrNav[ idxFound + 1 ] }` );
					else
						history.push( `/${ arrNav[ idxFound ] }` );

					xDown = null;
					yDown = null;       
					xUp = null;
					yUp = null;
					document.removeEventListener( 'touchstart', handleTouchStart );        
					document.removeEventListener( 'touchmove', handleTouchMove );
					return;
				} //end if 
				else {
					/* right swipe */
					
					if( idxFound > 0 )
						history.push( `/${ arrNav[ idxFound - 1 ] }` );
					else
						history.push( `/${ arrNav[ idxFound ] }` );

					xDown = null;
					yDown = null;       
					xUp = null;
					yUp = null;
					document.removeEventListener( 'touchstart', handleTouchStart );        
					document.removeEventListener( 'touchmove', handleTouchMove );
					return;
					
				} //end else                    
			} //end if 
			else {
				if ( yDiff > 0 ) {
					/* up swipe */ 
				} else { 
					/* down swipe */
				}                                                                 
			} //end else

		} //end try 
		catch (error) {
			console.log( error );
		} // end catch
	}; //end function


} //End Helper