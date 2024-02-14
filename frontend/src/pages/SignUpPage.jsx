import GenderCheckbox from "../components/GenderCheckbox"

const SignUpPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
 				<div className='text-3xl font-semibold text-center text-gray-300'>
 					Sign Up ChatApp
 				</div>
 				<form>
 					<div>
 						<label className='label p-2'>
 							<span className='text-base label-text'>Full Name</span>
 						</label>
 						<input type='text' placeholder='John Doe' className='w-full input input-bordered  h-10' />
 					</div>

 					<div>
 						<label className='label p-2 '>
 							<span className='text-base label-text'>Username</span>
 						</label>
 						<input type='text' placeholder='johndoe' className='w-full input input-bordered h-10' />
 					</div>

 					<div>
 						<label className='label'>
 							<span className='text-base label-text'>Password</span>
 						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
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
						/>
					</div>

					<GenderCheckbox />

					<button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
                    <a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
						Already have an account? Log In
					</a>
				</form>
			</div>
		</div>
  )
}

export default SignUpPage