import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import React from 'react'
// import { Link, NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const NavBarComponent = () => {

	const changeActiveNav = ( e, v ) => {
		
		e.classList.add( 'active' );
		const navItem = document.getElementsByClassName( 'nav-link' );
		
		for ( const iterator of navItem ){

				let q = parseInt( iterator.getAttribute( 'value' ) );

				if( q !== v )
					iterator.classList.remove( 'active' );
		} //end for

	}; //end function

	return (
		<div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column m-bottom-nav">
			<header className="mb-auto">
				<div>
					<h3 className="float-md-start mb-0">
						<Link 
							className="navbar-brand text-white" 
							to="/"
						>
							Erick Alva
						</Link>						
					</h3>
					<nav className="nav nav-masthead justify-content-center float-md-end">
						<Link 
							className="nav-link active" 
							to="/aboutMe"
							value="1"
							onClick={ ( e ) => changeActiveNav( e.target, 1 ) }
						>
							Acerca de mí
						</Link>
						<Link 
							className="nav-link" 
							to="/portafolio"
							value="2"
							onClick={ ( e ) => changeActiveNav( e.target, 2 ) }
						>
							Mí trabajo
						</Link>
						<Link 
							className="nav-link" 
							to="/contact"
							value="3"
							onClick={ ( e ) => changeActiveNav( e.target, 3 ) }
						>
							Contacto
						</Link>
						<div className="ml-3 nav-link nav-icons">
							<span><strong>|</strong></span>
						</div>
						<div className="ml-3 nav-link nav-icons">
							<FontAwesomeIcon icon={faGithub} size="lg" />
						</div>
						<div className="ml-3 nav-link nav-icons">
							<FontAwesomeIcon icon={faLinkedinIn} size="lg" />
						</div>
					</nav>
				</div>
			</header>
		</div>

		// <nav className="navbar navbar-expand-sm navbar-light bg-light mb-5">
		// 	<div className="container">
		// 		<Link 
		// 			className="navbar-brand" 
		// 			to="/"
		// 		>
		// 			Inicio
		// 		</Link>

		// 		<div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
		// 			<ul className="navbar-nav ml-auto">
		// 				<NavLink 
		// 					activeClassName="active"
		// 					className="nav-item nav-link" 
		// 					exact
		// 					to="/aboutMe"
		// 				>
		// 					About Me
		// 				</NavLink>

		// 				<NavLink 
		// 					activeClassName="active"
		// 					className="nav-item nav-link" 
		// 					exact
		// 					to="/portafolio"
		// 				>
		// 					Portafolio
		// 				</NavLink>
		// 				<NavLink 
		// 					activeClassName="active"
		// 					className="nav-item nav-link" 
		// 					exact
		// 					to="/contact"
		// 				>
		// 					Contacto
		// 				</NavLink>
		// 			</ul>
		// 		</div>
		// 	</div>
		// </nav>
	)
}
