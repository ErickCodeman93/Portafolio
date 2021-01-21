import React from 'react'

export const PortafolioComponent = () => {
	return (
		<div className="cover-container animate__animated animate__fadeIn m-auto">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h1>Proyectos</h1>

						<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
							<ol className="carousel-indicators">
								<li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></li>
								<li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
								<li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
							</ol>
							<div className="carousel-inner">
								<div className="carousel-item active">
									<img src="..." className="d-block w-100" alt="..." />
									<div className="carousel-caption d-none d-md-block">
										<h5>First slide label</h5>
										<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
									</div>
								</div>
								<div className="carousel-item">
									<img src="..." className="d-block w-100" alt="..." />
									<div className="carousel-caption d-none d-md-block">
										<h5>Second slide label</h5>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
									</div>
								</div>
								<div className="carousel-item">
									<img src="..." className="d-block w-100" alt="..." />
									<div className="carousel-caption d-none d-md-block">
										<h5>Third slide label</h5>
										<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
									</div>
								</div>
							</div>			
							<a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
								<span className="carousel-control-prev-icon" aria-hidden="true"></span>
								<span className="visually-hidden">Previous</span>
							</a>
							<a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
								<span className="carousel-control-next-icon" aria-hidden="true"></span>
								<span className="visually-hidden">Next</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
