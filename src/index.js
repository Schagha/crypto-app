import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './app/store';
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Router>
//       <App />
//     </Router>
//   </React.StrictMode>
);


// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Root from "./routes/root";

// import App from './App';
// import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//   },
//   {
//     path: "/",
//     element: <App />
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render([
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>]
// );




