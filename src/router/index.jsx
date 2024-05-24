import {createBrowserRouter} from "react-router-dom";
import Login from '@/pages/demo04/Login.jsx'
import Article from '@/pages/demo04/Article.jsx';
import Layout from "@/pages/demo04/Layout/index.jsx";
import Board from "@/pages/demo04/Board.jsx";
import About from "@/pages/demo04/About.jsx";
import NotFound from "@/pages/demo04/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        // 设置为默认的二级路由, 一级路由访问的时候, 它能得到渲染
        index: true,
        element: <Board/>
      },
      {
        path:'/about',
        element: <About/>
      }
    ]
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/article/:id/:name',
    element: <Article/>
  },
  {
    path: '*',
    element: <NotFound/>
  }
])

export default router
