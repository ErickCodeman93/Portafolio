import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export const NavBarComponent = () => {

	let location = useLocation();

	useEffect( () => {
		
		const navItem = document.getElementsByClassName( 'nav-link' );
		const path_current = location.pathname.replace( "/","" );
		const arrNav = {
			'aboutMe' 		: 1,
			'portafolio' 	: 2,
			'contact' 		: 3
		}

		for ( const iterator of navItem ){

			let q = parseInt( iterator.getAttribute( 'value' ) );
			if( q !== arrNav[ path_current ] )
				iterator.classList.remove( 'active' );
			else 
				iterator.classList.add( 'active' );
		} //end for
	}, [ location ]);

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
					<h3 id="text-name-nav" className="float-md-start mb-sm-2 text-center">
						<Link 
							className="navbar-brand text-white" 
							to="/"
						>
							<img id="img-logo-nv" src={'./assets/erick.png'} alt="Logo"/> Erick Alva
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
							<a href={`https://github.com/ErickCodeman93`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
						</div>
						<div className="ml-3 nav-link nav-icons">
							<a href={`https://www.linkedin.com/in/erick-alva-286b93193/`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} size="lg" /></a>
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
