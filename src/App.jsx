import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
// import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router";
import About from "./components/About";
import Home from "./components/Home";

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
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
