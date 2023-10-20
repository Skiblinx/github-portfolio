import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NavBar from "./component/layouts/NavBar"
import Footer from "./component/layouts/Footer"

const App = () => {


  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <NavBar />

        <main>
          content
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App