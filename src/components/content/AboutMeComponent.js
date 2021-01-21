import React from 'react'

export const AboutMeComponent = () => {

	const scrollBottom = ( e ) => {
		e.preventDefault();
		window.scrollTo(0, 640);

		// let i = 0;
		// let int = setInterval( () => {
		//   window.scrollTo(0, i);
		//   i += 90;
		//   if (i >= 1000) clearInterval(int);
		// }, 10);
		
	} //end function

	return (
		<div className="cover-container animate__animated animate__fadeIn m-auto" >
			<div className="aboutUseContainer text-center">
				{/* <div className="cover-container animate__animated animate__fadeIn m-auto" style={ { backgroundImage: `url(./assets/test1.svg)`  } }> */}
					<div className="image-cropper m-auto">
						<img src={'./assets/people1.jpg'} alt="avatar" className="profile-pic" />
					</div>
					<h1 className="mb-4"> Hola mi nombre es Erick </h1>
					<p className="lead mt-3">Soy Ingeniero en Tecnologías de la Información y Comunicaciones dedicado al desarrollo de software.</p>
					<p className="lead mt-4">
						<button className="btn btn-lg btn-secondary fw-bold border-white bg-white" onClick={  scrollBottom }>Leer más</button>
					</p>
			</div>
			<div>
					<br /><br /><br /><hr /><br />
					<div className="row" style={ { position: 'relative' } }>
						<div className="col-12 col-md-6">
						</div>
						<div className="col-12 col-md-6">
							<h3 className="text-center mb-3">Acerca de mí</h3>
							<img src={'./assets/people2.jpg'} alt="avatar" width="320" style={{ borderRadius : '12px' }}/>
						
							<p className="lead mt-2" style={ { textAlign : 'justify' } }>Cuento con 3 años de experiencia en el área de desarrollo de software. También cuento con conocimiento en automatización y arquitectura de software.</p>
							<br />
							<p style={ { textAlign: 'right' } }>
								<img src={'./assets/datos.svg'} alt="avatar" width="200" />
							</p>
							<img id="img-about-me" src={'./assets/algoritmo2.svg'} alt="avatar"/>
						</div>
					</div>
			</div>
		</div>
	)
}