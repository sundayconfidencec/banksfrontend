import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children}) {
    const user = localStorage.getItem("user");
	if (!user) {
		return <Navigate to="/login" replace="true" />;
	}
	return children;
}

export default ProtectedRoute;