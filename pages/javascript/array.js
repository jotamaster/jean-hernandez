import Link from 'next/link'


export default () => (
	<div>
		<h2>Manejo de arrays</h2>
		<div>
			<Link href="/" as={process.env.BACKEND_URL + '/'}>
				<a>Home</a>
			</Link>
		</div>
	</div>
);
