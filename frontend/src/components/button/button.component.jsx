import React from 'react'

import './button.styles.scss'

const Button = ({ title, ...otherProps }) => (
	<button className='btn' {...otherProps}>
		{title}
	</button>
)

export default Button
