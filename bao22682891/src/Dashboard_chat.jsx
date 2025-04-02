import "./Dashboard_chat.css";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">Sidebar</div>

      {/* Main Content */}
      <div className="dashboard-content">
        <div>
           <h1 className="dashboard-title">Dashboard</h1>
            <input></input> 
        </div>
        
        
        {/* Overview Section */}
        <div className="overview-section">
          <div className="overview-card">
            <h2 className="overview-title">Turnover</h2>
            <p className="overview-value">$92,405</p>
            <p className="overview-change">▲ 5.39% period of change</p>
          </div>
          <div className="overview-card">
            <h2 className="overview-title">Profit</h2>
            <p className="overview-value">$32,218</p>
            <p className="overview-change">▲ 5.39% period of change</p>
          </div>
          <div className="overview-card">
            <h2 className="overview-title">New Customers</h2>
            <p className="overview-value">298</p>
            <p className="overview-change">▲ 6.84% period of change</p>
          </div>
        </div>
        
        <div>
            <h2 className="report-title">Detailed Report</h2>
            <div className="report-buttons">
                <button></button>
                <button></button>
            </div>
        </div>

        {/* Detailed Report Section */}
        <div className="detailed-report">
          <table className="report-table">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Company</th>
                <th>Order Value</th>
                <th>Order Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="status new">New</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="status new">New</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="status in-progress">In-progress</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="status in-progress">In-progress</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="status completed">Completed</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="status completed">Completed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}