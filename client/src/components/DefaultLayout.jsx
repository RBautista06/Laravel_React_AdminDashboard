import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";


/// this layout is for authenticated user
const DefaultLayout = () => {
  const { user, token } = useStateContext();

  if (!token) {
    return <Navigate to="/login" />;
  }

  const onLogout = (e) => {
    e.preventDetfault();
  };

  return (
    <div id="defaultLayout">
      <aside>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/users">Users</Link>
      </aside>
      <div className="content">
        <header>
          <div>Header</div>
          <div>
            {user.name}
            <button onClick={onLogout} className="btn-logout">
              Logout
            </button>
          </div>
        </header>
        <main>

          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
