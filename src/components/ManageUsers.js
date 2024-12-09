import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ManageUsers.css";
import config from "../config";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${config.baseURL}/api/admin/get-all-users`);
      // Ensure to log the response structure and access the data accordingly
      setUsers(response.data.ourUsersList || []); // Adjust this according to the actual API response structure
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  const handleDelete = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`${config.baseURL}/api/admin/delete/${userId}`);
        fetchUsers();
      } catch (error) {
        console.error("Error deleting user", error);
      }
    }
  };

  const handleEdit = (user) => {
    setEditUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      role: user.role,
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editUser) {
        await axios.put(`${config.baseURL}/api/admin/update/${editUser.id}`, formData);
      } else {
        // Handle Add User if needed
        await axios.post(`${config.baseURL}/api/auth/register`, formData); // Assuming you have an endpoint to add users
      }
      fetchUsers();
      setEditUser(null);
      setFormData({ name: "", email: "", role: "" });
    } catch (error) {
      console.error("Error submitting user data", error);
    }
  };

  return (
    <div className="manage-users">
      <h2>Manage Users</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editUser && (
        <form className="edit-form" onSubmit={handleSubmit}>
          <h3>Edit User</h3>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Role:
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Update</button>
          <button type="button" onClick={() => setEditUser(null)}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default ManageUsers;
