import './App.css'
import { useRoutes, NavLink } from "react-router-dom"
import routes from "./routes/routes"
// import {url} from './utils';

function App(){
  return(
    <>
     
      {useRoutes(routes)}
    </>
  )
}
export default App