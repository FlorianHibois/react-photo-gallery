import React, { useState } from "react";

export default function Carousel() {
	const [pictures] = useState([
		{id : 1, src: "../serie-04/photo-01.jpg"},
		{id : 2, src: "../serie-04/photo-02.jpg"},
		{id : 3, src: "../serie-04/photo-03.jpg"},
		{id : 4, src: "../serie-04/photo-04.jpg"},
		{id : 5, src: "../serie-04/photo-05.jpg"},
		{id : 6, src: "../serie-04/photo-06.jpg"},
		{id : 7, src: "../serie-04/photo-07.jpg"},
		{id : 8, src: "../serie-04/photo-08.jpg"},
		{id : 9, src: "../serie-04/photo-09.jpg"},
		{id : 10, src: "../serie-04/photo-10.jpg"},
		{id : 11, src: "../serie-04/photo-11.jpg"},
		{id : 12, src: "../serie-04/photo-12.jpg"},
		{id : 13, src: "../serie-04/photo-13.jpg"},
		{id : 14, src: "../serie-04/photo-14.jpg"},
		{id : 15, src: "../serie-04/photo-15.jpg"},
	]);
	
	const [selectedIndex, setSelectedIndex] = useState(0);

	const onPrevClick = () => {
		if (selectedIndex == 0) {
			setSelectedIndex((pictures.length - 1));
		} else {
			setSelectedIndex(selectedIndex - 1);
		}
	};

	const onNextClick = () => {
		if (selectedIndex == (pictures.length - 1)) {
			setSelectedIndex(0);
		} else {
			setSelectedIndex(selectedIndex + 1);
		}
	};
	
	return (
		<div className="mini-carrousel">
			<label htmlFor="carrousel">
				Carrousel
			</label>
			<div className="carrousel">
				<div className="carousel-pictures">
					<figure>
						<img key={pictures[selectedIndex].id} src={pictures[selectedIndex].src} alt={pictures[selectedIndex].src}/>
						<figcaption>Picture #{pictures[selectedIndex].id}</figcaption>
					</figure>
				</div>
				<button onClick={onPrevClick}>Previous</button>
				<button onClick={onNextClick}>Next</button>
			</div>
			<div>
				<p>Picture {selectedIndex + 1} / {pictures.length}</p>
			</div>
			<div id="mini-carrousel">
				{pictures.map((pic) => {return (<a onClick={() => setSelectedIndex((pic.id - 1))}><img className="mini-pic" key={pic.id} src={pic.src} alt={pic.src}/></a>)})}
			</div>
		</div>
	);
};
