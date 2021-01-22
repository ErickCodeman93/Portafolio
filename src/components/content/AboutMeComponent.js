import React from 'react';

export const AboutMeComponent = () => {

	const scrollBottom = ( e ) => {
		e.preventDefault();
		window.scrollTo(0, 640);
	} //end function

	const scrollUp = ( e ) => {
		e.preventDefault();
		window.scrollTo(640, 0);
	} //end function

	return (
		<div className="cover-container animate__animated animate__fadeIn m-auto" >
			<div className="aboutUseContainer text-center container">
				<div className="image-cropper m-auto">
					<img src={'./assets/perfil.webp'} alt="avatar" className="profile-pic" />
				</div>
				<h1 className="mb-4"> Hola mí nombre es Erick </h1>
				<p className="lead mt-3">Soy Ingeniero en Tecnologías de la Información y Comunicaciones dedicado al desarrollo de software.</p>
				<p className="lead mt-4">
					<button className="btn btn-lg btn-secondary fw-bold border-white bg-white" onClick={ scrollBottom }>Leer más</button>
				</p>
			</div>
			<div className="container">
				<br /><br /><hr /><br /><br />
				<div className="row" style={ { position: 'relative' } }>
					<div className="col-12 col-md-6">
					</div>
					<div className="col-12 col-md-6">
						<h3 className="text-center mb-3">Acerca de mí</h3>
						<p style={ { textAlign: 'center' } }>
							<img id="perfil2" src={'./assets/perfil2.jpeg'} alt="avatar" style={{ borderRadius : '12px' }}/>
						</p>
						<p className="lead mt-2" style={ { textAlign : 'justify' } }>Tengo 3 años de experiencia en el área de desarrollo de software. También cuento con el conocimiento en automatización y arquitectura de software.</p>
						<br />
						<img id="img-about-me" src={'./assets/algoritmo2.svg'} alt="avatar"/>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<p className="lead mt-2" style={ { textAlign : 'justify' } }>
								Tengo experiencia en las siguientes tecnologías:
							</p>
							<ul>
								<li> Bash Script</li>
								<li> CSS (SCSS)</li>
								<li> Desarrollo de aplicaciones móviles y publicación en tienda de aplicaciones ( Ionic Framework )</li>
								<li> Git</li>
								<li> Html ( Bootstrap Framework )</li>
								<li> JavaScript ( Angular Js, Jquery, React Js, TypeScript)</li>
								<li> Php ( Laravel Framework )</li>
								<li> Redis</li>
								<li> SQL</li>
								<li> Wordpress</li>
							</ul>
						</div>
						<div className="col-md-6">
							<p style={ { textAlign: 'right' } }>
								<img id="img-datos" src={'./assets/datos.svg'} alt="avatar" width="200" />
							</p>
						</div>
					</div>
				</div>
			</div>
			<p className="text-center up" onClick={ scrollUp }>Ir arriba</p>
			<br />
		</div>
	)
}