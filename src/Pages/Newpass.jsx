import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import useCURD from '../hooks/useCRUD'


const Newpass = () => {
    const { put } = useCURD()
    const navigate = useNavigate()
    const [form, setForm] = useState({
        otp:"",
        newPassword: "",
        confrimNewPassword:''
      })
    const handleSubmit=(e)=>{
        e.preventDefault()
        put('/auth/resetPassword')
        .then((res) =>{
            toast.success(res.message)
            navigate('/')
        }).catch((err)=> toast.error(err))

    }

    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 className="mb-1 text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Change Password
            </h2>
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={handleSubmit}>

            <div>
                    <label for="otp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">OTP</label>
                    <input type="text" name="otp" value={form.otp} onChange={onChange} id="otp" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                </div>
               
                <div>
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                    <input type="password" name="password" id="password" value={form.newPassword} onChange={onChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                </div>
                <div>
                    <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                    <input type="password" name="confirmNewPassword" value={form.confrimNewPassword} onChange={onChange} id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                </div>
               <button
                type="submit" className="w-full text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset passwod
            </button>
            </form>
        </div>
    </div>
  </section>
  )
}

export default Newpass