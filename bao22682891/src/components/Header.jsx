import React from 'react'

export const Header = () => {
  return (
    <div className='title'>
      <h2>Dashboard</h2>
      <div>
          <input type="text" placeholder='Search...'/>
          <img src="../bell.png" alt="" />
          <img src="../question.png" alt="" />
          <img src="../avatarPlaceholder.png" alt="" className='avatarPlaceholder'/>
      </div>
      
    </div>
  )
}
