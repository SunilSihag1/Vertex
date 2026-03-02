import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";


function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App