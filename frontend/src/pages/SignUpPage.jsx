import { Link } from "react-router-dom"
import GenderCheckbox from "../components/GenderCheckbox"
import { useState } from "react"
import useSignUp from "../hooks/useSignUp"

const SignUpPage = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: ""
	})

	const { isLoading, signup } = useSignUp()

	const handleCheckboxChange = (gender) => {
		setInputs({...inputs, gender })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		await signup(inputs)
	}

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<div className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up Chat App
				</div>
				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Full Name</span>
						</label>
						<input 
							type='text' 
							placeholder='Enter Full Name' 
							className='w-full input input-bordered h-10' 
							value={inputs.fullName}
							onChange={(e) => setInputs({...inputs, fullName: e.target.value })}
						/>
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text'>Username</span>
						</label>
						<input 
							type='text' 
							placeholder='Enter Username' 
							className='w-full input input-bordered h-10'
							value={inputs.username}
							onChange={(e) => setInputs({...inputs, username: e.target.value })}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={inputs.password}
							onChange={(e) => setInputs({...inputs, password: e.target.value })}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10'
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value })}
						/>
					</div>

					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>

					<button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={isLoading}>
						{isLoading ? (
							<span className="loading loading-spinner loading-sm"></span>
						) : "Sign Up"}
					</button>
					<Link to={"/login"} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
						Already have an account? Log In
					</Link>
				</form>
			</div>
		</div>
	)
}

export default SignUpPage