import React, { useEffect, useRef, useState } from 'react';

const DropDown = ({ options, DropName }) => {
	const useRefItem = useRef(null);
	const [colorName, setColor] = useState('');
	const [open, setOpen] = useState(false);
	const refBody = useRef(null);

	const dropDown = options.map((item) => {
		if (item.label === colorName) {
			return null;
		}
		return (
			<div key={item.label} onClick={() => action(item)} className='item'>
				{item.label}
			</div>
		);
	});
	useEffect(() => {
		const eventListener = (event) => {
			if (refBody.current && refBody.current.contains(event.target)) {
				return;
			}
			setOpen(false);
		};
		document.body.addEventListener('click', eventListener);
		return () => {
			document.body.removeEventListener('click', eventListener);
		};
	}, []);
	const action = (item) => {
		setColor(item.label);
		useRefItem.current.style.color = item.value;
	};

	return (
		<div ref={refBody} className='ui form'>
			<div onClick={() => setOpen(!open)} className='field'>
				<label className='label'>select</label>
				<div
					className={`ui selection dropdown ${open ? 'visible active' : ''}`}
				>
					{colorName}
					<i className='dropdown icon'></i>
					<div className={`menu ${open ? 'visible transition' : ''}`}>
						{dropDown}
					</div>
				</div>
			</div>
			<h3 ref={useRefItem}>{colorName}!</h3>
		</div>
	);
};
export default DropDown;
