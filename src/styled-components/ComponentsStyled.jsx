import styled from "styled-components";
/*let primaryColor = "#3df4";
const setTransitionTime = time => `all ${time} ease-in-out`;
export const BtnStyled = styled.li`
	padding: 0.5rem;
	background-color: #8d28d280;
	transition: ${setTransitionTime("1s")};
	&:hover {
		background-color: ${primaryColor};
	}
`;
export const BtnStyled2 = styled.li`
	background-color: #f5f;
	padding: 0.5rem;
	transition: ${setTransitionTime("1s")};
	color: ${({ color }) => color || "#f15"};
	&:hover {
		background-color: ${primaryColor};
	}
`; */
export const SkillsIconsContainer = styled.ul`
	display: grid;
	list-style: none;
	grid-gap: 0.7rem;
	grid-auto-rows: 6rem;
	grid-template-columns: repeat(auto-fill, minmax(min(100%, 8rem), 1fr));
	place-content: center;
`;
export const IconSkills = styled.img`
	width: 4rem;
	height: 4rem;
	margin-left: 1.9rem;
	padding: 0;
	filter: drop-shadow(0 0 0.01rem var(--extra-color))
		drop-shadow(0 0 0.1rem var(--extra-color))
		drop-shadow(0 0 0.1rem var(--extra-color))
		drop-shadow(0 0 0.2rem var(--cards-color))
		drop-shadow(0 0 0.2rem var(--cards-color));
`;
export const BgDiv = styled.div`
	background-color: #222;
	position: absolute;
	top: -1000px;
	left: -1000px;
	width: 100%;
	height: 100%;
	z-index: -1;
	transition: all 0.5s ease;
	&.active {
		border-radius: 0 0 57% 0;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 1;
	}
`;
