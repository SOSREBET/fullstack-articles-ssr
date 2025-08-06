import { type ReactNode, lazy, useEffect, useState } from "react"
import { Routes, Route } from "react-router"

const Home = lazy(() => import("../pages/Home"))
const Articles = lazy(() => import("../pages/Articles"))
const DetailedArticle = lazy(() => import("../pages/DetailedArticle"))
const NotFound = lazy(() => import("../pages/NotFound"))

type RoutesType = 'home' | 'articles' | 'detailedArticle'

interface IRoute {
  path: string
  element: ReactNode
}

export const routes: Record<RoutesType, IRoute> = {
  home: { path: '/', element: <Home /> },
  articles: { path: '/articles/', element: <Articles /> },
  detailedArticle: { path: '/article/:id/', element: <DetailedArticle /> }
}


const Router = () => {
  const [routesArray, setRoutesArray] = useState<IRoute[]>([])

  useEffect(() => {
    setRoutesArray(Object.values(routes))
  }, [])

  return (
    <Routes>
      {routesArray.map(route => <Route key={route.path} path={route.path} element={route.element} />)}
      <Route path="*" element={routesArray.length > 0 ? <NotFound /> : <></>} />
    </Routes>
  )
}

export default Router