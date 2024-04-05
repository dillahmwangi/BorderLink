import { useEffect, useState } from 'react'
import Layout from '../Components/Layout'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useAuth } from '../hooks/useAuth'
import useCURD from '../hooks/useCRUD'
import bgimg from '../assets/bgimg.jpg'
import passport from '../assets/passport.jpg'
import covid from '../assets/covid.png'
import temppassport from '../assets/temppassport.png'
import id from '../assets/id.png'

const Home = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const { processing, signIn } = useAuth()
  const { post } = useCURD()
  const [from, setFrom] = useState('1')
  const [to, setTo] = useState('')
  const [fromSelect, setFromSelect] = useState('USD')
  const [toSelect, setToSelect] = useState('EUR')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [contact, setContact] = useState({
    username: '',
    Contactemail: '',
    subject: '',
    message: '',
  })
  console.log('contact:4 ', contact)

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onChangeContact = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }

  const handleContact = (e) => {
    e.preventDefault()
    console.log('contact: ', contact)
    let data = {
      phoneNumber: '+254713289622',
      message: `Hello, I am ${contact?.username}\n email: ${contact.Contactemail}\n subject: ${contact.subject}\n message: ${contact.message}`,
    }

    console.log('data: ', data)

    post('/sms/contact', data)
      .then(() => {
        setIsSubmitted(true)
        toast.success('Submitted Successfully')
      })
      .catch((error) => toast.error(error.error))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    signIn(form)
      .then(() => {
        setTimeout(() => {
          window.location.href = '/document'
        }, 3000)
      })
      .catch((error) => toast.error(error.error))
  }

  useEffect(() => {
    post('/currency', { to: toSelect, from: fromSelect })
      .then((res) => {
        const conversionRate = res.message.data[toSelect]
        const convertedValue = conversionRate * from
        setTo(convertedValue)
      })
      .catch((err) => toast.error(err))
  }, [toSelect, fromSelect, from])

  const options = [
    { key: 'EUR', value: 'EUR' },
    { key: 'USD', value: 'USD' },
    { key: 'JPY', value: 'JPY' },
    { key: 'BGN', value: 'BGN' },
    { key: 'CZK', value: 'CZK' },
    { key: 'DKK', value: 'DKK' },
    { key: 'GBP', value: 'GBP' },
    { key: 'HUF', value: 'HUF' },
  ]

  return (
    <Layout>
      <div className="relative">
        <img
          src={bgimg}
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  BORDERLINK <br className="text-gray-900 " />
                  SOLUTIONS{' '}
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                  Explore our solutions to help you overcome challenges and
                  achieve your goals. Whether it’s border clearance or currency
                  coversion. We are a team of highly skilled professionals
                  willing to provide info related to the border and and latest
                  news.Our mission is to provide fast, effective solutions for
                  you.
                </p>

                <div className="flex space-y-4 flex-col w-1/2">
                  <div>
                    <label
                      htmlFor="hs-inline-leading-pricing-select-label"
                      className="block text-md font-bold mb-2 text-white">
                      Currency Converter
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        id="hs-inline-leading-pricing-select-label"
                        name="from"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                        className="py-3 px-4 ps-9 pe-20 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        placeholder="From"
                      />
                      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                        <span className="text-gray-500">$</span>
                      </div>
                      <div className="absolute inset-y-0 end-0 flex items-center text-gray-500 pe-px">
                        <label
                          htmlFor="hs-inline-leading-select-currency"
                          className="sr-only">
                          Currency
                        </label>
                        <select
                          value={fromSelect}
                          onChange={(e) => setFromSelect(e.target.value)}
                          id="hs-inline-leading-select-currency"
                          name="hs-inline-leading-select-currency"
                          className="block w-full border-transparent rounded-lg focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-800">
                          {options.map((option) => (
                            <option key={option.key} value={option.value}>
                              {option.key}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="number"
                      id="hs-inline-leading-pricing-select-label"
                      name="to"
                      value={to}
                      onChange={(e) => setTo(e.target.value)}
                      className="py-3 px-4 ps-9 pe-20 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="To"
                    />
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                      <span className="text-gray-500">$</span>
                    </div>
                    <div className="absolute inset-y-0 end-0 flex items-center text-gray-500 pe-px">
                      <label
                        htmlFor="hs-inline-leading-select-currency"
                        className="sr-only">
                        Currency
                      </label>
                      <select
                        value={toSelect}
                        onChange={(e) => setToSelect(e.target.value)}
                        id="hs-inline-leading-select-currency"
                        name="hs-inline-leading-select-currency"
                        className="block w-full border-transparent rounded-lg focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-800">
                        {options.map((option) => (
                          <option key={option.key} value={option.value}>
                            {option.key}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full max-w-md xl:px-8 xl:w-6/12">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    SIGN IN
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="lastName"
                        className="inline-block mb-1 font-medium">
                        Email Address
                      </label>
                      <input
                        placeholder="joedan@gmail.com"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="userId"
                        name="email"
                        value={form.email}
                        onChange={onChange}
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium">
                        Password
                      </label>
                      <input
                        placeholder="Password"
                        required
                        type="password"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="password"
                        name="password"
                        value={form.password}
                        onChange={onChange}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-row items-center">
                        <input
                          type="checkbox"
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                        <label
                          htmlFor="comments"
                          className="ml-2 text-sm font-normal text-gray-600">
                          Remember me
                        </label>
                      </div>
                      <div>
                        <Link
                          className="text-sm text-blue-600 hover:underline"
                          to="/forget">
                          forgot password?
                        </Link>
                      </div>
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        loading={processing}
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-900 hover:bg-gray-800 focus:shadow-outline focus:outline-none">
                        SIGN IN
                      </button>
                    </div>
                    <div className="flex justify-evenly mt-2">
                      <p className="text-center font-400">
                        Don&rsquo;t have an account?{' '}
                        <Link
                          className="text-blue-500 hover:underline"
                          to="/signup">
                          Sign up
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="font-bold text-center py-5 px-4 text-gray-900 sm:text-4xl md:mx-auto">
        <p>ABOUT US</p>
      </div>

      <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-18 lg:px-8 lg:py-18">
        <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52">
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="font-semibold leading-5">
                  Upload Documentations
                </h6>
              </div>
              <p className="mb-2 text-sm text-gray-900">
                Upload your documents here to generate qr code for faster border
                clearance.
              </p>
              <Link
                to="/document"
                aria-label=""
                className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                Learn more
              </Link>
            </div>
          </div>

          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52">
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="font-semibold leading-5">
                  Document Application
                </h6>
              </div>
              <p className="mb-2 text-sm text-gray-900">
                Apply for the necessary documents required to leave and enter
                the country through e-citizen.
              </p>
              <Link
                to="https://dis.ecitizen.go.ke/auth/login"
                aria-label=""
                className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                Learn more
              </Link>
            </div>
          </div>
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52">
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="font-semibold leading-5">Chat In community</h6>
              </div>
              <p className="mb-2 text-sm text-gray-900">
                Get Involved with people of similar interests by joining our
                online community in chat section.
              </p>
              <Link
                to="/Chat"
                aria-label=""
                className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Document Preview
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                <defs>
                  <pattern
                    id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30">
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)"
                  width="52"
                  height="24"
                />
              </svg>
            </span>{' '}
            Preview some of the Required Documents here.
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            This is a place holder for document preview, you can upload your own
            documents to see how they look in Documents.
          </p>
        </div>
        <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
          <Link
            to="https://dis.ecitizen.go.ke/auth/login"
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2">
            <div className="flex flex-col h-full">
              <img src={passport} className="object-cover w-full h-48" alt="" />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-2 font-semibold leading-5">Passport</h6>
                  <p className="text-sm text-gray-900">
                    This is a booklet document that is required when leaving or
                    entering a country. You can apply for it at any passport
                    issuing office or the ecitizen portal.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link
            to="https://www.hudumakenya.go.ke/"
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2">
            <div className="flex flex-col h-full">
              <img src={id} className="object-cover w-full h-48" alt="" />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-2 font-semibold leading-5">National ID</h6>
                  <p className="text-sm text-gray-900">
                    This card is only issued to citizens of 18yrs and above. It
                    is a document that proves that you are a citizen of a
                    country in Kenya it is applied for at huduma center.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link
            to="https://dis.ecitizen.go.ke/auth/login"
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2">
            <div className="flex flex-col h-full">
              <img
                src={temppassport}
                className="object-cover w-full h-48"
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-2 font-semibold leading-5">
                    Temporary Permit
                  </h6>
                  <p className="text-sm text-gray-900">
                    This works as a temporary passport for citizens who have not
                    acquired the permanent passport. It can only give you access
                    to East-African Countries and expires after a year.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link
            to="https://portal.health.go.ke/"
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2">
            <div className="flex flex-col h-full">
              <img src={covid} className="object-cover w-full h-48" alt="" />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-2 font-semibold leading-5">
                    Covid-19 Certificate
                  </h6>
                  <p className="text-sm text-gray-900">
                    This is a must have certificate that can be acquired through
                    the Health Portal of Kenya Government. It will help you get
                    access to various services and facilities across the
                    country.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="text-center">
          <Link
            to="/info-hub"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-gray-900 hover:bg-gray-700 focus:shadow-outline focus:outline-none">
            Learn more
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-[1920px]  2xl:px-16 px-4 py-5 justify-center sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="md:w-full lg:w-3/5 2xl:w-4/6 flex h-full ltr:md:ml-7 rtl:md:mr-7 flex-col ltr:lg:pl-7 rtl:lg:pr-7">
          <div className="flex pb-7 md:pb-9 mt-7 md:-mt-1.5 justify-center">
            <h4 className="text-2xl 2xl:text-3xl font-bold text-heading">
              Get in touch
            </h4>
          </div>
          {isSubmitted ? (
            <p> Thank you {contact.name} you message is received.</p>
          ) : (
            <form
              onSubmit={handleContact}
              className="w-full mx-auto flex flex-col justify-center "
              noValidate>
              <div className="flex flex-col space-y-5">
                <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 gap-4">
                  <div className="w-full md:w-1/2 ">
                    <label
                      htmlFor="name"
                      className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">
                      Your Name (required)
                    </label>
                    <input
                      id="name"
                      name="username"
                      type="text"
                      value={contact.username}
                      onChange={onChangeContact}
                      placeholder="Enter Your Name"
                      className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                      autoComplete="off"
                      spellCheck="false"
                      aria-invalid="false"
                    />
                  </div>
                  <div className="w-full md:w-1/2 ltr:md:ml-2.5 rtl:md:mr-2.5 ltr:lg:ml-5 rtl:lg:mr-5 mt-2 md:mt-0">
                    <label
                      htmlFor="email"
                      className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">
                      Your Email (required)
                    </label>
                    <input
                      id="email"
                      name="Contactemail"
                      type="email"
                      value={contact.Contactemail}
                      onChange={onChangeContact}
                      placeholder="Enter Your Email"
                      className="py-2 px-4 md:px-5 w-full appearance-none  border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                      autoComplete="off"
                      spellCheck="false"
                      aria-invalid="false"
                    />
                  </div>
                </div>
                <div className="relative">
                  <label
                    htmlFor="subject"
                    className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={contact.subject}
                    onChange={onChangeContact}
                    placeholder="Enter Your Subject"
                    className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                    autoComplete="off"
                    spellCheck="false"
                    aria-invalid="false"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-600 font-semibold text-sm leading-none mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={contact.message}
                    onChange={onChangeContact}
                    className="px-4 py-3 flex items-center w-full appearance-none transition duration-300 ease-in-out text-heading text-sm  focus:ring-0 bg-white border border-gray-300 focus:shadow focus:outline-none focus:border-heading placeholder-body"
                    autoComplete="off"
                    spellCheck="false"
                    rows={4}
                    placeholder="Write your message here"></textarea>
                </div>
                <div className="relative">
                  <button
                    data-variant="flat"
                    className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none  bg-black text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto"
                    type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Home
