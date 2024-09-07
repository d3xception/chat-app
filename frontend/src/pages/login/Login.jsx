
const Login = () => {
	return (
		<div className='flex flex-col items-center justify-center min-w-80 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-2xl font-semibold text-center text-gray-300'>
					Login to
					<span className='text-blue-500'> ChatApp</span>
				</h1>

				<form>
					<div>
						<label className='label'>
							<span className='text-base label-text text-gray-300'>Username</span>
						</label>
						<input type='text' className='w-full input input-bordered h-8' />
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
					<a href='#' className='text-sm  text-gray-300 hover:underline hover:text-blue-600 mt-2 inline-block'>
						{"Don't"} have an account?
					</a>

					<div>
						<button className='btn btn-block btn-sm mt-2 text-gray-300'>Login</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Login;