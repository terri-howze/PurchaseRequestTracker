import React, { useState } from 'react';
import Popup from './Popup';
import '../css/Pagination.css'
import Dashboard from './Dashboard';
import { bouncy } from 'ldrs'
import { useStateStore } from '../Store';
bouncy.register()
const Pagination = ({ data, itemsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the index of the first and last item to be displayed on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const isDashboardMounted = useStateStore((state) => state.isDashboardMounted)
    const setPurchaseRequest = useStateStore((state) => state.setPurchaseRequest)
    const purchaseRequest = useStateStore((state) => state.purchaseRequest)
    const Loading = useStateStore((state) => state.loading)
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
        setPurchaseRequest({
            ...purchaseRequest,
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
        
        // setPurchaseRequest([...i])
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
                        < tbody >
                            <tr className='table_content_flex'>
                                <td headers='th1' onClick={() => handleSubmit(i)}>{i.prNumber}</td>
                                <td headers='th2'>{i.dep_num}</td>
                                <td headers='th3'>{i.purchaseRequestAmount.slice(0, 10)} </td>
                                <td headers='th4'>{i.datePurchaseRequest.slice(0, 10)}</td>
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
                {
                    Loading ? <div className='bouncy_div'><l-bouncy
                        size="150"
                        speed="1.75"
                        color="black"
                    ></l-bouncy></div>
                        : ""
                }
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
                    {trigger ? <Popup trigger={trigger} setTrigger={setTrigger}/>
                        : ""
                    }
                </div>
            </div >
        </>
    );
};

export default Pagination;