import React from "react";
import "../Styles/aboutMe.css";
import { Hobbies } from "../styled-components/aboutMe.style";
import { useTranslation } from "react-i18next";

import ejercicio from "../assets/ejercicio.png";
import podcast from "../assets/escucharPodcast.png";
import piano from "../assets/piano.png";
import series from "../assets/verSerie.png";
function AboutMe() {
	const [t, i18n] = useTranslation("global");

	return (
		<div className="about-me" id="aboutMe-container">
			<h2>ACERCA DE MI</h2>
			{/* 			<h1>{t("about.title")}</h1>
			<button onClick={() => i18n.changeLanguage("es")}>es</button>
			<button onClick={() => i18n.changeLanguage("en")}>en</button> */}
			<h4 className="about-me-encabezado">
				{" "}
				<i className="fa fa-solid">&#xf121;</i>__Diego Alexis Baeza Rodriguez__
				<i className="fa fa-solid">&#xf121; </i>
			</h4>
			<h4 className="about-me-encabezado">
				Hola! <i className="fa fa-solid">&#xe05d;</i> ¡¡Es un placer que estes
				paseando por aqui!!
			</h4>

			<p>
				Soy un amante de la tecnologia, un <strong>desarrollor web</strong>,
				tanto fronted como backend, pero me{" "}
				<strong>especializo en fronted</strong> , me agrada crear interfaces
				esteticas y fabulosas, en el trabajo en equipo siempre doy lo mejor de
				mi y <strong>aprendo del equipo</strong> , con la finalidad de mejorar y
				crear webs cada vez mas profesionales.{" "}
			</p>
			<h3 id="redes-title">REDES</h3>
			<ul className="social-container">
				<li>
					<a href="" onClick={e => e.preventDefault()}>
						<i className="fa-brands">&#xf232;</i>
					</a>
					<h4>WhatsApp</h4>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/diebarix/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa-brands">&#xf08c;</i>
					</a>
					<h4>Linkedin</h4>
				</li>
				<li>
					<a
						href="https://github.com/diebarix"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa-brands">&#xf09b;</i>
					</a>
					<h4>GitHub</h4>
				</li>
				<li>
					<a
						href="mailto:diegoabr0704@gmail.com?subject=Hola Diego!!&body=¿como estas?"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa-regular">&#xf0e0;</i>
					</a>
					<h4>Correo</h4>
				</li>
				<li>
					<a
						href="https://es.stackoverflow.com/users/290134/diebarix"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa-brands">&#xf16c;</i>
					</a>
					<h4>Stack Overflow</h4>
				</li>
				<li>
					<a
						href="https://diebarixblog.blogspot.com/p/diebarixblog.html"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa-brands">&#xf37c;</i>
					</a>
					<h4>Blogger</h4>
				</li>
			</ul>

			<h3 id="hobbies-title">HOBBIES</h3>
			<ul className="hobbies-container">
				<li>
					<h4>Tocar piano y guitarra</h4>
					<Hobbies src={piano} />
				</li>
				<li>
					<h4>Escuchar podcasts</h4>
					<Hobbies src={podcast} />
				</li>
				<li>
					<h4>Ejercicio en casa</h4>
					<Hobbies src={ejercicio} />
				</li>
				<li>
					<h4>Ver series</h4>
					<Hobbies src={series} />
				</li>
			</ul>
		</div>
	);
}

export default AboutMe;
