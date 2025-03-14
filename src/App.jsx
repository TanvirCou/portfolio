import { ToastContainer } from "react-toastify"
import Contact from "./components/Contact/Contact"
import Intro from "./components/Intro/Intro"
import Navbar from "./components/Navbar/Navbar"
import Portfolio from "./components/Portfolio/Portfolio"
import Skills from "./components/Skills/Skills"
import Works from "./components/Works/Works"

function App() {

  return (
    <div className="snap-y snap-mandatory scroll-smooth h-screen w-screen overflow-x-hidden">
      <Navbar></Navbar>
      <Intro></Intro>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Works></Works>
      <Contact></Contact>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default App
