import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useAuth } from '../hooks/useAuth'


const Signup = () => {
const [form,setForm] = useState({
  userName:"",
  idNo: "",
  email:"",
  country:"",
  phone: "",
  password:"",
  confirmPassword:""
})
const{processing,signUp} = useAuth()

//     // In a real-world scenario, you'd want to redirect the user to another page after sign-up
//     // You can use the "react-router-dom" library to handle navigation
//   };
const onChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};
const handleSubmit = (e) => {
  e.preventDefault();
  if(form.password !==form.confirmPassword){
    toast.error("Passwords do not match")
  }
console.log("its working")
  signUp(form)
    .then(()=>{
      setTimeout(()=>{
        window.location.href = "/"
      },3000)
    })
    .catch(error=>toast.error(error.error))

}

  return (

    <section className="bg-Gray-500">
     <div className="w-full max-w-3xl mx-auto py-4 px-4  xl:px-8 xl:w-6/12">  
    <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
      <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
       REGISTER
      </h3>
      <form   onSubmit={handleSubmit}
 >
       
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
            id="userName"
            name="userName"
            value={form.userName}
            onChange={onChange}
          
    
          />
        </div>
        <div className="mb-1 sm:mb-2">
          <label
            htmlFor="userId"
            className="inline-block mb-1 font-medium"
          >
            ID No
          </label>
          <input
            placeholder="Enter your id number"
            required
            type="number"
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            id="userId"
            name="idNo"
            value={form.idNo}
            onChange={onChange}
           
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
            type="email"
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            value={form.email}
            onChange={onChange}
           
          />
        </div> 

        <div className="mb-1 sm:mb-2">
          <label
            htmlFor="phone"
            className="inline-block mb-1 font-medium"
          >
            Phone Number
          </label>
          <input
            placeholder="Enter your Phone Number"
            required
            type="text"
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={onChange}
           
          />
        </div> 
        <div className="mb-1 sm:mb-2">
          <label
            htmlFor="country"
            className="inline-block mb-1 font-medium"
          >
            Country
          </label>
          <input
            placeholder="Enter your country"
            required
            type="text"
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            id="country"
            name="country"
            value={form.country}
            onChange={onChange}
           
          />
        </div>
        <div className='flex justify-between space-x-4'>
        <div className="mb-1 sm:mb-2">
          <label
            htmlFor="password"
            className="inline-block mb-1 font-medium"
          >
           Password
          </label>
          <input
            placeholder="Enter your Password"
            required
            type="password"
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"

            name="password"
            value={form.password}
            onChange={onChange}
          
          />
        </div>
        <div className="mb-1 sm:mb-2">
          <label
            htmlFor="password"
            className="inline-block mb-1 font-medium"
          >
            Confirm Password
          </label>
          <input
            placeholder="Reenter  your password"
            required
            type="password"
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={onChange}
    
          />
        </div>
        </div>
        <div className="mt-4 mb-2 sm:mb-4">
          
          <button
            loading={processing}
            type="submit" 
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-900 hover:bg-gray-800 focus:shadow-outline focus:outline-none"
          >
            SIGN UP
          </button>
        
          <div className="flex justify-evenly mt-2">
                     
                     <p className="text-center font-400">Already have an account? <Link className="text-blue-500 hover:underline" to="/">Sign In</Link></p>
                       </div>
        </div>
     

      </form>
    </div>
  </div>
  
    </section>

  )
}

export default Signup