import React from "react";
// import { Route, Navigate } from "react-router-dom";
// import { useAuth } from "../../contexts/AuthContext";

// export default function PrivateRoute({ element: Element, ...rest }) {
//   const { currentUser } = useAuth();

//   return (
//     <Route
//       {...rest}
//       element={currentUser ? <Element /> : <Navigate to="/login" replace={true} />}
//     />
//   );
// }


import { Navigate } from "react-router-dom";

// Context API
import { useAuth } from "../../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { loading, currentUser } = useAuth();

  if (loading) {
    return <span>....</span>;
  }

  if (currentUser) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default PrivateRoute;