import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/404-NotFound"
import NavBar from "./component/layouts/NavBar"
import Footer from "./component/layouts/Footer"

const App = () => {


  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <NavBar />

        <main className="container mx-auto px3 pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App