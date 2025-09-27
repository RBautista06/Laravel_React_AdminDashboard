import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

// this layout is for not authenticated user
const GuestLayout = () => {
  const { token } = useStateContext();

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <div>

          <Outlet />


    </div>
  );
};

export default GuestLayout;
