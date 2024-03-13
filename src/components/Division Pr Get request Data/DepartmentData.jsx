import React from 'react'
import { useStateStore } from '../../Store'

export default function departmentData() {
    const departmentState = useStateStore((state) => state.division)
  return (
    <div>
      State is working for {departmentState}
    </div>
  )
}
