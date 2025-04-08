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
      <div>
        <h3>
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
                Detailed report
            </h3>
            <div>
                <button onClick={() => setShowAddForm(true)}>
                    {/* <img src="" alt="" /> */}
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
                    Import
                </button>
                <button>
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
