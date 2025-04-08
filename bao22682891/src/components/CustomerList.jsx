import React, { useRef, useState } from 'react'
import '../Page/Dashboard.css'
import { updateData } from '../data/data';

export const CustomerList = ({customer, onReload}) => {
  const [showUpdateForm, setForm] = useState(false);
  const [customerData, setCustomerData] = useState({
    Fullname: customer.Fullname,
    Company: customer.Company,
    orderValue: customer.orderValue,
    orderDate: customer.orderDate.slice(0, 10), // cắt đúng định dạng yyyy-mm-dd
    status: customer.status,
  });

  const handleUpdate = async (customer, customerData) => {
    const {message} = await updateData(customer.id, customerData) /*message nhớ phải có {} để lấy value ra khỏi json*/
      if (message == "UPDATED") {  /*nếu ko bỏ vô {message} thì ta vẫn có thể làm cách message === "UPDATED"*/
        onReload();
      }
  }
  
  const onSubmitUpdate = (customer) => {
      handleUpdate (customer, customerData)
      setForm(false);
    }


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
          <img src="../pen.png" alt="" className='editbutton' onClick={() => setForm(true)} />
          {showUpdateForm && (
              <div className="modal-overlay">
              <div className="modal">
              <h2>Update customer</h2>
              <form onSubmit={(e) => {
                  e.preventDefault();
                  // Handle form submission here
                  setForm(false); // Close after submit
              }}>
                  <input type="text" value={customerData.Fullname} onChange={e => setCustomerData({...customerData, Fullname: e.target.value})} />
                  <input type="text" value={customerData.Company} onChange={e => setCustomerData({...customerData, Company: e.target.value})} />
                  <input type="number" value={customerData.orderValue} onChange={e => setCustomerData({...customerData, orderValue: e.target.value})} />
                  <input type="date" value={customerData.orderDate} onChange={e => setCustomerData({...customerData, orderDate: e.target.value})} />
                  <input type="text" value={customerData.status} onChange={e => setCustomerData({...customerData, status: e.target.value})} />


                  <div className="modal-buttons">
                  <button type="button" onClick={() => onSubmitUpdate(customer)}>Save</button>
                  <button type="button" onClick={() => setForm(false)}>Cancel</button>
                  </div>
              </form>
              </div>
              </div>
          )}
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