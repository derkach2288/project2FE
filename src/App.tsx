import { Route, Routes } from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles"
import Layout from "./components/Layout"

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Routes>
          {/* <Route path="/" element={<FrontalPage />} /> */}
        </Routes>
      </Layout>
    </>
  )
}

export default App
