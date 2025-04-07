import React, { useState, useEffect } from 'react'
import './Dashboard.css'
import {getData} from '../data/data'
import { CustomerList } from '../components/CustomerList';

export default function Dashboard() {
    const [customerData, setData] = useState([]);
    const [reload, setReload] = useState(false)

    useEffect (() => {
        const fetchData = async () => {
            setData(await getData())
            console.log("Rerendering")
        }
        fetchData();
    }, [reload])


    console.log(customerData)

    return (
      <div>
        <h3>
            Overview
        </h3>
        <div className='overview_section'>
            <div className='overview_card'>
                <strong>Turnover</strong>

            </div>
            <div className='overview_card'>
                <strong>Profit</strong>

            </div>
            <div className='overview_card'>
                <strong>New customer</strong>

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
                        <CustomerList customer={x} key={x.id}/>
                    ))}
                </tbody>
            </table>
        </div>
        
      </div>
    );
  }
