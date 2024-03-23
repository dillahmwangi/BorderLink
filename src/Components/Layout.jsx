import { useLocation } from 'react-router-dom'; // Assuming you're using React Router

import Navbar from './Navbar';
import Footer from './footer';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const location = useLocation();

  // Define an array of routes where you want to hide the footer
  const hideFooterRoutes = ['/document', '/profile']; // Add routes as needed

  // Check if the current route is in the array of routes where footer should be hidden
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Navbar />
        <main>
          <div className="w-full max-w-9xl mx-auto">{children}</div>
        </main>
        {!shouldHideFooter && <Footer />}
      </div>
    </div>
  );
};

export default Layout;