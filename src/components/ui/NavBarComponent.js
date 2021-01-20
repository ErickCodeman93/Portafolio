import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBarComponent = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
			<div className="container">
				<Link 
					className="navbar-brand" 
					to="/"
				>
					Inicio
				</Link>

				<div className="navbar-collapse">
					<div className="navbar-nav">

						<NavLink 
							activeClassName="active"
							className="nav-item nav-link" 
							exact
							to="/aboutMe"
						>
							About Me
						</NavLink>

						<NavLink 
							activeClassName="active"
							className="nav-item nav-link" 
							exact
							to="/portafolio"
						>
							Portafolio
						</NavLink>
					</div>
				</div>

				<div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
				<ul className="navbar-nav ml-auto">
					<NavLink 
						activeClassName="active"
						className="nav-item nav-link" 
						exact
						to="/contact"
					>
						Contacto
					</NavLink>
				</ul>
			</div>
			</div>
		</nav>
	)
}
