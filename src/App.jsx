import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/404-NotFound"
import NavBar from "./component/layouts/NavBar"
import Footer from "./component/layouts/Footer"
import Alert from "./component/layouts/Alert"

import { GithubProvider } from "./context/github/GithubContext"
import { AlertProvider } from "./context/alert/AlertContext"
import User from "./pages/User"
import ErrorBoundary from "./component/ErrorBoundary"
// import ErrorTest from './pages/ErrorTest'

const App = () => {


  return (
    <ErrorBoundary>
      <GithubProvider>
        <AlertProvider>
          <Router>
            <div className="flex flex-col justify-between h-screen">
              <NavBar />

              <main className="container mx-auto px3 pb-12">
                <Alert />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  {/*} <Route path="/errorTest" element={<ErrorTest />} />*/}
                  <Route path="/user/:login" element={<User />} />
                  <Route path="/notfound" element={<NotFound />} />
                  <Route path="/*" element={<NotFound />} />
                </Routes>
              </main>

              <Footer />
            </div>
          </Router>
        </AlertProvider>
      </GithubProvider>
    </ErrorBoundary>
  )
}

export default App