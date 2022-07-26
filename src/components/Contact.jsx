import React from "react";
import "../Styles/contact.css";
function Contact() {
	return (
		<div className="contact" id="contact">
			<div>
				<h2>Contactame</h2>
				<p>
					Pueden hablar conmigo en cualquiera de las siguientes redes, ya sea
					para una oferta, sugerencia, negocios o incluso para charlar, con
					gusto te regresare al mensaje.
				</p>
			</div>
			<div className="contact-social-container">
				<li>
					<a onClick={e => e.preventDefault()} href="#">
						<i className="fa-brands">&#xf232;</i>
					</a>
					<h4>WhatsApp</h4>
				</li>
				<li>
					<a href="https://www.linkedin.com/in/diebarix/" target="_blank"
							rel="noopener noreferrer">
						<i className="fa-brands">&#xf08c;</i>
					</a>
					<h4>Linkedin</h4>
				</li>
				<li>
					<a href="https://github.com/diebarix" target="_blank"
							rel="noopener noreferrer">
						<i className="fa-brands">&#xf09b;</i>
					</a>
					<h4>GitHub</h4>
				</li>
				<li>
					<a href="mailto:diegoabr0704@gmail.com?subject=Hola Diego!!&body=¿como estas?" target="_blank"
							rel="noopener noreferrer">
						<i className="fa-solid">&#xf0e0;</i>
					</a>
					<h4>Correo</h4>
				</li>
			</div>
		</div>
	);
}

export default Contact;
