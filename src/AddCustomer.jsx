import React, { useEffect, useRef, useState } from 'react'
import { ViewCustomer } from './ViewCustomer'
import { addCustomer as addCustomerAction } from './Slices/Slice'
import { useDispatch } from 'react-redux'

export const AddCustomer = () => {
    const inputFocus = useRef(null)
    const [input,setInput] = useState("")
    const [customer,setCustomer] = useState([]) 

    const dispatch = useDispatch();

    useEffect(() => {
        inputFocus.current.focus();
    })
    const addCustomer = () => {
        if(input){
            console.log(input);
            dispatch(addCustomerAction(input))
            // setCustomer(preState => [...preState,input])
            console.log(customer);
            setInput("") 
        }
    }
  return (
    <div>
        <input type="text" ref={inputFocus} value={input} onChange={e => setInput(e.target.value)}/>
        <button onClick={addCustomer}>Add</button>
        {/* <ViewCustomer customer={customer}/> */}
    </div>
  )
}
