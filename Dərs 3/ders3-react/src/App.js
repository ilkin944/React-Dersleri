import Header from "./components/Header"
import SiteProvider from "./context/SiteContext"

function App() {
  return (
    <SiteProvider>
      <Header />
    </SiteProvider>
  )
}
export default App