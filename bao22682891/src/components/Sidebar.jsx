import React from 'react'
import '../Page/Dashboard.css'

export const Sidebar = () => {
  return (
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
            {/* <div className='bottom_sidebar'>
                <img src="../public/randomPicture.png" alt="" />
                <div>
                    <h1>V2.0 is available</h1>
                    <button>
                        Try now
                    </button>
                </div>
            </div> */}
        </div>
  )
}
