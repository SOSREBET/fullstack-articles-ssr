import { type ReactNode, lazy, useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"

const Home = lazy(() => import ("../pages/Home"))
const Articles = lazy(() => import ("../pages/Articles"))
const NotFound = lazy(() => import ("../pages/NotFound"))

interface IRoute {
  path: string
  element: ReactNode
}

export const routes: Record<string, IRoute> = {
  home: { path: '/', element: <Home /> },  
  articles: { path: '/articles/', element: <Articles /> },  
}


const Router = () => {
  const [routesArray, setRoutesArray] = useState<IRoute[]>([])

  useEffect(() => {
    const newRoutes: IRoute[] = []
    for (let key in routes) {
      newRoutes.push(routes[key])
    }
    setRoutesArray(newRoutes)
  }, [])

  return (
    <Routes>
      { routesArray.map(route => <Route key={ route.path } path={ route.path } element={ route.element } />) }
      <Route path="*" element={ routesArray.length > 0 ? <NotFound /> : <></> } />
    </Routes>
  )
}

export default Router