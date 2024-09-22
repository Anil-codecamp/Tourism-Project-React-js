import React from 'react'
import './App.css';
import Home from './component/Home/Home';
import Offer from './component/Offers/Offer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './component/layout/AppLayout';
import MyAbout from './component/RouterDom/MyAbout';
import Contact1 from './component/RouterDom/Contact1';
import Shop from './component/shop/Shop';
import SingleProduct from './component/shop/SingleProduct';
import Cart from './component/RouterDom/Cart';
import Cartpage from './component/shop/Cartpage';




// const App = () => {
//   return (



//     // <div>
//     //   <Navbar/>
//     //   <Home/>
//     //   <Popular/>
//     //   <Offer/>
//     //   <About/>
//     //   <Blog/>
//     //   <Footer/>
//     // </div>
//   )
// }

// export default App


const App = () => {
  const router = createBrowserRouter([

    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/about",
          element: <MyAbout/>,
        },
        {
          path: "/shop",
          element: <Shop/>,
        },
        {
          path: "/offers",
          element: <Offer/>,
        },
       
        {
          path: "/contact",
          element: <Contact1/>,
        },

        {
          path: "/cart",
          element: <Cartpage/>
        },
        

        
        

        
      
      ]
      
    }
    
  ]);
 
   return <RouterProvider router={router} />
  
}

export default App



