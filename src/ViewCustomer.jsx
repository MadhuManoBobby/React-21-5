import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCustomer } from './Slices/Slice' 

export const ViewCustomer = (props) => {
  const customer = useSelector(state => state.customers)
  const dispatch = useDispatch();
    // const {customer} = props
    console.log(customer);
    
    const  removeCustomer = index => {
      dispatch(deleteCustomer(index))
    }
  return (
    <div className='view'>
        <ul style={{listStyle:"none"}}>
            {customer.map((customer,index) => <li key={customer.id}>{customer} <button onClick={() => removeCustomer(index)}>Delete</button></li>)}
        </ul>
    </div>
  )
}
