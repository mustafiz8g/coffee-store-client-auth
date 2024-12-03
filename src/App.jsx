
import { NavLink, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';


function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)
  const links = <>
    <li><NavLink to='/'>Home</NavLink ></li>
    <li><NavLink to='/signin'>Sign In</NavLink ></li>
     <li><NavLink to ='/users'>Users</NavLink></li>
    <li><NavLink to='/addCoffee'>Add Coffee</NavLink ></li>
  </>
  return (
    <>

      <div className='container mx-auto'>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {links}

              </ul>
            </div>
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {links}
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
        <h1 className='text-6xl text-purple-600'>Sexy coffees : {coffees.length}</h1>

        <div className='grid md:grid-cols-2 gap-5 px-6'>
          {
            coffees.map(coffee => <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
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
