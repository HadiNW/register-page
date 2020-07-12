import React, { Component } from 'react'

import './register.styles.scss'

class Register extends Component {
	state = {
		months: [
			{ label: 'Jan', val: 0 },
			{ label: 'Feb', val: 1 },
			{ label: 'Mar', val: 2 },
			{ label: 'Apr', val: 3 },
			{ label: 'May', val: 4 },
			{ label: 'Jun', val: 5 },
			{ label: 'Jul', val: 6 },
			{ label: 'Aug', val: 7 },
			{ label: 'Sept', val: 8 },
			{ label: 'Oct', val: 9 },
			{ label: 'Nov', val: 10 },
			{ label: 'Dec', val: 11 },
		],
		days: Array.from(Array(31), (_, i) => i + 1),
		years: Array.from(Array(70), (_, i) => new Date().getFullYear() - i),
		success: false,
		model: {
			mobileNumber: '',
			firstName: '',
			lastName: '',
			email: '',
			gender: null,
			birthDate: {
				year: null,
				month: null,
				date: null,
			},
		},
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

	handleSubmit = (e) => {
		e.preventDefault()
	}
	render() {
		const {
			error,
			months,
			days,
			years,
			model: { firstName, lastName, email, mobileNumber },
		} = this.state
		return (
			<div className='register'>
				<div className='form'>
					<div className='form-title'>Registration</div>
					{error && (
						<div className='tooltip'>
							<span>Error</span>
							<span>Error</span>
							<span>Error</span>
						</div>
					)}
					<form
						className={error ? 'grayout' : null}
						onSubmit={this.handleSubmit}
					>
						<fieldset>
							<div className='input-form'>
								<input
									type='text'
									name='mobileNumber'
									id='mobileNumber'
									onChange={this.handleCHange}
									placeholder='Mobile Number'
									value={mobileNumber}
								/>
							</div>
							<div className='input-form'>
								<input
									type='text'
									name='firstName'
									id='firstName'
									onChange={this.handleCHange}
									placeholder='First Name'
									value={firstName}
								/>
							</div>
							<div className='input-form'>
								<input
									type='text'
									name='lastName'
									id='lastName'
									onChange={this.handleCHange}
									placeholder='Last Name'
									value={lastName}
								/>
							</div>
							<div className='input-form'>
								<label htmlFor='birthdate'>Date of Birth</label>
								<div className='select'>
									<select
										defaultValue='-'
										className='birthdate'
										name='month'
										id='month'
										onChange={this.handleCHange}
									>
										<option disabled value='-'>
											Month
										</option>
										{months.map((month) => (
											<option value={month.val} key={month.val}>
												{month.label}
											</option>
										))}
									</select>

									<select
										className='birthdate'
										name='date'
										id='date'
										onChange={this.handleCHange}
									>
										<option value='0'>Date</option>
										{days.map((day) => (
											<option key={day} value={day}>
												{day}
											</option>
										))}
									</select>

									<select
										className='birthdate'
										name='year'
										id='year'
										onChange={this.handleCHange}
									>
										<option value='0'>Year</option>
										{years.map((year) => (
											<option key={year} value={year}>
												{year}
											</option>
										))}
									</select>
								</div>
							</div>
							<div className='input-form gender'>
								<div className='radio'>
									<label htmlFor='male'>Male</label>
									<input
										type='radio'
										name='gender'
										id='gender'
										onChange={this.handleCHange}
										value={1}
									/>
								</div>
								<div className='radio'>
									<label htmlFor='male'>Female</label>
									<input
										type='radio'
										name='gender'
										id='gender'
										onChange={this.handleCHange}
										value={0}
									/>
								</div>
							</div>
							<div className='input-form'>
								<input
									type='email'
									name='email'
									id='email'
									onChange={this.handleCHange}
									placeholder='Email'
									value={email}
								/>
							</div>
							<button type='submit' className='btn'>
								Register
							</button>
						</fieldset>
					</form>
				</div>
			</div>
		)
	}
}
export default Register
