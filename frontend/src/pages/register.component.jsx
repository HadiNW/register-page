import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { authRegisterUser } from '../redux/auth/auth.actions'

import './register.styles.scss'
import Tooltip from '../components/tooltip/tooltip.component'

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
		errors: [],
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
		const errors = []
		const {
			firstName,
			lastName,
			email,
			gender,
			mobileNumber,
			birthDate,
		} = this.state.model

		if (!firstName) {
			errors.push('First name is required')
		}

		if (!lastName) {
			errors.push('Last name is required')
		}

		if (!mobileNumber) {
			errors.push('Mobile number is required')
		}

		if (!email) {
			errors.push('Email is required')
		}

		if (errors.length) {
			return this.setState({ errors })
		}

		const newUser = {
			email: email,
			first_name: firstName,
			last_name: lastName,
			mobile_number: mobileNumber,
			gender: gender,
			birth_date:
				birthDate.date && birthDate.month && birthDate.date
					? new Date(birthDate.year + birthDate.month + birthDate.date)
					: null,
		}
		this.props.authRegisterUser(newUser)
	}
	render() {
		const {
			errors,
			months,
			days,
			years,
			model: { firstName, lastName, email, mobileNumber },
		} = this.state
		const { errorMessage, isLoading, isSuccess } = this.props

		if (isLoading) {
			return <h1>Loading ...</h1>
		}
		return (
			<div className='register'>
				<div className='form'>
					<div className='form-title'>Registration</div>
					{errors.map((err) => (
						<Tooltip key={err} info={err} />
					))}
					{errorMessage && <Tooltip info={errorMessage} />}
					<form
						className={isSuccess ? 'grayout' : null}
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
										defaultValue=''
										className='birthdate'
										name='month'
										id='month'
										onChange={this.handleCHange}
									>
										<option disabled value=''>
											Month
										</option>
										{months.map((month) => (
											<option value={month.val} key={month.val}>
												{month.label}
											</option>
										))}
									</select>

									<select
										defaultValue=''
										className='birthdate'
										name='date'
										id='date'
										onChange={this.handleCHange}
									>
										<option disabled value=''>
											Date
										</option>
										{days.map((day) => (
											<option key={day} value={day}>
												{day}
											</option>
										))}
									</select>

									<select
										defaultValue=''
										className='birthdate'
										name='year'
										id='year'
										onChange={this.handleCHange}
									>
										<option disabled value=''>
											Year
										</option>
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
					{isSuccess && (
						<Link to="/login">
							<button type='button' className='btn'>
								Login
							</button>
						</Link>
					)}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	isLoading: state.auth.isLoading,
	errorMessage: state.auth.errorMessage,
	isSuccess: state.auth.isSuccess,
})
const mapDispatchToProps = (dispatch) => ({
	authRegisterUser: (user) => dispatch(authRegisterUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
