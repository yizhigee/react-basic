import {createBrowserRouter} from "react-router-dom";
import Login from '@/pages/demo04/Login.jsx'
import Article from '@/pages/demo04/Article.jsx';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/article',
    element: <Article/>
  }
])

export default router
