import { Navigate, useNavigate } from "react-router-dom";
function Notfound() {

let nav = useNavigate();

    return ( 

<>
<h4>404 page not found</h4>

<button className="btn btn-primary" onClick={() => nav("/")}>Go Home</button>
<button className="btn btn-warning" onClick={() => nav(-1)} >Go Back</button>

</>

     );
}

export default Notfound;