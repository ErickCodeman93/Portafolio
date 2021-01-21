import React from 'react'
import { FooterComponent } from './components/ui/FooterComponent'
import { AppRouter } from './routes/AppRouter'

export const AppComponent = () => {
 
	const img1 = document.getElementById('imgtech');
	img1.style.visibility = "visible";
	const img2 = document.getElementById('imgtech2');
	img2.style.visibility = "visible";

	return (
		<>
			<AppRouter />
			<FooterComponent />
		</>
	)
}
