import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from "./pages/Home";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Gig from "./pages/Gig/Gig";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import reviewsReducer from "./reducers/reviews.reducer";
import gigsReducer from "./reducers/gigs.reducer";
import userReducer from "./reducers/user.reducer";
import Profile from "./pages/Profile/Profile";
import authReducer from "./reducers/auth.reducer";
import Success from "./pages/Payment/Success";
import ProductSearchPage from "./pages/ProductSearch/ProductSearchPage";
import CreateGigPage from "./pages/GigForm/CreateGigPage";
import GigsCollection from "./pages/GigPage/GigPage";
import AllUsersPage from "./pages/AllUsersPage/AllUsersPage";
const store = configureStore(
  {
      reducer:{
        reviews:reviewsReducer,
        gigs:gigsReducer,
        users:userReducer,
        auth:authReducer,
      }
  }
)

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
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/payment/success",
          element:<Success/>
        },
        {
          path:"/productsearch",
          element:<ProductSearchPage/>
        },
        {
          path:"/createGigForm",
          element:<CreateGigPage/>
        },
        {
          path:"/buyGigs",
          element:<GigsCollection/>
        },
        {
          path:"/allUsers",
          element:<AllUsersPage/>
        },
        {
          path:"/profile/:id",
          element:<Profile location={"bio"}/>,
          children:[
            {
              path:"/profile/:id/bio",
              element:<Profile/>
            },
            {
              path:"/profile/:id/seller",
              element:<Profile/>
            },
            {
              path:"/profile/:id/reviews",
              element:<Profile/>
            }
          ]
        },
        

      ]

    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
