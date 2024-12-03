
import { AiFillEye, AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const {_id, name, chef, supplier, taste, category, details, photo} = coffee;

    const handleDelete = _id => {
          console.log(_id);

          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:4100/coffee/${_id}`, {
                 method: 'DELETE'
               
           
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0){
                Swal.fire({
                    title: "Deleted!",
                    text: "THis item has been deleted",
                    icon: "success"
                  })
                  const remaining = coffees.filter(cof => cof._id !== _id);
                  setCoffees(remaining);
            }
           
          })
        }
      });
    }

    return (
        <div className="card bg-base-100 shadow-xl flex flex-row items-center p-5 rounded-lg">
        {/* Image */}
        <div className="w-1/3">
          <img
            src={photo} // Replace with your coffee cup image URL
            alt="Coffee Cup"
            className="rounded-md"
          />
        </div>
  
        {/* Details */}
        <div className="w-2/3 pl-5">
          <h2 className="font-bold text-lg">
            Name: <span className="text-gray-600">{name}</span>
          </h2>
          <p className="text-sm font-medium mt-2">
            Chef: <span className="text-gray-600">{chef}</span>
          </p>
          <p className="text-sm font-medium mt-2">
            Price: <span className="text-gray-600">{supplier}</span>
          </p>
          </div>
  
          {/* Action Buttons */}
          <div className="flex flex-col gap-3  mt-4 space-x-2">
            <button className="btn btn-outline btn-info btn-sm w-10 relative left-2 items-center ">
              <AiFillEye />
            </button>
           <Link to={`updateCoffee/${_id}`}> <button className="btn btn-outline btn-warning btn-sm flex items-center ">
              <AiFillEdit />
            </button></Link>
            <button 
            onClick={() => handleDelete(_id)}
            className="btn btn-outline btn-error btn-sm flex items-center ">
              <AiFillDelete />
            </button>
          </div>
        
      </div>
    );
};

export default CoffeeCard;


// https://ibb.co.com/pPBddCy
// https://ibb.co.com/YyVW7KX
// https://ibb.co.com/7V5DCWN
// https://ibb.co.com/850WLNc
// https://ibb.co.com/1RH6WK8
// https://ibb.co.com/FV7HL7d