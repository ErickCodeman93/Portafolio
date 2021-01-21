import React from 'react'

export const ContactComponent = () => {
	return (
		<div className="cover-container m-auto">
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-6">
						<h1 className="text-center animate__animated  animate__bounce mb-5">Contacto</h1>
						<ul id="contact-list" className="animate__animated animate__fadeIn m-auto">
							<li>Email: </li>
							<li><a href={`mailto:erickalvavazquez@gmail.com`}>erickalvavazquez@gmail.com</a></li>
							<li>Teléfono: </li>
							<li></li>
							<li><a href={`tel:55 5197 7836`}>55 5197 7836</a></li>
							<li>GitHub: </li>
							<li><a href={`https://github.com/ErickCodeman93`} target="_blank" rel="noopener noreferrer">ErickCodeman93</a></li>
							<li>LinkIn: </li>
							<li><a href={`https://www.linkedin.com/in/erick-alva-286b93193/`} target="_blank" rel="noopener noreferrer">Erick Alva</a></li>
						</ul>
					</div>
					<div className="col-12 col-md-6 animate__animated animate__fadeIn">
						<p style={ { textAlign: 'center' } }>
							<img src={'./assets/programacion2.svg'} alt="avatar" width="200" />
						</p>
					</div>
				</div>
				<div className="row mt-4">
					<div className="col-12">
						{/* <h3 className="text-center mb-4">Descarga mi CV</h3> */}
						<p className="lead text-center">
							<a href={`./assets/ErickAlvaCV.pdf`} target="_blank" rel="noopener noreferrer" className="btn btn-outline-info">Descargar CV</a>
						</p>
					</div>
				</div>
			</div>
			<br />
			<br /> 
		</div>
	)
}
