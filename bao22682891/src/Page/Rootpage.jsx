import React from 'react'
import {Header} from '../components/Header'
import {Sidebar} from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import './Dashboard.css'

export const Rootpage = () => {
  return (
    <div className='container'>
        <div className='sidebar'>
            <Sidebar></Sidebar>
        </div>
        <div className='dashboard_content'>
            <div>
                <Header></Header>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
        
    </div>
  )
}
