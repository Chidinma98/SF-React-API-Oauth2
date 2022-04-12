import { Link, useNavigate } from "react-router-dom";
import Leads from './Leads.js'
import Info from './info.js'

export default function App() {
  let navigate = useNavigate()

  return (
   <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/lead">Leads</Link> 
        <Link to="/info"> Info</Link>
        <button onClick = {()=>{ navigate("/info")}} >Go to Info</button>
       
      </nav>
    </div>
  );
}