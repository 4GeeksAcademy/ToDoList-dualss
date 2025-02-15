import React from "react";
import Lista from "./Lista";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//Input de texto donde escribir las tareas que se agregan debajo en forma de lista
//Coger el texto del input y crear un elemento de la lista cuando se pulsa enter
//Cada elemento de la lista tendra un icono de eliminar (una X en hover)

//create your first component
const Home = () => {
	return (
		<div className="text-center pt-5">
			<Lista/>
		</div>
	);
};

export default Home;