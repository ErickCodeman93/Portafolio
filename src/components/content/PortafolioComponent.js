import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const PortafolioComponent = () => {

	const responsive = {
		superLargeDesktop: {
		  // the naming can be any, depends on you.
		  breakpoint: { max: 4000, min: 3000 },
		  items: 5
		},
		desktop: {
		  breakpoint: { max: 3000, min: 1024 },
		  items: 3
		},
		tablet: {
		  breakpoint: { max: 1024, min: 464 },
		  items: 2
		},
		mobile: {
		  breakpoint: { max: 464, min: 0 },
		  items: 1
		}
	  };

	return (
		<>
			<div className="cover-container animate__animated animate__fadeIn m-auto">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h1 className="text-center">Un poco de mí trayectoria y experiencia.</h1>
							<p className="text-center">Te muestro parte de mi trabajo y colaboraciones en el desarrollo, ha sido un camino de locura!! que he disfrutado bastante, espero que lo encuentres interesante. </p>
						</div>
					</div>
				</div>
			</div>
			<br />
			<div className="container mt-3 mb-4">
				<div className="row">
					<div className="col-12">				
						<Carousel 
							responsive={responsive}
							infinite={true}
							swipeable={false}
							draggable={false}
							// showDots={true}
							autoPlay={true}
							autoPlaySpeed={10000}
							keyBoardControl={true}
							// customTransition="all .5"
							// transitionDuration={5000}
							containerClass="carousel-container"
							// removeArrowOnDeviceType={["tablet", "mobile"]}
							// dotListClass="custom-dot-list-style"
  							itemClass="carousel-item-padding-40-px"
						>
							<div className="d-flex justify-content-center">
								<div className="card" style={ { width: '18rem' }}>
									<img src={'./assets/villacasalet.jpg'} className="card-img-top" alt="..." />
									<div className="card-body">
										<hr />
										<h5>- Villa Casalet</h5>
										<p className="card-text card-text-portafolio">
											Es un sitio que ofrece el servicio de hospedaje en Puerto Escondido Oaxaca, México en donde ayude en la realización del sitio en base a un diseño aprobado.
										</p>
									</div>
									<div className="card-footer">
										<a href={'https://villacasalet.com'} target="_blank" rel="noopener noreferrer">Ir al sitio</a>
									</div>	
								</div>
							</div>
							<div className="d-flex justify-content-center">
								<div className="card" style={ { width: '18rem' }}>
									<img src={'./assets/fonatur.jpg'} className="card-img-top" alt="..." />
									<div className="card-body">
										<hr />
										<h5>- Fonatur</h5>
										<p className="card-text card-text-portafolio">
											Un desarrollo elaborado para el Fondo Nacional de Fomento al Turismo que consistió en un buscador de lotes unifamiliares, condominios, comerciales y hoteleros que buscan inversión en regiones turísticas mexicanas.
										</p>
									</div>
									<div className="card-footer">
										<a href={'http://www.fonatur.mx/es/venta-terrenos.html'} target="_blank" rel="noopener noreferrer">Ir al sitio</a>
									</div>
								</div>
							</div>
							<div className="d-flex justify-content-center">
								<div className="card" style={ { width: '18rem' } }>
									<img src={'./assets/grupomaya.jpg'} className="card-img-top" alt="..." />
									<div className="card-body">
										<hr />
										<h5>- Grupo Maya</h5>
										<p className="card-text card-text-portafolio">
											Realice soporte al sitio, ERP, aplicación móvil ( publicación en tiendas de aplicaciones ) y fui parte del equipo que realizó la versión 2 del CRM.
										</p>
									</div>
									<div className="card-footer">
										<a href={'https://mayaseguridad.mx'} target="_blank" rel="noopener noreferrer">Ir al sitio</a>
									</div>
								</div>
							</div>
							<div className="d-flex justify-content-center">
								<div className="card" style={ { width: '18rem' } }>
									<img src={'./assets/muvop.jpg'} className="card-img-top" alt="..." />
									<div className="card-body">
										<hr />
										<h5>- Muvop</h5>
										<p className="card-text card-text-portafolio">
											Muvop es una financiera que apoya a hombres, mujeres y negocios en donde colabore en la creación de la plataforma de cursos online que ayudan a fortalecer el crecimiento personal.
										</p>
									</div>
									<div className="card-footer">
										<a href={'https://educacion.muvop.com'} target="_blank" rel="noopener noreferrer">Ir al sitio</a>
									</div>
								</div>
							</div>
							<div className="d-flex justify-content-center">
								<div className="card" style={ { width: '18rem' }}>
									<img src={'./assets/NETW.jpg'} className="card-img-top" alt="..." />
									<div className="card-body">
										<hr />
										<h5>- Net@Work</h5>
										<p className="card-text card-text-portafolio">
											Es un espacio para el coworking, se encuentran en la colonia Roma de la CDMX. Llevé a cabo la realización del sitio web y participé en el desarrollo del punto de venta.
										</p>
									</div>
									<div className="card-footer">
										<a href={'https://netw.com.mx'} target="_blank" rel="noopener noreferrer">Ir al sitio</a>
									</div>
								</div>
							</div>
							<div className="d-flex justify-content-center">
								<div className="card" style={ { width: '18rem' }}>
									<img src={'./assets/televisa.jpg'} className="card-img-top" alt="..." />
									<div className="card-body">
										<hr />
										<h5>- Televisa Regional</h5>
										<p className="card-text card-text-portafolio">
											{/* Desarrolle una estructura para mostrar banners publicitarios en determinadas partes del sitio que funciona cuando una campaña es activada en google ads y colabore en la automatización que inserta páginas dentro del sitemap cada vez que se crea, borra o actualiza una nota la cual ayudó a indexarlas en los buscadores, al igual aporte un algoritmo que ayuda organizar las noticias de manera que no se repitiera la parte destacada con las subsecciones. */}
											Desarrolle una estructura para mostrar banners publicitarios, colabore en la automatización de la inserción de páginas dentro del sitemap
											y aporte un algoritmo para las notas destacadas.
										</p>
									</div>
									<div className="card-footer">
										<a href={'https://televisaregional.com'} target="_blank" rel="noopener noreferrer">Ir al sitio</a>
									</div>
								</div>
							</div>
							<div className="d-flex justify-content-center">
								<div className="card" style={ { width: '18rem' }}>
									<img src={'./assets/scc.jpg'} className="card-img-top" alt="..." />
									<div className="card-body">
										<hr />
										<h5>- Sistema de Consulta de Contribuyentes</h5>
										<p className="card-text card-text-portafolio">
											Aporte en la realización de sitios y el sistema enfocado en la búsqueda y monitoreo de contribuyentes que el Servicio de Administración Tributaria (SAT) reporta como incumplidos. 
										</p>
									</div>
									<div className="card-footer text-rigth">
										<a href={'https://sccontribuyentes.com'} target="_blank" rel="noopener noreferrer">Ir al sitio</a>
									</div>
								</div>
							</div>
							<div className="d-flex justify-content-center">
								<div className="card" style={ { width: '18rem' }}>
									<img src={'./assets/server.jpg'} className="card-img-top" alt="..." />
									<div className="card-body">
										<hr />
										<h5>- Infraestructura</h5>
										<p className="card-text card-text-portafolio">
											He estado involucrado en diferentes actividades que involucran configuración creación y soporte de virtual host, creación de scripts en python y bash para la automatización y migración de dominios y sitios web.
										</p>
									</div>
									<div className="card-footer text-rigth">
										<a href={'https://sccontribuyentes.com'} target="_blank" rel="noopener noreferrer">Ir al sitio</a>
									</div>
								</div>
							</div>
						</Carousel>
					</div>
				</div>
			</div>
			<br />
		</>
	)
}
