import { useState } from 'react'
import useCURD from '../hooks/useCRUD'
import toast from 'react-hot-toast'
import useAPI from '../hooks/useAPI'

// eslint-disable-next-line react/prop-types
const Form = ({ setOpenForm }) => {
  const [{ refetch }] = useAPI()
  const { post, processing } = useCURD()
  const [formData, setFormData] = useState({
    name: '',
    documentImage: null,
    user: '65e67fa03291b74f8144d35c',
  })

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleClosingOverlay = () => {
    setOpenForm(false)
  }
  const handleFileChange = (event) => {
    const file = event.target.files[0] // Get the first file from the array of selected files
    setFormData((prev) => ({
      ...prev,
      documentImage: file,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.documentImage) {
      toast.error('file and name are required')
      return
    }
    const payload = new FormData()
    payload.append('name', formData.name)
    payload.append('documentImage', formData.documentImage)
    payload.append('user', formData.user)

    post('/doc', payload)
      .then(() => {
        toast.success('Document added successfully')
        setOpenForm(false)
        refetch()
      })
      .catch((err) => toast.error(err?.error))
  }

  return (
    <>
      <div
        onClick={() => handleClosingOverlay()}
        className="flex justify-center items-center   fixed inset-0 z-50">
        <form
          onClick={(e) => e.stopPropagation()}
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col  pt-7 pr-6 w-96 pb-5 pl-6 bg-white shadow-2xl rounded-md relative z-10">
          <p className="w-full text-4xl font-medium text-center leading-snug font-serif">
            Add Document
          </p>
          <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-4">
            <div className="relative">
              <p
                className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                                absolute">
                {' '}
                Document Name
              </p>
              <input
                placeholder="John"
                type="text"
                className="border placeholder-gray-400 focus:outline-none
                                focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                                border-gray-300 rounded-md"
                name="name"
                value={formData.name}
                onChange={onChange}
              />
            </div>

            <div className="relative">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
                htmlFor="file_input">
                Upload File
              </label>
              <input
                className="block w-full  text-gray-900 border focus:border-black  pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base   rounded-lg cursor-pointer bg-white dark:text-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-900"
                name="file"
                id="file"
                type="file"
                onChange={handleFileChange}
              />
            </div>
            <div className="relative">
              <button
                loading={processing}
                type="submit"
                className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-gray-900 rounded-lg transition duration-200 hover:bg-gray-700 ease">
                {/* {loading ? (
                                    <p className="flex justify-center items-center animate-spin">
                                        <ImSpinner9 size={30} />
                                    </p>
                                ) : (  */}
                <>Submit</>
                {/* )} */}
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default Form
