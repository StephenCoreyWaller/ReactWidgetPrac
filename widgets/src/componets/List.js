import { useEffect, useState } from 'react';
import Card from './Card';
import ConnectionWiki from './ConnectionWiki';

const List = () => {
	const [term, setTerm] = useState('');
	const [result, setResult] = useState([]);

	useEffect(() => {
		const search = async () => {
			const { data } = await ConnectionWiki.get('w/api.php', {
				params: {
					srsearch: term,
				},
			});
			setResult(data.query.search);
		};
		const timeout = setTimeout(() => {
			if (term) {
				search();
			}
		}, 500);
		return () => {
			clearTimeout(timeout);
		};
	}, [term]);

	return (
		<div>
			<div className='ui form'>
				<div className='field'>
					<label htmlFor=''>Enter Search Term</label>
					<input
						value={term}
						onChange={(e) => setTerm(e.target.value)}
						className='input'
						type='text'
					/>
				</div>
			</div>
			<Card result={result}></Card>
		</div>
	);
};
export default List;
