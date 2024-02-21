import React from 'react'
import { Link } from 'react-router-dom'

const Otp = () => {
  return (
    
<div className="max-w-md mx-auto border  mt-20 rounded">
<h1 className=" text-center font-bold text-gray-800 dark:text-white">Enter OTP Code</h1>
    <form className="shadow-md px-4 py-6">
        <div className="flex justify-center gap-2 mb-6">
          
            <input className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxLength="1" pattern="[0-9]" inputMode="numeric" autoComplete="one-time-code" required/>
            <input className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxLength="1" pattern="[0-9]" inputMode="numeric" autoComplete="one-time-code" required/>
            <input className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxLength="1" pattern="[0-9]" inputMode="numeric" autoComplete="one-time-code" required/>
            <input className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxLength="1" pattern="[0-9]" inputMode="numeric" autoComplete="one-time-code" required/>
        </div>
        <div className="flex items-center justify-center">
          <Link to="/newpass"
            className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Verify
            
           </Link>
            <Link className="inline-block align-baseline font-bold text-sm text-gray-900 hover:text-gray-800 ml-4" to="/">
                Resend OTP
            </Link>
        </div>
    </form>
</div>
  )
}

export default Otp