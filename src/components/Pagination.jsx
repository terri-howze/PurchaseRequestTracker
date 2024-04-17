import React, { useState } from 'react';
import Popup from './Popup';
import '../css/Pagination.css'
import Dashboard from './Dashboard';
import { useStateStore } from '../Store';
const Pagination = ({ data, itemsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the index of the first and last item to be displayed on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const isDashboardMounted = useStateStore((state) => state.isDashboardMounted)
    const [trigger, setTrigger] = useState(false)
    const [divdata, getData] = useState({
        cardNumber: 0,
        cardType: "",
        createdAt: "",
        datePurchaseRequest: "",
        dep_num: 0,
        id: 0,
        poNumber: "",
        prNumber: "",
        purchaseRequestAmount: 0,
        updatedAt: "",
        chrisApproval: false,
        jasonApproval: false,
        tonyaApproval: false

    })

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const handleSubmit = (i) => {
        console.log(i)
        getData({
            ...divdata,
            cardNumber: i.cardNumber,
            cardType: i.cardType,
            createdAt: i.createdAt,
            datePurchaseRequest: i.datePurchaseRequest,
            dep_num: i.dep_num,
            id: i.id,
            poNumber: i.poNumber,
            prNumber: i.prNumber,
            purchaseRequestAmount: i.purchaseRequestAmount,
            updatedAt: i.updatedAt,
            chrisApproval: i.chrisApproval,
            jasonApproval: i.jasonApproval,
            tonyaApproval: i.tonyaApproval
        })
        setTrigger(true)
    }
    return (
        <>
        
            <div className='pagination_div'>
            {isDashboardMounted ? (
            <Dashboard />
             ) : (
             ""
                )}
                {/* Render the current page's items */}
                <table className='div_table'>
                    <thead>
                    <tr className='table_header_flex'>
                        <th id='th1'>PR Number</th>
                        <th id='th2'>Department</th>
                        <th id='th3'>PR Amount</th>
                        <th id='th4'>Date Created</th>
                        <th id='th5'>Last Updated</th>
                        <th id='th6'>Status</th>
                        <th id='th7'>Po Number</th>
                       
                    </tr>
                    
                    </thead>
                    {currentItems.map(i => (
                        //<div key={i.id} className='records_div' onClick={() => handleSubmit(i)}>PR Number:{i.prNumber}</div>
                        <tbody>
                        <tr className='table_content_flex'>
                            <td headers='th1' onClick={() => handleSubmit(i)}>{i.prNumber}</td>
                            <td headers='th2'>{i.dep_num}</td>
                            <td headers='th3'>{i.purchaseRequestAmount} </td>
                            <td headers='th4'>{i.datePurchaseRequest}</td>
                            <td headers='th5'>{i.updatedAt}</td>
                            {i.tonyaApproval ?
                                <td headers='th6'><div className='approve_box'>Approved</div></td>
                                :
                                <td headers='th6'><div className='pending_box'>Pending</div></td>
                            }
                            <td headers='th7'>{i.poNumber}</td>
                        </tr>
                        </tbody>

                    ))}
                    
                </table>
                {/* Pagination buttons */}
                <div className='page_buttons'>
                    {currentPage > 1 && (
                        <button onClick={() => paginate(currentPage - 1)}>Previous</button>
                    )}

                    {currentItems.length === itemsPerPage && (
                        <button onClick={() => paginate(currentPage + 1)}>Next</button>
                    )}
                </div>
                <div>
                    {trigger ? <Popup trigger={trigger} setTrigger={setTrigger} data={divdata} />
                        : ""
                    }
                </div>
            </div>
        </>
    );
};

export default Pagination;