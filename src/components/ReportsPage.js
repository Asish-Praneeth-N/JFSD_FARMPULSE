import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ReportsPage.css";

const reportsData = [
  {
    id: 1,
    reportName: "Sales Report",
    date: "December 2024",
    description: "Details of monthly sales of agricultural products.",
    fileLink: "/reports/sales-dec-2024.pdf",
    category: "Sales",
    size: "2.5 MB",
    lastUpdated: "2024-12-15"
  },
  {
    id: 2,
    reportName: "Crop Yield Report",
    date: "November 2024",
    description: "Insights into the yield of different crops.",
    fileLink: "/reports/crop-yield-nov-2024.pdf",
    category: "Production",
    size: "1.8 MB",
    lastUpdated: "2024-11-30"
  },
  {
    id: 3,
    reportName: "Market Trends Report",
    date: "October 2024",
    description: "Analysis of market trends and pricing.",
    fileLink: "/reports/market-trends-oct-2024.pdf",
    category: "Market Analysis",
    size: "3.2 MB",
    lastUpdated: "2024-10-25"
  },
  // Add more reports as needed
];

const ReportsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Sales", "Production", "Market Analysis"];

  const filteredReports = reportsData.filter(report => {
    const matchesSearch = report.reportName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || report.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDownload = (report) => {
    // Add download logic here
    console.log(`Downloading ${report.reportName}`);
  };

  return (
    <div className="reports-page">
      <div className="reports-header">
        <h1 className="reports-title">Agricultural Reports</h1>
        <div className="reports-controls">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search reports..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="category-filter">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="category-select"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="reports-container">
        <table className="reports-table">
          <thead>
            <tr>
              <th>Report Name</th>
              <th>Category</th>
              <th>Date</th>
              <th>Description</th>
              <th>Size</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.map((report) => (
              <tr key={report.id}>
                <td className="report-name">{report.reportName}</td>
                <td className="report-category">
                  <span className={`category-badge ${report.category.toLowerCase().replace(' ', '-')}`}>
                    {report.category}
                  </span>
                </td>
                <td>{report.date}</td>
                <td>{report.description}</td>
                <td>{report.size}</td>
                <td className="action-buttons">
                  <button
                    className="download-button"
                    onClick={() => handleDownload(report)}
                  >
                    Download
                  </button>
                  <Link
                    to={`/report/${report.id}`}
                    className="view-button"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredReports.length === 0 && (
          <div className="no-results">
            <p>No reports found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportsPage;