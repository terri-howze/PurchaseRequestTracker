import React from 'react'
import '../css/Table.css'
import Pagination from './Pagination'
import { useStateStore } from '../Store'

export default function Table() {
    const divresultsarr = useStateStore((state) => state.divresultsarr)
    const pageLimit = 4
    return (
        <>
            <div className='box_div'>
                <table>

                </table>
                <Pagination
                    data={divresultsarr}
                    itemsPerPage={pageLimit}
                />
            </div>
        </>
    )
}
