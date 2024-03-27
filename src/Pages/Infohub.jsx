import React from 'react'
import Layout from '../Components/Layout'
import img from '../assets/img.jpg'
import image from '../assets/image.webp'

const Infohub = () => {
  return (
    <Layout>
      <section className="mt-12">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold text-center sm:text-5xl ">
              About us
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-base text-center text-gray-400">
              Welcome to BorderLink Solutions, your trusted partner in border
              management and facilitation. At BorderLink Solutions, we are
              committed to revolutionizing the way borders are managed, ensuring
              seamless connectivity and efficiency for businesses, travelers,
              and government agencies alike. Our solution is designed to improve
              efficiency and speed in cross-border operations. We help
              businesses expedite customs clearance, minimize wait times, and
              enhance the flow of goods and people across borders, enabling
              faster and smoother transactions.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-center sm:text-5xl ">
              Our Mission
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-base text-center text-gray-400">
              Our mission is to simplify cross-border trade, streamline
              immigration processes, and enhance security measures to foster
              economic growth, promote global connectivity, and ensure the
              safety and security of our communities.
            </p>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold tracki sm:text-3xl ">
                What we do:
              </h3>

              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-800 text-[#BFCFFF]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi ">
                      Currency Conversion
                    </h4>
                    <p className="mt-2 text-gray-400">
                      We provide cutting-edge technology and innovative
                      solutions to optimize border operations, reduce wait
                      times, and enhance the flow of goods and people across
                      borders.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-800 text-[#BFCFFF]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi ">
                      Immigration Assistance
                    </h4>
                    <p className="mt-2 text-gray-400">
                      We offer immigration assistance services to travelers,
                      expatriates, and immigrants, ensuring smooth entry and
                      exit processes, visa applications, and compliance with
                      immigration policies.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-800 text-[#BFCFFF]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi ">
                      Customer-Centric Approach
                    </h4>
                    <p className="mt-2 text-gray-400">
                      Your satisfaction is our priority. We take pride in
                      delivering exceptional service and support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                src={img}
                alt="onlineinsurance"
                className="mx-auto rounded-lg shadow-lg bg-gray-800 bg-opacity-75"
              />
            </div>
          </div>
          <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-bold tracki sm:text-3xl ">
                  Innovation
                </h3>
                <p className="mt-3 text-lg text-gray-400">
                  We embrace the latest technologies to streamline processes and
                  your cross border activities much easier.
                </p>

                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-800 text-[#BFCFFF]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi ">
                        Trustworthy Partners{' '}
                      </h4>
                      <p className="mt-2 text-gray-400">
                        We work with reputable providers to ensure you
                        get the coverage you can rely on.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-800 text-[#BFCFFF]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi ">
                        Claims Excellence:
                      </h4>
                      <p className="mt-2 text-gray-400">
                        When you need us most, we`re there. Our claims experts
                        are dedicated to helping you navigate the process
                        smoothly and efficiently, ensuring you get the support
                        you deserve.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-800 text-[#BFCFFF]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi ">
                        Community Engagement
                      </h4>
                      <p className="mt-2 text-gray-400">
                        We`re not just your insurance agency; we`re your
                        neighbors. Chayil Insurance takes pride in giving back
                        to the communities we serve, making a positive impact
                        beyond insurance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <img
                  src={image}
                  alt=""
                  className="mx-auto rounded-lg shadow-lg bg-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Infohub
