import React from 'react'
import  Layout from  "../Components/Layout"
import { Link } from 'react-router-dom'
import id from '../assets/id.png'
import passport from '../assets/passport.jpg'
import covid from '../assets/covid.png'
import temppassport from '../assets/temppassport.png'


const Home = () => {
  return (
    <Layout>
      <div className="relative">
      <img
        src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
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
                Explore our  solutions to help you overcome challenges and achieve your goals. Whether it’s border clearance or currency coversion.
                We are a team of highly skilled professionals willing to provide info related to the border and and latest news.Our mission is to provide fast, effective solutions for you.
              </p>

  <div className='flex space-y-4 flex-col w-1/2'>
    <div >
  <label htmlhtmlFor="hs-inline-leading-pricing-select-label" className="block text-md font-bold mb-2 text-white">Currency Converter</label>
  <div className="relative">
    <input type="text" id="hs-inline-leading-pricing-select-label" name="inline-add-on" className="py-3 px-4 ps-9 pe-20 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="0.00"/>
    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
      <span className="text-gray-500">$</span>
    </div>
    <div className="absolute inset-y-0 end-0 flex items-center text-gray-500 pe-px">
      <label htmlhtmlFor="hs-inline-leading-select-currency" className="sr-only">Currency</label>
      <select id="hs-inline-leading-select-currency" name="hs-inline-leading-select-currency" className="block w-full border-transparent rounded-lg focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-800">
        <option>USD</option>
        <option>CAD</option>
        <option>EUR</option>
      </select>
    </div>
  </div>
</div>
    
 

  <div className="relative">
    <input type="text" id="hs-inline-leading-pricing-select-label" name="inline-add-on" className="py-3 px-4 ps-9 pe-20 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="0.00"/>
    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
      <span className="text-gray-500">$</span>
    </div>
    <div className="absolute inset-y-0 end-0 flex items-center text-gray-500 pe-px">
      <label htmlhtmlFor="hs-inline-leading-select-currency" className="sr-only">Currency</label>
      <select id="hs-inline-leading-select-currency" name="hs-inline-leading-select-currency" className="block w-full border-transparent rounded-lg focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-800">
        <option>USD</option>
        <option>CAD</option>
        <option>EUR</option>
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
                <form>
                 
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlhtmlhtmlFor="lastName"
                      className="inline-block mb-1 font-medium"
                    >
                      UserID
                    </label>
                    <input
                      placeholder="22334580"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="userId"
                      name="id"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlhtmlhtmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      Password
                    </label>
                    <input
                      placeholder="Dillah40#"
                      required
                      type="password"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="password"
                      name="password"
                    />
                  </div> 
                  <div className="flex items-center justify-between">
            <div className="flex flex-row items-center">
                <input type="checkbox" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"/>
                <label htmlhtmlFor="comments" className="ml-2 text-sm font-normal text-gray-600">Remember me</label>
            </div>
            <div>
                <Link className="text-sm text-blue-600 hover:underline" to="/forget">forgot password?</Link>
            </div>
        </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-900 hover:bg-gray-800 focus:shadow-outline focus:outline-none"
                    >
                      SIGN IN
                    </button>
                  </div>
                  <div className="flex justify-evenly mt-2">
                     
                  <p className="text-center font-400">Don&rsquo;t have an account? <Link className="text-blue-500 hover:underline" to="/signup">Sign up</Link></p>
                    </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div  className="font-bold text-center py-5 px-4 text-gray-900 sm:text-4xl md:mx-auto">
      <p>
        ABOUT US
      </p>
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
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    stokelinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="font-semibold leading-5">Upload Documentations</h6>
            </div>
            <p className="mb-2 text-sm text-gray-900">
              Upload your documents here to generate qr code for faster border clearance.
            </p>
            <Link
              to="/document"
              aria-label=""
              className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
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
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    stokelinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="font-semibold leading-5">Document Application</h6>
            </div>
            <p className="mb-2 text-sm text-gray-900">
              Apply for the necessary documents required to leave and enter the country through e-citizen.
            </p>
            <Link
              to="https://dis.ecitizen.go.ke/auth/login"
              aria-label=""
              className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
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
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    stokelinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="font-semibold leading-5">This is about justice</h6>
            </div>
            <p className="mb-2 text-sm text-gray-900">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam.
            </p>
            <Link
              to="/"
              aria-label=""
              className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
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
            Brand new
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">The</span>
          </span>{' '}
          quick, brown fox jumps over a lazy dog
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
        <Link
          to="https://dis.ecitizen.go.ke/auth/login"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src={passport}
              className="object-cover w-full h-48"
              alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">
                  The doctor said
                </h6>
                <p className="text-sm text-gray-900">
                  Sportacus andrew weatherall goose Refined gentlemen super
                  mario des lynam alpha trion zap rowsdower.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="https://dis.ecitizen.go.ke/auth/login"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src={id}
              className="object-cover w-full h-48"
              alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">
                  Skate ipsum dolor
                </h6>
                <p className="text-sm text-gray-900">
                  Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="/"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src={temppassport}
              className="object-cover w-full h-48"
              alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">They urge you</h6>
                <p className="text-sm text-gray-900">
                  A flower in my garden, a mystery in my panties. Heart attack
                  never stopped old Big Bear.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="/"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src={covid}
              className="object-cover w-full h-48"
              alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">
                  Baseball ipsum dolor
                </h6>
                <p className="text-sm text-gray-900">
                  Bro ipsum dolor sit amet gaper backside single track, manny
                  Bike epic clipless. Schraeder drop gondy.
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="text-center">
        <Link
          to="/info-hub"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-gray-900 hover:bg-gray-700 focus:shadow-outline focus:outline-none"
        >
          Learn more
        </Link>
      </div>
    </div>


    </Layout>
  )
}

export default Home