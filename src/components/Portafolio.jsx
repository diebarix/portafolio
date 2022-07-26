import React from "react";
import { Proyects } from "../styled-components/portafolio.styled";
import "../Styles/portafolio.css";
import sweet from "sweetalert";

function Portafolio() {
	function handleErrorRedSocial(e) {
		e.preventDefault();
		sweet({
			title: "No puedo mostrar el enlace de este sitio",
			text: "Debido a que cualquiera podria subir fotos, solamente esta disponible el repositorio",
			button: "Aceptar",
			icon: "info",
			timer: "7000",
			className: "alerta",
		});
		return (
			<div>
				<h4>No puedo mostrar el enlace de este sitio</h4>
				<p>
					Debido a que cualquiera podria subir fotos, solamente esta disponible
					el repositorio
				</p>
			</div>
		);
	}

	return (
		<div id="portafolio" className="portafolio-container">
			<h2 className="portafolio-name">Portafolio</h2>
			<div className="portafolio-cards-container">
				<div className="portafolio-proyects-cards">
					<div id="portafolio-title-first">
						<Proyects
							className="card"
							src="https://i.postimg.cc/W43Nyvyw/social-network-post.png"
							border="0"
							alt="social-network-post"
						/>
						<a onClick={handleErrorRedSocial} href="">
							<div className="capa">
								<h3 >Mini red social </h3>
								<p>
									Es mi primer red social, me costo mucho entender conceptos de
									backend, pero aprendi mucho gracias a ello.
								</p>
							</div>
						</a>
					</div>
					<a
						href="https://github.com/diebarix/red-social"
						id="git-portafolio"
						className="fa-brands"
						target="_blank"
						rel="noopener noreferrer"
					>
						&#xf09b;
					</a>
				</div>
				<div className="portafolio-proyects-cards">
					<div>
						<Proyects
							className="card"
							src="https://i.postimg.cc/prtpLvRW/api-movies-carusel.png"
							border="0"
							alt="api-movies-carusel"
						/>
						<a href="https://api-peliculas-carrusel.netlify.app/" target="_blank" rel="noopener noreferrer">
							<div className="capa">
								<h3>Api de peliculas con carrusel </h3>
								<p>
									Catalogo de peliculas nuevas traidas de la api de movieDB con
									carrusel y scroll infinito
								</p>
							</div>
						</a>
					</div>
					<a
						href="https://github.com/diebarix/Api-de-peliculas_con-carusel"
						id="git-portafolio"
						className="fa-brands"
						target="_blank"
						rel="noopener noreferrer"
					>
						&#xf09b;
					</a>
				</div>
				<div className="portafolio-proyects-cards">
					<div>
						<Proyects
							className="card"
							src="https://i.postimg.cc/d1fYctrc/weather-api.png"
							border="0"
							alt="weather-api"
						/>
						<a href="https://api-del-clima.netlify.app/" target="_blank" rel="noopener noreferrer">
							<div className="capa">
								<h3>Api del clima</h3>
								<p>
									Aqui utilizo la api de openweathermap e iconos animados para
									indicar el clima
								</p>
							</div>
						</a>
					</div>
					<a
						href="https://github.com/diebarix/apiWeather"
						id="git-portafolio"
						className="fa-brands"
						target="_blank"
						rel="noopener noreferrer"
					>
						&#xf09b;
					</a>
				</div>
				<div className="portafolio-proyects-cards">
					<div>
						<Proyects
							className="card"
							src="https://i.postimg.cc/Rhtn8qxb/todo-list-github.png"
							border="0"
							alt="todo-list-github"
						/>
						<a href="" target="_blank" rel="noopener noreferrer">
							<div className="capa">
								<h3>Lista de tareas </h3>
								<p>Es una app para crear, editar y eliminar tareas con react</p>
							</div>
						</a>
					</div>
					<a
						href="https://github.com/diebarix/Todo-List-react/tree/master"
						id="git-portafolio"
						className="fa-brands"
						target="_blank"
						rel="noopener noreferrer"
					>
						&#xf09b;
					</a>
				</div>
				<div className="portafolio-proyects-cards">
					<div>
						<Proyects
							className="card"
							src="https://i.postimg.cc/NFf6vSGV/title-rick-and-morty.png' border='0' alt='title-rick-and-morty"
							alt=""
						/>
						<a
							href="https://diebarix.github.io/api-rick-and-morty/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="capa">
								<h3>Rick and Morty Api</h3>
								<p>
									App sencilla y minimalista que muestra todos los personajes de
									la serie
								</p>
							</div>
						</a>
					</div>
					<a
						href="https://github.com/diebarix/api-rick-and-morty/tree/master"
						id="git-portafolio"
						className="fa-brands"
						target="_blank"
						rel="noopener noreferrer"
					>
						&#xf09b;
					</a>
				</div>
				<div className="portafolio-proyects-cards">
					<div>
						<Proyects
							className="card"
							src="https://i.postimg.cc/mZ79mQRM/comming-soon.jpg"
							border="0"
							alt="comming-soon"
						/>
						<a href="" target="_blank" rel="noopener noreferrer">
							<div className="capa">
								<h3>Proximamente un nuevo proyecto</h3>
								<p>
									En el futuro añadire los nuevos proyectos aqui o en mi perfil
									de github
								</p>
							</div>
						</a>
					</div>
					<a
						href="https://github.com/diebarix?tab=repositories"
						id="git-portafolio"
						className="fa-brands"
						target="_blank"
						rel="noopener noreferrer"
					>
						&#xf09b;
					</a>
				</div>
				<div className="portafolio-proyects-cards">
					<div>
						<Proyects
							className="card"
							src="https://i.postimg.cc/mZ79mQRM/comming-soon.jpg"
							border="0"
							alt="comming-soon"
						/>
						<a href="" target="_blank" rel="noopener noreferrer">
							<div className="capa">
								<h3>Proximamente un nuevo proyecto</h3>
								<p>
									En el futuro añadire los nuevos proyectos aqui o en mi perfil
									de github
								</p>
							</div>
						</a>
					</div>
					<a
						href="https://github.com/diebarix?tab=repositories"
						id="git-portafolio"
						className="fa-brands"
						target="_blank"
						rel="noopener noreferrer"
					>
						&#xf09b;
					</a>
				</div>
				<div className="portafolio-proyects-cards">
					<div>
						<Proyects
							className="card"
							src="https://i.postimg.cc/mZ79mQRM/comming-soon.jpg"
							border="0"
							alt="comming-soon"
						/>
						<a href="" target="_blank" rel="noopener noreferrer">
							<div className="capa">
								<h3>Proximamente un nuevo proyecto</h3>
								<p>
									En el futuro añadire los nuevos proyectos aqui o en mi perfil
									de github
								</p>
							</div>
						</a>
					</div>
					<a
						href="https://github.com/diebarix?tab=repositories"
						id="git-portafolio"
						className="fa-brands"
						target="_blank"
						rel="noopener noreferrer"
					>
						&#xf09b;
					</a>
				</div>
				<div className="portafolio-proyects-cards">
					<div>
						<Proyects
							className="card"
							src="https://i.postimg.cc/mZ79mQRM/comming-soon.jpg"
							border="0"
							alt="comming-soon"
						/>
						<a href="" target="_blank" rel="noopener noreferrer">
							<div className="capa">
								<h3>Proximamente un nuevo proyecto</h3>
								<p>
									En el futuro añadire los nuevos proyectos aqui o en mi perfil
									de github
								</p>
							</div>
						</a>
					</div>
					<a
						href="https://github.com/diebarix?tab=repositories"
						id="git-portafolio"
						className="fa-brands"
						target="_blank"
						rel="noopener noreferrer"
					>
						&#xf09b;
					</a>
				</div>
			</div>
		</div>
	);
}

export default Portafolio;
