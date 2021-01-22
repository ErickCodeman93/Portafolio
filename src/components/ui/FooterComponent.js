import React from 'react'

export const FooterComponent = () => {
	return (
		<>
			<footer className=" text-white-50 text-center">
				<figure className="mb-0 pb-1">
					{/* <blockquote class="blockquote">
						<p>El que ama lo que hace está condenado al éxito.</p>
					</blockquote> */}
					<figcaption className="blockquote-footer">
						<cite title="Source Title">El que ama lo que hace está condenado al éxito.</cite>
					</figcaption>
				</figure>
				{/* <p className="mb-0 pb-3"><cite title="Source Title">El que ama lo que hace está condenado al éxito</cite></p> */}
			</footer>
		</>
	)
}
