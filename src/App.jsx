import Navbar from "./components/Navbar"
import Home from "./pages/Home"

function App() {
  return (
    <div
      style={{
        scrollBehavior: "smooth"
      }}
    >
      <Navbar />
      <Home />
    </div>
  )
}

export default App