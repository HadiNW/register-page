import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/button/button.component'

import './login.styles.scss'

class LoginPage extends React.Component {
	state = {
		email: ''
	}
	handleCHange = (e) => {
		if (e.target.tagName === 'SELECT') {
			return this.setState({
				model: {
					...this.state.model,
					birthDate: {
						...this.state.model.birthDate,
						[e.target.name]: e.target.value,
					},
				},
			})
		}
		this.setState({
			model: {
				...this.state.model,
				[e.target.name]: e.target.value,
			},
		})
	}
	render() {
		const { email } = this.state
		return (
			<div className='login-page'>
				<div className='form'>
					<div className='form-title'>
						<h1>Login Page</h1>
					</div>
					<form>
						<div className='input-form'>
							<input
								type='text'
								name='email'
								id='email'
								onChange={this.handleCHange}
								placeholder='Email'
								value={email}
							/>
						</div>
						<Button title="Login" type="button" />
						<Link to="/register">
							<Button title="Back to register page" type="submit" />
						</Link>
					</form>
				</div>
			</div>
		)
	}
}

export default LoginPage
