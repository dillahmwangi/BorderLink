import React from 'react'
import { Link } from 'react-router-dom'


const Signup = () => {

  return (


    <section className="bg-Gray-500">
     <div className="w-full max-w-3xl mx-auto py-4 px-4  xl:px-8 xl:w-6/12">  
    <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
      <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
       REGISTER
      </h3>
      <form>
       
        <div className="mb-1 sm:mb-2">
          <label
            htmlFor="Full Name"
            className="inline-block mb-1 font-medium"
          >
           Full Name
          </label>
          <input
            placeholder="Enter your name"
            required
            type="text"
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            id="userId"
            name="id"
    
          />
        </div>
        <div className="mb-1 sm:mb-2">
          <label
            htmlFor="email"
            className="inline-block mb-1 font-medium"
          >
            ID No
          </label>
          <input
            placeholder="Enter your id number"
            required
            type="password"
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
          />
        </div> 
        <div className="mb-1 sm:mb-2">
          <label
            htmlFor="email"
            className="inline-block mb-1 font-medium"
          >
            Email Address
          </label>
          <input
            placeholder="Enter your Email Address"
            required
            type="password"
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
          />
        </div> 

        <div className="mb-1 sm:mb-2">
          <label
            htmlFor="email"
            className="inline-block mb-1 font-medium"
          >
            Phone Number
          </label>
          <input
            placeholder="Enter your Phone Number"
            required
            type="password"
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
          />
        </div> 
        <div className="mb-1 sm:mb-2">
          <label
            htmlFor="email"
            className="inline-block mb-1 font-medium"
          >
            Country
          </label>
          <input
            placeholder="Enter your Phone Number"
            required
            type="password"
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
          />
        </div>
        <div className='flex justify-between space-x-4'>
        <div className="mb-1 sm:mb-2">
          <label
            htmlFor="email"
            className="inline-block mb-1 font-medium"
          >
           Password
          </label>
          <input
            placeholder="Enter your Password"
            required
            type="password"
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
          />
        </div>
        <div className="mb-1 sm:mb-2">
          <label
            htmlFor="email"
            className="inline-block mb-1 font-medium"
          >
            Confirm Password
          </label>
          <input
            placeholder="Enter your profile"
            required
            type="password"
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
          />
        </div>
        </div>
        <div className="mt-4 mb-2 sm:mb-4">
          <Link
          to={'/createprofile'}>
          <button
          
            type="submit"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-900 hover:bg-gray-800 focus:shadow-outline focus:outline-none"
          >
            SIGN UP
          </button>
          </Link>
        </div>
     

      </form>
    </div>
  </div>
  
    </section>
  )
}

export default Signup