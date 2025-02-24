import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Users = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)


    const handleDelete = id => {
        console.log(id);

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
            fetch(`http://localhost:4100/users/${id}`, {
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
                const remaining = users.filter(use => use._id !== id);
                setUsers(remaining);
          }
         
        })
      }
    });
  }

    return (
        <div>
            <h2 className="text-3xl">Users: {users.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>last Login</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map( user => 
                                <tr key={user._id}>
                            <th></th>
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                            <td>{user?.createdAt}</td>
                            <td>{user?.lastSignInTime}</td>

                            <td>
                                <button onClick={() => handleDelete(user._id)} className="btn"> X</button>
                                <button className="btn"> e</button>
                            </td>
                        </tr>
                            )
                        }
                     
                       
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;