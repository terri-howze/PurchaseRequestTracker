import React, { useState } from 'react';
import Popup from './Popup';
import '../css/Pagination.css'

const Pagination = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index of the first and last item to be displayed on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
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
      {/* Render the current page's items */}
      {currentItems.map(i => (
        //<div key={i.id} className='records_div' onClick={() => handleSubmit(i)}>PR Number:{i.prNumber}</div>
        <table>
            <tr>
                <th>PR Number</th>
                <th>Department</th>
                <th>PR Amount</th>
                <th>Date Created</th>
                <th>Laste Updated</th>
                <th>Status</th>
            </tr>
        </table>
      ))}

      {/* Pagination buttons */}
      <div>
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