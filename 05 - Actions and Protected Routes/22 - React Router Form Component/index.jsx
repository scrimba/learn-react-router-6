import React from "react"
import ReactDOM from "react-dom/client"
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  redirect
} from "react-router-dom"

import Layout from "./Layout"
import Login from "./Login"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route
      index
      element={<h1>Home page</h1>}
    />
    <Route
      path="protected"
      element={<h1>Super secret info here</h1>}
      loader={async () => {
        const isLoggedIn = false
        if (!isLoggedIn) {
          throw redirect("/login")
        }
        return null
      }}
    />
    <Route 
      path="login" 
      element={<Login />}
    />

  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)