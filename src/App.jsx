import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AddCustomer } from './AddCustomer'
import { Provider } from 'react-redux'
import { Store } from './Store'
import { ViewCustomer } from './ViewCustomer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
    <Provider store={Store}>
      <AddCustomer/>
      <ViewCustomer/>
     </Provider>
    </div>
  )
}

export default App
