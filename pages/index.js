import React from 'react';

function Index() {
	return (
		<div className="personal">
			<div className="sectionMenu">
				<div className="headerMenu">
					<img
						src="https://i.pinimg.com/564x/23/e3/95/23e3955dec33e9b4f4a1db30d1844216.jpg"
						alt="personal photography"
					/>
					<h3>Jean Hernández</h3>
				</div>
			</div>
			<div className="sectionImages">
				{/* <img src="https://i.pinimg.com/564x/55/3a/12/553a12d8ba7860bcddfb4186cf0c99dd.jpg" alt="personal gallery"/> */}
			</div>
			<div className="sectionDesc">
				<div className="desc">
					<p className="padding" />
					<p className="preTitle">Hello! I'm</p>
					<h3 className="fontTitle">Jean Hernández</h3>
					<p className="titleDesc">
						Jean Hernández <span>un programador.</span> aficionados a la tecnología
					</p>
					<p className="description">
						There are many variations of passages of Lorem Ipsum available, but the majority have suffered
						alteration in some form, by injected humour, or randomised words which don't look even slightly
						believable.
					</p>
				</div>
			</div>
		</div>
	);
}
export default Index;
// import Link from 'next/link'
// export default () => (
//   <div>Hello World. <Link href='/about' as={ process.env.BACKEND_URL + '/about'}><a>About</a></Link></div>
// )
