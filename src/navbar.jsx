import { Link } from "react-router-dom";
let navbar=()=>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" type="none">Rental Moives</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Rental">Rental</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" aria-disabled="true" to="/login">login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </div>
    )
}
export default navbar;