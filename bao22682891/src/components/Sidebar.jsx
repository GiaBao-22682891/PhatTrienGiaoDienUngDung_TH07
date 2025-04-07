import React from 'react'
import '../Page/Dashboard.css'
import { Link } from 'react-router-dom'


export const Sidebar = () => {
  return (
    <div className='sidebar'>
            <img src="../public/logo.png" alt="" />
            <nav className='head_sidebar'>
                <div>
                    <Link to={'/'}> Dashboard </Link>
                </div>
                <div>
                    <Link to={'/project'}>Projects</Link>
                </div>
                <div>
                    <Link to={'/team'}>Teams</Link>
                </div>
                <div>
                    <Link to={'/analytic'}>Analytics</Link>
                </div>
                <div>
                    <Link to={'/message'}>Messages</Link>
                </div>
                <div>
                    <Link to={'/integration'}>Integrations</Link>
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
