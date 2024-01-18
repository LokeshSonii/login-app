import { Link } from "react-router-dom";
import "./Home.css";

function Logout() {
  return (
    <>
      <div className="container">
        <div className="home_page">
          <h1>Welcome to Your Profile!!!</h1>
          <Link to="/">
            <button>Logout</button>
          </Link>
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Logout;
