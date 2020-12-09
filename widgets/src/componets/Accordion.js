import React, { useState } from 'react';

const Accordion = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const onClickExpand = (i) => {
		setActiveIndex(i);
	};

	const AccordionItems = items.map((item, index) => {
		const active = index === activeIndex ? 'active' : '';
		return (
			<React.Fragment key={item.title}>
				<div className={`title ${active}`} onClick={() => onClickExpand(index)}>
					<i className='dropdown icon'></i>
					{item.title}
				</div>
				<div className={`content ${active}`}>
					<p>{item.content}</p>
				</div>
			</React.Fragment>
		);
	});

	return <div>{AccordionItems}</div>;
};

export default Accordion;
