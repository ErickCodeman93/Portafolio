import React from 'react'
import { FooterComponent } from './components/ui/FooterComponent'
import { AppRouter } from './routes/AppRouter'

export const AppComponent = () => {
	return (
		<>
			<AppRouter />
			<FooterComponent />
		</>
	)
}
