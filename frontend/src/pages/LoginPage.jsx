const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <div className="text-3xl font-semibold text-center text-gray-300">
                Login Chat App
            </div>
            <form>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Username</span>
                    </label>
                    <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10"/>
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input type="text" placeholder="Enter Password" className="w-full input input-bordered h-10"/>
                </div>
                <button className="btn btn-block btn-sm mt-4">Login</button>
                <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                    Don't have an account? Sign Up
                </a>
            </form>
        </div>
    </div>
  )
}

export default LoginPage