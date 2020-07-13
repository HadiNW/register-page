import React from 'react'

import './tooltip.styles.scss'

const Tooltip = ({ info }) => {
	return (
		<div className='tooltip'>
			<span>{info}</span>
		</div>
	)
}

export default Tooltip
