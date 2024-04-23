import React, { useState } from 'react';
import axios from 'axios';
import Popup from './Popup';
import '../css/Pagination.css'
import Dashboard from './Dashboard';
import { bouncy } from 'ldrs'
import { useStateStore } from '../Store';
bouncy.register()
const Pagination = () => {
    const [dropdown, setdropdown] = useState(false)
    const departmentState = useStateStore((state) => state.division)
    const divresultsarr = useStateStore((state) => state.divresultsarr)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6
    // Calculate the index of the first and last item to be displayed on the current page
    const indexOfLastItem = currentPage * 6;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = divresultsarr.slice(indexOfFirstItem, indexOfLastItem);
    const isDashboardMounted = useStateStore((state) => state.isDashboardMounted)
    const setPurchaseRequest = useStateStore((state) => state.setPurchaseRequest)
    const purchaseRequest = useStateStore((state) => state.purchaseRequest)
    const Loading = useStateStore((state) => state.loading)
    const triggerState = useStateStore((state) => state.triggerState)
    const flagTriggerTrue = useStateStore((state) => state.flagTriggerTrue)
    const addDivisionData = useStateStore((state) => state.addDivisionData)
    const clearDivisionData = useStateStore((state) => state.clearDivisionData)



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
        flagTriggerTrue()
    }

    //function for re organizing table to see pending results first
    const bubbleLikeSort = () => {
        const temparr = []
        for (let i = 0; i < divresultsarr.length; i++) {
            if (divresultsarr[i].poNumber == null) {
                temparr.push(divresultsarr[i])
            }
        }

        console.log(temparr)

    }
    /************************************************************************************/

    const toggleDropdown = () => {
        if (dropdown === true) {
            setdropdown(false)
        } else {
            setdropdown(true)
        }
    }

    const newestSort = async () => {
        const orderDirection = 1
        const data = {
            departmentState,
            orderDirection

        }
        const axrequest = await axios.post('http://localhost:8080/PR/orderByDate', data)
        clearDivisionData()
        addDivisionData([...useStateStore.getState().divresultsarr, ...axrequest.data])
        console.log(axrequest.data)
        setCurrentPage(1)
    }

    const oldestSort = async () => {
        const orderDirection = 2
        const datas = {
            departmentState,
            orderDirection

        }
        const axrequest = await axios.post('http://localhost:8080/PR/orderByDate', datas)
        clearDivisionData()
        addDivisionData([...useStateStore.getState().divresultsarr, ...axrequest.data])
        console.log(axrequest.data)
        setCurrentPage(1)
    }

    return (
        <>
            <div className='center_pagination'>
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
                                <th id='th4' onClick={toggleDropdown}>Date Request{dropdown ?
                                    // <ul className="menu">
                                    //     <li className="menu-item">
                                    //         <button>Newest</button>
                                    //     </li>
                                    //     <li className="menu-item">
                                    //         <button>Oldest</button>
                                    //     </li>
                                    // </ul>
                                    <>
                                        <div style={{ margin: 0, }} onClick={newestSort}>Newest</div>
                                        <div style={{ margin: 0, }} onClick={oldestSort}>Oldest</div>
                                    </>
                                    :
                                    ""
                                }

                                </th>

                                <th id='th5'>Last Updated</th>
                                <th id='th6' onClick={bubbleLikeSort}>Status</th>
                                <th id='th7'>Po Number</th>

                            </tr>

                        </thead>
                        {currentItems.map(i => (

                            //<div key={i.id} className='records_div' onClick={() => handleSubmit(i)}>PR Number:{i.prNumber}</div>
                            < tbody >

                                <tr className='table_content_flex'>
                                    <td headers='th1' onClick={() => handleSubmit(i)}>{i.prNumber}</td>
                                    <td headers='th2'>{i.dep_num}</td>
                                    <td headers='th3'>{i.purchaseRequestAmount} </td>
                                    <td headers='th4'>{i.datePurchaseRequest.slice(0, 10)}</td>
                                    <td headers='th5'>{i.updatedAt.slice(0, 10)}</td>
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
                            <button className='' onClick={() => paginate(currentPage + 1)}>Next</button>
                        )}
                    </div>

                    <div>
                        {triggerState ? <Popup />
                            : ""
                        }
                    </div>
                </div >
            </div>
        </>
    );
};

export default Pagination;