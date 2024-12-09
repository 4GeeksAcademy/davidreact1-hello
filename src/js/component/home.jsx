import React from "react";
import Navbar from "./js/navbar.js";
import Component from "./js/componet.js";
import Cards from "./js/cards.js";
import Footer from "./js/footer.js";


//include images into your bundle


//create your first component
function Home() {
	return (
		<div>
			<Navbar/>
			<Component/>
			<Cards/>
			<Footer/>
		</div>

			
	);
}

export default Home;
