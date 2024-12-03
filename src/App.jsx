
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';


function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)
  return (
    <>
     
     <div className='container mx-auto'>
     <h1 className='text-6xl text-purple-600'>Sexy coffees : {coffees.length}</h1>
    
    <div className='grid md:grid-cols-2 gap-5 px-6'>
    {
      coffees.map(coffee => <CoffeeCard 
        key={coffee._id}
        coffee ={coffee}
        coffees = {coffees}
        setCoffees ={setCoffees}
         ></CoffeeCard>)
    }
   
    </div>
     </div>
    </>
  )
}

export default App




// import { useLoaderData } from 'react-router-dom';
// import './App.css';
// import CoffeeCard from './components/CoffeeCard';
// import { useState } from 'react';

// function App() {
//   const loadedCoffees = useLoaderData(); // Loaded coffees from the server
//   const [coffees, setCoffees] = useState(loadedCoffees); // State to manage coffees

//   return (
//     <>
//       <div className="container mx-auto">
//         <h1 className="text-6xl text-purple-600">
//           Coffees: {coffees.length} {/* Use the updated state for count */}
//         </h1>

//         <div className="grid md:grid-cols-2 gap-5 px-6">
//           {coffees.map((coffee) => (
//             <CoffeeCard
//               key={coffee._id}
//               coffee={coffee}
//               coffees={coffees} // Pass the state
//               setCoffees={setCoffees} // Pass the state updater
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
