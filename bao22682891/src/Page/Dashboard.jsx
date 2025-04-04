import React from 'react'
import './Dashboard.css'

export default function Dashboard() {
    return (
      <div className='container'>
        <div className='sidebar'>
            <img src="../public/logo.png" alt="" />
            <nav className='head_sidebar'>
                <div>
                    <p>Dashboard</p>
                </div>
                <div>
                    <p>Project</p>
                </div>
                <div>
                    <p>Teams</p>
                </div>
                <div>
                    <p>Analytics</p>
                </div>
                <div>
                    <p>Messages</p>
                </div>
                <div>
                    <p>Integrations</p>
                </div>
            </nav>
            <div className='bottom_sidebar'>
                <img src="../public/randomPicture.png" alt="" />
                <div>
                    <h1>V2.0 is available</h1>
                    <button>
                        Try now
                    </button>
                </div>
            </div>
        </div>

        <div className='dashboard_content'>
            <div className='title'>
                <h2>Dashboard</h2>
                <div>
                    <input type="text" />
                </div>
            </div>
            <h3>
                Overview
            </h3>
            <div className='overview_section'>
                <div className='overview_card'>
                    hello
                </div>
                <div className='overview_card'>
                    hello
                </div>
                <div className='overview_card'>
                    hello
                </div>
            </div>
            <div className='detail_report'>
                <h3>
                    Detailed report
                </h3>
                <div>
                    <button>
                        Import
                    </button>
                    <button>
                        Export
                    </button>
                </div>
            </div>
        </div>
        
      </div>
    );
  }
