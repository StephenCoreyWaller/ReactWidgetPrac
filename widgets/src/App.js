import React, { useState } from 'react';
import DropDown from './componets/DropDown';
// import Accordion from './componets/Accordion';
// import List from './componets/List';

// const items = [
// 	{ title: 'what is react', content: 'react is a javascript library' },
// 	{ title: 'how do you use react', content: 'with jsx in the browser' },
// 	{
// 		title: 'How long and where did react come from',
// 		content: 'about 7 years from facebook',
// 	},
// ];
const Colors = [
	{ label: 'The Color Red', value: 'red' },
	{ label: 'The Color Blue', value: 'blue' },
	{ label: 'The Color Green', value: 'green' },
];

export default () => {
	const [toggleDropDown, setDropDown] = useState(false);
	return (
		//
		<div>
			<button onClick={() => setDropDown(!toggleDropDown)}>Dropdown</button>
			{toggleDropDown && <DropDown DropName={'Colors'} options={Colors} />}
		</div>
	);
};
