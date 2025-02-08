import React from "react";
import { useAuthStore } from "../store/authStore.ts";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className="container my-5">
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin dashboard!</p>
      <button onClick={handleLogout} className="btn btn-danger">
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard;
