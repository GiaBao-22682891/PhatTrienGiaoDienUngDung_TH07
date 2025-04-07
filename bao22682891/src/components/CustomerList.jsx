import React from 'react'
import '../Page/Dashboard.css'

export const CustomerList = ({customer}) => {
  return (
      <tr>
        <td className='profilename'>
          <img src={customer.avatar} alt="" />
          <p> {customer.Fullname} </p>
        </td> 
        <td>
          <p> {customer.Company} </p>
        </td>
        <td>
          <p> {customer.orderValue} </p>
        </td>
        <td>
          <p> {customer.orderDate} </p>
        </td>
        <td>
          <p> {customer.status} </p>
        </td>
        <td>
          <img src="../pen.png" alt="" className='editbutton'/>
        </td>
      </tr>
        
  )
}

// {
//   "Fullname": "Kristina Little-Sawayn",
//   "Company": "Mills, Jacobs and Huel",
//   "avatar": "https://avatars.githubusercontent.com/u/19682257",
//   "orderValue": "577.83",
//   "orderDate": "2024-11-27T05:02:28.191Z",
//   "status": "status 1",
//   "id": "1"
// },