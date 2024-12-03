import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";




const SignUp = () => {
    
    const {createUser} = useContext(AuthContext)
  

    const handleSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.target)
        const name = form.get('name');
      
        const email = form.get('email')
        const photo = form.get('photo')
        const password = form.get('password')
        // console.log(name,email,photo,password)

        createUser(email, password)
        .then(result => {
            console.log('user created at firebase',result.user);
            const createdAt = result.user?.metadata?.creationTime
            const newUser = {name, email, photo, createdAt}

            //save new user info in the database 
            fetch('http://localhost:4100/users', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log('user created to db', data);
                if(data.insertedId){
                    Swal.fire({
                        title: "successful",
                        text: "That thing is still around?",
                        icon: "question"
                      });
                }
            })
        })
        .catch( error => {
            console.log(error)
        })

    }
    

    return (
        <div className="container mx-auto *:space-y-4 border p-9 rounded-lg bg-white w-96">

            <h2 className="font-semibold text-lg text-center">Sign Up Your Account</h2>
            <form onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center gap-2">
             Name
                <input 
                name ="name" 
                type="text" 
                className="grow" 
                         placeholder="daisy@site.com" />
            </label>
         
             <label className="input input-bordered flex items-center gap-2">
                Photo url
                <input 
                 name="photo"
                 type="text"
                 className="grow"
                 placeholder="@site.com" />
            </label>
             <label className="input input-bordered flex items-center gap-2">
                Email
                <input 
                name="email" 
                type="email" 
                className="grow"
                 placeholder="daisy@site.com" />
            </label>
            <div className="relative">
           <label className="input input-bordered flex items-center gap-2">
                Password
                <input 
                name="password" 
                type="password"

                className="grow" 
                placeholder="ILoveYou" />
                
             
            </label>
         
              
       
           </div>
           
          

            <button className="btn w-full btn-active btn-neutral">Register</button> 
            </form>

            <p><small>Already Have an account? <Link className="text-red-600" to='/signin'>Sign In </Link></small></p>

        </div>
    );
};

export default SignUp;