import React from 'react'
import { Link } from 'react-router-dom'

const Otp = () => {
  return (
    
<main id="content" role="main" className="w-full max-w-md mx-auto p-6">
    <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-xl font-800 text-gray-800 dark:text-white">Enter Email Address</h1>
        </div>

        <div className="mt-5">
          <form>
            <div className="grid gap-y-4">
              <div>
                <div className="relative">
              <div className="max-w-2xl mx-auto">
            <input  type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
                </div>
                <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
              </div>
              <Link
              to="/otp" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded border border-transparent font-semibold bg-gray-900 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
              <button type="submit" >REQUEST OTP CODE</button>
           </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
  )
}

export default Otp