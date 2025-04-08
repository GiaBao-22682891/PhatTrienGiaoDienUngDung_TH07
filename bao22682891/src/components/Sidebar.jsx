import React from 'react'
import '../Page/Dashboard.css'
import { Link } from 'react-router-dom'


export const Sidebar = () => {
  return (
    <div className='sidebar'>
            <img src="../public/logo.png" alt="" />
            <ul className='head_sidebar'>
              <Link to={'/'} style={{textDecoration: 'none'}}> <li>Dashboard</li> </Link>
              <Link to={'/project'} style={{textDecoration: 'none'}}> <li>Projects</li> </Link>
              <Link to={'/team'} style={{textDecoration: 'none'}}> <li>Teams</li> </Link>
              <Link to={'/analytic'} style={{textDecoration: 'none'}}> <li>Analytics</li> </Link>
              <Link to={'/message'} style={{textDecoration: 'none'}}> <li>Messages</li> </Link>
              <Link to={'/integration'} style={{textDecoration: 'none'}}> <li>Integrations</li> </Link>
            </ul>
            
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
