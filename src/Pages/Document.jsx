import { useState } from 'react'
import Layout from '../Components/Layout'
import { Icon } from '@iconify/react'
import Form from './form'
import { Link } from 'react-router-dom'
import useAPI from '../hooks/useAPI'
import { QRCodeSVG } from 'qrcode.react'

const Document = () => {
  const [openForm, setOpenForm] = useState(false)
  const [docs] = useAPI('/doc/documents/user/65e67fa03291b74f8144d35c')
  return (
    <Layout>
      {openForm ? <Form setOpenForm={setOpenForm} openForm={openForm} /> : null}
      <div className="w-full px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg pb-4">
          <div className="flex justify-between">
            <Link
              onClick={() => setOpenForm(true)}
              to=""
              className="inline-flex items-center text-white m-6 justify-center h-9 p-4 font-bold tracking-wide transition duration-200 rounded shadow-md bg-gray-900  hover:bg-gray-700 focus:shadow-outline focus:outline-none"
              aria-label="Sign up"
              title="Sign up">
              ADD
            </Link>

            <div className="p-4 mt-6">
              <label htmlFor="table-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for items"
                />
              </div>
            </div>
          </div>

          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4"></th>
                <th scope="col" className="px-6 py-3">
                  Document name
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Size
                </th>
                <th scope="col" className="px-6 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {docs.map((doc, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {doc.filename}
                  </th>
                  <td className="px-6 py-4">{doc.createdAt}</td>
                  <td className="px-6 py-4">{doc.size}</td>
                  <td className="px-6 py-4">{doc.type}</td>
                  <td className="px-6 py-4 text-right flex">
                    <Icon
                      icon="ion:eye"
                      width={24}
                      height={24}
                      className="text-gray-900"
                    />
                    <Icon
                      icon="fa-solid:edit"
                      width={24}
                      height={24}
                      className="text-gray-900 mx-2"
                    />
                    <Icon
                      icon="mingcute:delete-2-fill"
                      width={24}
                      height={24}
                      className="text-gray-900"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center items-center pb-8">
        <QRCodeSVG value="http://192.168.0.101:5173/document" />
      </div>
      {/* <div className="text-center p-6">
        <Link
          to="/info-hub"
          className="inline-flex items-center justify-center  w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-gray-900 hover:bg-gray-700 focus:shadow-outline focus:outline-none">
          Generate QR Code
        </Link>
      </div> */}
    </Layout>
  )
}

export default Document
