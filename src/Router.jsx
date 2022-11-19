import { Route, Routes } from "react-router-dom"
import { Dashboard } from "./pages/Dashboard/dashboard"

export function Router() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}