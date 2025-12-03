import { useState } from "react";
import Navbar from "./Navbar";
import Ciric from "./assets/Ciric.png";
import Pustiana from "./assets/Pustiana.png";
import Cer from "./assets/Cer.jpg";
import Munte from "./assets/Munte.JPG";

function Home() {
	const backgrounds = [Ciric, Pustiana, Cer, Munte]; // background to cycle
	const [index1, setIndex1] = useState(0); // index for the current background
	const [index2, setIndex2] = useState(0); // index for the current background
	const [hide_next, setHide_next] = useState(true); // state for bg-next className
	const bg = document.getElementsByClassName("bg"); // bg element
	const bg_next = document.getElementsByClassName("bg-next"); // bg-next element

	setTimeout(() => {
		if (hide_next) {
			if (index1 != backgrounds.length - 1) setIndex2(index1 + 1);
			else setIndex2(0);
			setHide_next(false);
		} else {
			if (index2 != backgrounds.length - 1) setIndex1(index2 + 1);
			else setIndex1(0);
			setHide_next(true);
		}
	}, 10000);

	return (
		<>
			<Navbar />
			<img className="bg" src={backgrounds[index1]} />
			<img
				className={hide_next ? "bg-next hide" : "bg-next"}
				src={backgrounds[index2]}
			/>
		</>
	);
}

export default Home;
