import React, { useState } from "react";

import {
	IconSkills,
	SkillsIconsContainer,
} from "../styled-components/ComponentsStyled";
import "../Styles/skills.css";
import logoReact from "../assets/react.svg";
import logoBoostrap from "../assets/boostrap.svg";
import logoCss from "../assets/css.svg";
import logoHtml from "../assets/html.svg";
import logoJs from "../assets/javascript.svg";
import logoNodejs from "../assets/nodejs.svg";
import logoMongodb from "../assets/mongodb.svg";
import logoGraphql from "../assets/graphql.svg";
import logoRedux from "../assets/redux.svg";
import logoSass from "../assets/sass.svg";
import logoGit from "../assets/git.svg";
import logoGithub from "../assets/github.svg";
import logoStyledComponents from "../assets/styledComponents.svg";
import logoResponsiveDesign from "../assets/responsive_design.svg";
import logoJest from "../assets/jest.svg";
import ReactTooltip from "react-tooltip";
import useLanguage from "../hooks/useLanguage";
function Skills() {
	const [tooltip, showTooltip] = useState(true);
	const { name, years } = useLanguage();
	return (
		<div className="skills-container">
			<h2>SKILLS</h2>
			<h4>FRONTED</h4>
			{tooltip && <ReactTooltip effect="solid" />}
			<SkillsIconsContainer>
				<li className="skills-items">
					<IconSkills
						data-tip="HTML"
						onMouseEnter={() => showTooltip(true)}
						onMouseLeave={() => {
							showTooltip(false);
							setTimeout(() => showTooltip(true), 4);
						}}
						src={logoHtml}
						alt=""
					/>
				</li>
				<li className="skills-items">
					<IconSkills
						data-tip="CSS"
						onMouseEnter={() => showTooltip(true)}
						onMouseLeave={() => {
							showTooltip(false);
							setTimeout(() => showTooltip(true), 4);
						}}
						src={logoCss}
						alt=""
					/>
				</li>
				<li className="skills-items">
					<IconSkills
						data-tip="JAVASCRIPT"
						onMouseEnter={() => showTooltip(true)}
						onMouseLeave={() => {
							showTooltip(false);
							setTimeout(() => showTooltip(true), 4);
						}}
						src={logoJs}
						alt=""
					/>
				</li>
				<li className="skills-items">
					<IconSkills
						data-tip="REACT"
						onMouseEnter={() => showTooltip(true)}
						onMouseLeave={() => {
							showTooltip(false);
							setTimeout(() => showTooltip(true), 4);
						}}
						src={logoReact}
						alt=""
					/>
				</li>
				<li className="skills-items">
					<IconSkills
						data-tip="REDUX"
						onMouseEnter={() => showTooltip(true)}
						onMouseLeave={() => {
							showTooltip(false);
							setTimeout(() => showTooltip(true), 4);
						}}
						src={logoRedux}
						alt=""
					/>
				</li>
				<li className="skills-items">
					<IconSkills
						data-tip="BOOSTRAP"
						onMouseEnter={() => showTooltip(true)}
						onMouseLeave={() => {
							showTooltip(false);
							setTimeout(() => showTooltip(true), 4);
						}}
						src={logoBoostrap}
						alt=""
					/>
				</li>
				<li className="skills-items">
					<IconSkills
						data-tip="SASS"
						onMouseEnter={() => showTooltip(true)}
						onMouseLeave={() => {
							showTooltip(false);
							setTimeout(() => showTooltip(true), 4);
						}}
						src={logoSass}
						alt=""
					/>
				</li>
				<li className="skills-items">
					<IconSkills
						data-tip="STYLED-COMPONENTS"
						onMouseEnter={() => showTooltip(true)}
						onMouseLeave={() => {
							showTooltip(false);
							setTimeout(() => showTooltip(true), 4);
						}}
						src={logoStyledComponents}
						alt=""
					/>
				</li>
			</SkillsIconsContainer>

			<h4>BACKEND</h4>
			<SkillsIconsContainer>
				<li className="skills-items">
					<IconSkills
						data-tip="NodeJS"
						onMouseEnter={() => showTooltip(true)}
						onMouseLeave={() => {
							showTooltip(false);
							setTimeout(() => showTooltip(true), 4);
						}}
						src={logoNodejs}
						alt=""
					/>
				</li>
				<li className="skills-items">
					<IconSkills
						data-tip="MongoDB"
						onMouseEnter={() => showTooltip(true)}
						onMouseLeave={() => {
							showTooltip(false);
							setTimeout(() => showTooltip(true), 4);
						}}
						src={logoMongodb}
						alt=""
					/>
				</li>
				<li className="skills-items">
					<IconSkills
						data-tip="Graphql"
						onMouseEnter={() => showTooltip(true)}
						onMouseLeave={() => {
							showTooltip(false);
							setTimeout(() => showTooltip(true), 4);
						}}
						src={logoGraphql}
						alt=""
					/>
				</li>
			</SkillsIconsContainer>

			<h4>OTHERS</h4>
			<SkillsIconsContainer>
				<li className="skills-items">
					<IconSkills
						data-tip="Github"
						onMouseEnter={() => showTooltip(true)}
						onMouseLeave={() => {
							showTooltip(false);
							setTimeout(() => showTooltip(true), 4);
						}}
						src={logoGithub}
						alt=""
					/>
				</li>
				<li className="skills-items">
					<IconSkills
						data-tip="GIT"
						onMouseEnter={() => showTooltip(true)}
						onMouseLeave={() => {
							showTooltip(false);
							setTimeout(() => showTooltip(true), 4);
						}}
						src={logoGit}
						alt=""
					/>
				</li>
				<li className="skills-items" id="responsive-logo">
					<IconSkills
						data-tip="Responsive Design"
						onMouseEnter={() => showTooltip(true)}
						onMouseLeave={() => {
							showTooltip(false);
							setTimeout(() => showTooltip(true), 4);
						}}
						src={logoResponsiveDesign}
						alt=""
					/>
				</li>
				<li className="skills-items">
					<IconSkills
						data-tip="Jest"
						onMouseEnter={() => showTooltip(true)}
						onMouseLeave={() => {
							showTooltip(false);
							setTimeout(() => showTooltip(true), 4);
						}}
						src={logoJest}
						alt=""
					/>
				</li>
			</SkillsIconsContainer>
		</div>
	);
}

export default Skills;
