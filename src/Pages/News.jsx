import Layout from '../Components/Layout'
import useAPI from '../hooks/useAPI'

const News = () => {
  const [news] = useAPI('/news')
  return (
    <Layout>
      <div className="py-16 bg-purple-200">
        <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
          <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
            {news?.articles?.map((tonew, index) => (
              <div
                className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8"
                key={index}>
                <div className="mb-12 space-y-4">
                  <h3 className="text-2xl font-semibold text-purple-900">
                    {tonew.title}
                  </h3>
                  <p className="mb-6">{tonew.description}</p>
                  <a href="#" className="block font-medium text-purple-600">
                    Know more
                  </a>
                </div>
                <img
                  src={tonew.urlToImage}
                  className="w-full mx-auto mb-2"
                  alt="illustration"
                  loading="lazy"
                  width="900"
                  height="600"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default News
