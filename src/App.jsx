import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from "./pages/Home";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Gig from "./pages/Gig/Gig";


function App() {

  const Layout = ()=>{
    return(
      <div>
        <NavBar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/gig/:id",
          element:<Gig/>
        },
      ]

    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
