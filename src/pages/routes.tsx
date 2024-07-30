import { createBrowserRouter } from 'react-router-dom'
import Root from './Root'
import Home from './Home'
import About from './About'
import Projects from './Projects'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
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
    ],
  }
])

export default router;