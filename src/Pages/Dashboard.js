import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUserData(user);
  }, []);

  if (!userData) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  const { role, name } = userData;

  const UserStatistics = () => (
    <div className="dashboard-card">
      <div className="card-header">
        <h2 className="card-title">User Statistics</h2>
        <i className="fas fa-users"></i>
      </div>
      <div className="stats-container">
        <div className="stat-item">
          <div className="stat-number">1,234</div>
          <div className="stat-label">Total Farmers</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">45</div>
          <div className="stat-label">Agricultural Experts</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">892</div>
          <div className="stat-label">Public Users</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">156</div>
          <div className="stat-label">New Users (This Month)</div>
        </div>
      </div>
    </div>
  );

  const PlatformActivity = () => (
    <div className="dashboard-card">
      <div className="card-header">
        <h2 className="card-title">Platform Activity</h2>
        <i className="fas fa-chart-line"></i>
      </div>
      <div className="stats-container">
        <div className="stat-item">
          <div className="stat-number">327</div>
          <div className="stat-label">Active Queries</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">89%</div>
          <div className="stat-label">Query Resolution Rate</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">452</div>
          <div className="stat-label">Resources Shared</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">28</div>
          <div className="stat-label">Expert Sessions Today</div>
        </div>
      </div>
    </div>
  );

  const RecentActivity = () => (
    <div className="dashboard-card recent-activity">
      <div className="card-header">
        <h2 className="card-title">Recent Activity</h2>
        <i className="fas fa-bell"></i>
      </div>
      <div className="activity-item">
        <div className="activity-icon">
          <i className="fas fa-user-plus"></i>
        </div>
        <div className="activity-details">
          <div>New Expert Registration: Dr. Ramesh Kumar</div>
          <div className="activity-time">2 hours ago</div>
        </div>
      </div>
      <div className="activity-item">
        <div className="activity-icon">
          <i className="fas fa-question-circle"></i>
        </div>
        <div className="activity-details">
          <div>Urgent Query: Pest Control in Rice Fields</div>
          <div className="activity-time">3 hours ago</div>
        </div>
      </div>
      <div className="activity-item">
        <div className="activity-icon">
          <i className="fas fa-file-alt"></i>
        </div>
        <div className="activity-details">
          <div>New Resource Added: Organic Farming Guidelines</div>
          <div className="activity-time">5 hours ago</div>
        </div>
      </div>
    </div>
  );

  const ExpertManagement = () => (
    <div className="dashboard-card">
      <div className="card-header">
        <h2 className="card-title">Expert Management</h2>
        <i className="fas fa-user-tie"></i>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Expert Name</th>
              <th>Specialization</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dr. Ramesh Kumar</td>
              <td>Pest Control</td>
              <td><span className="status-badge status-active">Active</span></td>
            </tr>
            <tr>
              <td>Dr. Priya Singh</td>
              <td>Organic Farming</td>
              <td><span className="status-badge status-active">Active</span></td>
            </tr>
            <tr>
              <td>Dr. Ahmed Khan</td>
              <td>Soil Science</td>
              <td><span className="status-badge status-pending">Pending</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const QueryManagement = () => (
    <div className="dashboard-card">
      <div className="card-header">
        <h2 className="card-title">Query Management</h2>
        <i className="fas fa-comments"></i>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Farmer</th>
              <th>Query Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shyam Patel</td>
              <td>Pest Control</td>
              <td><span className="status-badge status-active">In Progress</span></td>
            </tr>
            <tr>
              <td>Meera Devi</td>
              <td>Crop Disease</td>
              <td><span className="status-badge status-pending">Pending</span></td>
            </tr>
            <tr>
              <td>Rajesh Kumar</td>
              <td>Irrigation</td>
              <td><span className="status-badge status-active">Assigned</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderAdminDashboard = () => (
    <div className="dashboard-container">
      <UserStatistics />
      <PlatformActivity />
      <RecentActivity />
      <ExpertManagement />
      <QueryManagement />
    </div>
  );


  const renderExpertDashboard = () => (
    <div className="p-6">
      <h4 className="text-2xl font-bold mb-4">Welcome Agricultural Expert!</h4>
      <p className="mb-4">As an expert, you can offer guidance, create educational content, and support farmers.</p>
      <div className="flex gap-4">
        <Link to="/create-content" className="px-4 py-2 bg-green-600 text-white rounded">Create Content</Link>
        <Link to="/support-farmers" className="px-4 py-2 bg-green-600 text-white rounded">Support Farmers</Link>
      </div>
    </div>
  );

  const renderPublicDashboard = () => (
    <div className="p-6">
      <h4 className="text-2xl font-bold mb-4">Welcome Visitor!</h4>
      <p className="mb-4">Explore farming content, read articles, and engage with the community.</p>
      <div className="flex gap-4">
        <Link to="/about" className="px-4 py-2 bg-green-600 text-white rounded">About Us</Link>
        <Link to="/community" className="px-4 py-2 bg-green-600 text-white rounded">Join the Community</Link>
        <Link to="/contact" className="px-4 py-2 bg-green-600 text-white rounded">Contact Us</Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-6">Welcome {name}</h2>
        
        {role === 'ROLE_ADMIN' && renderAdminDashboard()}
        
        {role === 'ROLE_EXPERT' && renderExpertDashboard()}
        {role === 'ROLE_PUBLIC' && renderPublicDashboard()}
      </div>
    </div>
  );
};

export default Dashboard;