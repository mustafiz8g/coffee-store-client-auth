import { NavLink, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";




const UpdateCoffee = () => {
  const links = <>
  <li><NavLink to='/'>Home</NavLink ></li>
   
   <li><NavLink to='/addCoffee'>Add Coffee</NavLink ></li>
</>

    const coffee = useLoaderData();
    const {_id, name, chef, supplier, taste, category, details, photo} = coffee;
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = {name,chef, supplier, taste, category, details, photo}
        console.log(updatedCoffee)

        // send data to the server 
        fetch(`http://localhost:4100/coffee/${_id}`,{
            method: "PUT",
           headers: {
             'content-type' : 'application/json'
           },
           body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }
    return (
        <div>
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


           
            <div className="bg-gray-50 min-h-screen flex justify-center items-center px-4">
      <div className="bg-[#F4F3F0] p-6 md:p-8 rounded  w-full max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-800">Update Coffee : {name}</h1>
        <p className="text-center text-gray-500 mb-6 text-sm md:text-base">
          It is a long established fact that a reader will be distracted by the readable content
          of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using Content here.
        </p>
        <form  onSubmit={handleUpdate} >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Enter coffee name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700">Chef</label>
              <input
                type="text"
                name="chef"
                defaultValue={chef}
                placeholder="Enter coffee chef"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700">Supplier</label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="Enter coffee supplier"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700">Taste</label>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="Enter coffee taste"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700">Category</label>
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Enter coffee category"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700">Details</label>
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Enter coffee details"
                className="input input-bordered w-full"
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-gray-700">Photo</label>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="Enter photo URL"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <input className="btn btn-primary w-full mt-6 bg-gray-800 hover:bg-gray-700 text-white" type="submit" value="Update" />
         
        </form>
      </div>
    </div>
        </div>
    );
};

export default UpdateCoffee;