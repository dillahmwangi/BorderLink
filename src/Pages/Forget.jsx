import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useCURD from '../hooks/useCRUD'
import toast from 'react-hot-toast'

const forget = () => {
  const [email, setEmail] = useState()
  const { post } = useCURD()
  const navigate = useNavigate

  const handleSubmit = (e) => {
    e.preventDefault()
    post('/auth/forgotpassword', { email: email })
      .then(() => {
        toast.success('Check your email for reset password link')
        navigate('/newpass')
      })
      .catch((err) => toast.error(err))
  }
  return (
    <main id="content" role="main" className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Forgot password?
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Remember your password?
              <Link
                className="text-blue-600 decoration-1 hover:underline font-400"
                to="/">
                Login here
              </Link>
            </p>
          </div>

          <div className="mt-5">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-y-4">
                <div>
                  <div className="relative">
                    <div className="max-w-2xl mx-auto">
                      <div className="max-w-2xl mx-auto pt-4">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Enter Email Address"
                        />
                      </div>
                    </div>
                  </div>
                  <p
                    className="hidden text-xs text-red-600 mt-2"
                    id="phone-error">
                    Please include a valid email address so we can get back to
                    you
                  </p>
                </div>
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded border border-transparent font-semibold bg-gray-900 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                  RESET PASSWORD
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default forget
