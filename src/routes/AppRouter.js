import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AboutMeComponent } from "../components/content/AboutMeComponent";
import { ContactComponent } from "../components/content/ContactComponent";
import { PortafolioComponent } from "../components/content/PortafolioComponent";
import { NavBarComponent } from "../components/ui/NavBarComponent";


export const AppRouter = () => {
	return (
		<Router>
			<>
				<NavBarComponent />

				<Switch>
					<Route exact path="/aboutMe" component={ AboutMeComponent } />
					<Route exact path="/portafolio" component={ PortafolioComponent } />
					<Route exact path="/contact" component={ ContactComponent } />

					<Redirect to="/aboutMe" />
				</Switch>
			</>
		</Router>
	)
}
