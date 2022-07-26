import React from "react";
import perfilEdit from "../assets/foto-cv-editada.png";
import "../Styles/banner.css";

function Banner() {
	function TitleBanner() {
		return <div className="container-words-banner"></div>;
	}
	function FotoBanner() {
		return (
			<div>
				<img className="image-banner" src={perfilEdit} alt="" />
			</div>
		);
	}
	function NameBanner() {
		return (
			<div className="banner-name-container">
				<div className="banner-name-box">
					<div className="banner-name">DIEBARIX</div>
				</div>
			</div>
		);
	}

	return (
		<div className="banner-container">
			<TitleBanner />
			<FotoBanner />
			<NameBanner />
		</div>
	);
}

export default Banner;
