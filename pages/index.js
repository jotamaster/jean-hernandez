import React from 'react';

function Index() {
	const myfunction = () => {
		statusImage = !statusImage;
		if (statusImage) {
			if (typeof window !== 'undefined') {
				document.getElementById('slider');
				document.getElementById('slider').style.backgroundImage =
					"url('https://66.media.tumblr.com/0331e318ec15f4515b9316a445125400/5e773b75fc80fa0d-9e/s640x960/1088c9370afbbb9f36454e16fc14df20e7e57083.png')";
			}
		} else {
			if (typeof window !== 'undefined') {
				document.getElementById('slider').style.backgroundImage =
					"url('https://i.pinimg.com/564x/55/3a/12/553a12d8ba7860bcddfb4186cf0c99dd.jpg')";
			}
		}
		setTimeout(() => {
			myfunction();
		}, 8000);
	};

	let statusImage = true;
	myfunction();

	return (
		<div className="personal">
			<div className="sectionMenu">
				<div className="headerMenu">
					<img
						src="https://i.pinimg.com/564x/23/e3/95/23e3955dec33e9b4f4a1db30d1844216.jpg"
						alt="personal photography"
					/>
					<h3>Jean Hernández {statusImage}</h3>
          <div className="menu">
          <div className="item">
            <p>Home</p>
          </div>
          <div className="item">
            <p>Blog</p>
          </div>
				</div>
				</div>
				
			</div>
			<div id="slider" className="sectionImages">
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
