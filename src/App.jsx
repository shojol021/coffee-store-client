import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './assets/components/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <>
      <h1 className='text-6xl text-center'>Coffee Store</h1>
      <div className='grid grid-cols-3 mx-10 mb-3'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees = {setCoffees}>
          </CoffeeCard>)
        }
      </div>
      <div className='text-center'>
        <Link to='/add-coffee'><button className='btn'>Add Coffee</button></Link>
      </div>
    </>
  )
}

export default App
