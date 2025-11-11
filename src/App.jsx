import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import "./App.css";
// import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router";
import About from "./components/About";
import Home from "./components/Home";
import Layout from "./Layout";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// You can put this in a Component and then just import it here aswell
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true, // can only have one,its the home
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
