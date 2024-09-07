import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
	return (
		<div className='flex flex-col items-center justify-center min-w-80 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-blue-500'> ChatApp</span>
				</h1>

				<form>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text text-gray-300'>Full Name</span>
						</label>
						<input type='text' className='w-full input input-bordered  h-8' />
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text text-gray-300'>Username</span>
						</label>
						<input type='text'  className='w-full input input-bordered h-8' />
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text text-gray-300'>Password</span>
						</label>
						<input
							type='password'
							className='w-full input input-bordered h-8'
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text text-gray-300'>Confirm Password</span>
						</label>
						<input
							type='password'
							className='w-full input input-bordered h-8'
						/>
					</div>

					<GenderCheckbox />

					<a className='text-gray-300 text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
						Already have an account?
					</a>

					<div>
						<button className='text-gray-300 btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;