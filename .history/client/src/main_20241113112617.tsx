
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error";
import Login from "./routes/login";
import BookPage from "./sql/sqlpages/BookPage.jsx"; 
import Add from "./sql/sqlpages/Add.jsx";
import Upda from "./sql/sqlpages/Add.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/bookpage",  // Directly adding the /bookpage route here
    element: <BookPage />,  // Renders the BookPage component when visiting /bookpage
  },
  {
    path: "/add",  
    element: <Add />, 
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
