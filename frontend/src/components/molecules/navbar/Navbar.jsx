import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "@/redux/Slices/AuthSlice";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onLogout() {
    dispatch(logout()); 
    navigate('/login'); 
  }
  const {isLoggedIn, username} = useSelector((state) => state.auth);



  return (
    <>
      <div className="w-screen  navbar bg-neutral px-10 ">
        <div className="flex-1">
          <Link className="btn btn-success-contrast normal-case text-xl">BookShelf</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {isLoggedIn && <li> <Link>Shelfs</Link> </li>}
            {isLoggedIn && <li><Link>{username}</Link></li>}
            <li>
              <details>
                <summary>Options</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <button className="btn btn-ghost normal-case" onClick={onLogout}>Logout</button>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
