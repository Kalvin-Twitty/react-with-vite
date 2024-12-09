function SignUp() {
    return (
      <div className="min-h-screen bg-gray-800 text-white flex items-center justify-center">
        <div className="bg-gray-700 p-8 rounded-lg shadow-md max-w-md w-full">
          <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm text-gray-300 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default SignUp;
  