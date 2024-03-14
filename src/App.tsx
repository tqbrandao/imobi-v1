import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Buy from "./pages/Buy"
import Rent from "./pages/Rent"
import About from "./pages/About"
import Contact from "./pages/Contact"
import PageNotFound from "./pages/PageNotFound"
import AppLayout from "./components/ui/AppLayout"
import { ThemeProvider } from "./components/theme-provider"

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="buy" element={<Buy />} />
            <Route path="rent" element={<Rent />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
