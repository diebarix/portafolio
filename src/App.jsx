import "./App.css";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Portafolio from "./components/Portafolio";
import Presentation from "./components/Presentation";
import LanguageContext from "./context/LanguageContext";

function App() {
	const userLn = {
		name: "San pedro",
		years: "1980"
	}

	return (
		<LanguageContext.Provider value={userLn}>
			<div className="App">
				<Menu />
				<Banner />
				<Presentation />
				<Portafolio />
				<Contact />
				<Footer />
			</div>
		</LanguageContext.Provider>
	);
}

export default App;
