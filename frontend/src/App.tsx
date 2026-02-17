import About from "./components/Pages/About";
import Projects from "./components/Pages/Projects";
import Home from "./components/ui/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/projects",
        element: <Projects />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;