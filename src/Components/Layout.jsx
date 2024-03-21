import Navbar from './Navbar'
import Footer from './footer'

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Navbar />
        <main>
          <div className="w-full max-w-9xl mx-auto">{children}</div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
