import React from "react";
import "../Styles/menu.css";
import {BgDiv} from "../styled-components/ComponentsStyled";
import BurgerButton from "./burgerButton";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Cv from "../public/Diego-Baeza-CV.pdf";
function Menu() {
	const [click, setClick] = useState(false);
	const [langugage, setlanguage] = useState(false);
	const [t, i18n] = useTranslation("global");

	function Logo() {
		return (
			<a href="#" className="logo">
				DIEBARIX
			</a>
		);
	}

	const handleLanguage = () => {
		setlanguage(!langugage);
	};

	function MenuRight() {
		return (
			<>
				<a className="menu-link" href="#aboutMe-container">
					About
				</a>
				<a className="menu-link" href="#contact">
					Contact
				</a>
				<a className="menu-link" href="#portafolio">
					Portafolio
				</a>
				<div onClick={handleLanguage} className="menu-link" id="language">
					<div onClick={() => i18n.changeLanguage("es")}>
						{langugage ? "Ingles" : "Español"}
					</div>
					<ul>
						<li className="language-secondary">
							<div onClick={() => i18n.changeLanguage("en")}>
								{langugage ? "Español" : "Ingles"}
							</div>
						</li>
					</ul>
					<i className="fas fa-solid">&#xf078;</i>
					<i className="fas2 fa-solid">&#xf077;</i>
				</div>
				<a className="menu-link" href={Cv} download="CV Diebarix">
					Descargar CV
				</a>
			</>
		);
	}

	const handleClick = () => {
		setClick(!click);
	};
	return (
		<header /* ref={menus} */ className="menu-container active">
			<Logo />
			<div className={`links-container ${click ? "active" : ""}`}>
				<MenuRight />
			</div>
			<div className="burguer">
				<BurgerButton click={click} handleClick={handleClick} />
			</div>
			<BgDiv className={`initial ${click ? "active" : ""}`}></BgDiv>
		</header>
	);
}

export default Menu;
