const ViewForm = ({ setOpenForm, doc }) => {
  const handleClosingOverlay = () => {
    setOpenForm(false)
  }

  return (
    <>
      <div
        onClick={handleClosingOverlay}
        className="flex justify-center items-center fixed inset-0 z-50">
        <div className="flex flex-col pt-7 pr-6 w-96 pb-5 pl-6 bg-white shadow-2xl rounded-md relative z-10">
          <h3>{doc.filename}</h3>
          {/* {doc.documentImage.endsWith('.pdf') ? (
            <Document file={doc.documentImage}>
              <Page pageNumber={1} />
            </Document>
          ) : ( */}
          <img src={doc.documentImage} alt={doc.filename} />
          {/* )} */}
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default ViewForm
