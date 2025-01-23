import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Pages/Home/Home.jsx"
import About from "./Pages/About/About.jsx"
import Contact from "./Pages/Contact/Contact.jsx"
import ErrorPage from "./Pages/Error/ErrorPage.jsx";
import "./index.css";

// import $ from 'jquery';
// window.$ = $;
// window.jQuery = $;
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';


// css file
import "../src/assets/css/style.css";
import "../src/assets/css/bootstrap.min.css";
//owl crousel 
// import '../node_modules/owl.carousel/dist/owl.carousel.js'
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css';
// bootstrap js
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// jquery 
import '../node_modules/jquery/dist/jquery.js';
// animation
import '../node_modules/animate.css'
//wow
// import '../node_modules/wowjs/dist/wow.js';
// import "../src/assets/js/script.js";

import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/store.js";
import Services from "./Pages/Services/Services.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'Services',
        element: <Services />,
      },
      {
        path: 'contact',
        element: <Contact />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
