import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"
import { Suspense } from "react"

import logo from '../logo.svg'
import { routes } from "./routes"


type Props = {}

export const Navigation = (props: Props) => {

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="React Logo" />
                <ul>
                    {
                        routes.map(({to, name}) =>
                            (
                                <li key={to}>
                                    <NavLink to={to} className={({isActive}) => isActive ? 'nav-active': ''}>{name}</NavLink>
                                </li>
                            )
                        )
                    }
                </ul>
            </nav>

            <Routes>
                {routes.map(({path, Component}) => {
                    return (
                        <Route key={path} path={path} element={<Component/>} />
                    )
                })}
                <Route path="/*" element={ <Navigate to={routes[0].to} replace /> }/>
            </Routes>
        </div>
    </BrowserRouter>
    </Suspense>
  )
}