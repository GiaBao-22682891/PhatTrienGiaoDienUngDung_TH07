import React, { useState, useEffect, useRef } from 'react'
import './Dashboard.css'
import {addData, getData} from '../data/data'
import { CustomerList } from '../components/CustomerList';

export default function Dashboard() {
    const [customerData, setData] = useState([]);
    const [reload, setReload] = useState(false);
    const [showAddForm, setShowAddForm] = useState(false);
    const nameRef = useRef(null);
    const companyRef = useRef(null);
    const orderValueRef = useRef(null);
    const dateRef = useRef(null);
    const statusRef = useRef(null);

    useEffect (() => {
        const fetchData = async () => {
            setData(await getData())
            console.log("Rerendering")
        }
        fetchData();
    }, [reload])

    const handleAdd = async (data) => {
        const {message} = await addData(data)

        if (message == "ADDED") {
            setReload(reload => !reload)
        }
    }

    const onSubmit = () => {
        if (nameRef.current && companyRef.current &&
            orderValueRef.current && dateRef.current &&
            statusRef.current
        ) {
            const customer = {
                Fullname: nameRef.current.value,
                Company: companyRef.current.value,
                orderValue: orderValueRef.current.value,
                orderDate: dateRef.current.value,
                status: statusRef.current.value
            }

            handleAdd(customer)
        }

        
    }



    console.log(customerData)

    return (
      <div className='dashboard_content'>
        <h3>
            <svg fill='currentColor' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="dashboard" class="icon glyph" className='overviewIMG'>
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"><rect x="2" y="2" width="9" height="11" rx="2"></rect><rect x="13" y="2" width="9" height="7" rx="2"></rect>
            <rect x="2" y="15" width="9" height="7" rx="2"></rect><rect x="13" y="11" width="9" height="11" rx="2"></rect></g>
            </svg>
            Overview
        </h3>
        <div className='overview_section'>
            <div className='overview_card turnover'>
                <strong style={{fontSize: '20px'}}>Turnover</strong>
                <h1>$92,405</h1>
                <strong style={{color: 'green'}}>▲ 5.39% </strong>
                 period of change
            </div>
            <div className='overview_card profit'>
                <strong style={{fontSize: '20px'}}>Profit</strong>
                <h1>$32,218</h1>
                <strong style={{color: 'green'}}>▲ 5.39% </strong>
                 period of change

            </div>
            <div className='overview_card profit'>
                <strong style={{fontSize: '20px'}}>New customer</strong>
                <h1>298</h1>
                <strong style={{color: 'green'}}>▲ 5.39% </strong>
                 period of change

            </div>
        </div>
        <div className='detail_report'>
            <h3>
                <svg fill='currentColor' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='overviewIMG'>
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"><path d="M16,2l4,4H16ZM14,8h6V21a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V3A1,1,0,0,1,5,2h9ZM7,6A1,1,0,0,0,8,7h3a1,1,0,0,0,0-2H8A1,1,0,0,0,7,6ZM17,18a1,1,0,0,0-1-1H8a1,1,0,0,0,0,2h8A1,1,0,0,0,17,18ZM8,13a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z">
                </path></g></svg>
                Detailed report
            </h3>
            <div>
                <button onClick={() => setShowAddForm(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6" className='reportButtonIMG'>
                        <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
                    </svg>
                    Add customer
                </button>
                {showAddForm && (
                    <div className="modal-overlay">
                        <div className="modal">
                        <h2>Add New Customer</h2>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            // Handle form submission here
                            setShowAddForm(false); // Close after submit
                        }}>
                            <input type="text" placeholder="Full Name" required ref={nameRef} />
                            <input type="text" placeholder="Company" required ref={companyRef}/>
                            <input type="number" placeholder="Order Value" required ref={orderValueRef}/>
                            <input type="date" placeholder="Order Date" required ref={dateRef}/>
                            <input type="text" placeholder="Status" required ref={statusRef}/>

                            <div className="modal-buttons">
                            <button type="submit" onClick={() => onSubmit()}>Save</button>
                            <button type="button" onClick={() => setShowAddForm(false)}>Cancel</button>
                            </div>
                        </form>
                        </div>
                    </div>
                )}

                <button>
                    <svg fill='currentColor' viewBox="0 0 35 35" data-name="Layer 2" id="bdd05811-e15d-428c-bb53-8661459f9307" xmlns="http://www.w3.org/2000/svg" className='reportButtonIMG'>
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                    <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></g></svg>
                    Import
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" className='reportButtonIMG'>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                    </svg>
                    Export
                </button>
            </div>
        </div>

        <div className="detailed-report">
            <table className="report-table">
                <thead>
                    <tr className='fix_align'>
                        <th>Customer Name</th>
                        <th>Company</th>
                        <th>Order Value</th>
                        <th>Order Date</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {customerData.map((x) => (
                        <CustomerList customer={x} key={x.id} onReload={() => setReload(prev => !prev)}/>
                    ))}
                </tbody>
            </table>
        </div>
        
      </div>

      
    );

    
  }
