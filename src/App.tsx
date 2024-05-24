import { Route, Routes } from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles"
import Layout from "./components/Layout"
import FrontalPage from "./pages/FrontalPage"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<FrontalPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element="Page is not found" />
        </Routes>
      </Layout>
    </>
  )
}

export default App
