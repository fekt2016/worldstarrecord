/* eslint react/prop-types: 0 */
function Vidoe({ code }) {
	return (
		<li>
			<iframe
				src={`https://www.youtube.com/embed/${code}`}
				width='100%'
				height='100%'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full'
			></iframe>
		</li>
	);
}

export default Vidoe;
