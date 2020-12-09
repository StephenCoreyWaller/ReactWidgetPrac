import { useState } from 'react';

const Card = ({ result }) => {
	const cards = result.map((item) => {
		return (
			<div key={item.pageid} className='row'>
				<div className='thirteen wide column'>
					<h3 className='header'>{item.title}</h3>
					<span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
				</div>
				<div className='three wide column' style={{ marginTop: '30px' }}>
					<a
						className='ui button'
						href={`https://en.wikipedia.org?curid=${item.pageid}`}
					>
						Go
					</a>
				</div>
			</div>
		);
	});

	return (
		<div style={{ marginTop: '5px' }} className='ui grid'>
			{cards}
		</div>
	);
};
export default Card;
