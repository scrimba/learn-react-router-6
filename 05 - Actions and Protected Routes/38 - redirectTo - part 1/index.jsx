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
import Login, { action as loginAction } from "./Login"
import Protected, { loader as protectedLoader } from "./Protected"
import { requireAuth } from "./requireAuth"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route
      index
      element={<h1>Home page</h1>}
    />
    <Route
      path="protected"
      element={<Protected />}
      loader={protectedLoader}
    >
      <Route 
        path="nested" 
        element={<h1>Nested protected route</h1>} 
        loader={async () => {
          await requireAuth()
          return null
        }}
      />
    </Route>
    <Route
      path="login"
      element={<Login />}
      action={loginAction}
    />

  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)