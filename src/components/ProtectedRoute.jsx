import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

function ProtectedRoute({
children,
}) {
const authContext =
useContext(AuthContext);

if (!authContext) {
return ( <Navigate
     to="/login"
     replace
   />
);
}

const { user } =
authContext;

if (!user) {
return ( <Navigate
     to="/login"
     replace
   />
);
}

return children;
}

export default ProtectedRoute;
