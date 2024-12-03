// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../providers/AuthProvider";


// const SignIn = () => {
//     const {signInUser} = useContext(AuthContext);

//     const handleSignIn = e => {
//         e.preventDefault();
//         const email = e.target.email.value;
//         const password = e.target.password.value;
//         console.log(email, password)
       
//         signInUser(email, password);
//         .then(result => {
//             console.log(result.user)
//         })
//         .catch(error => {
//             console.log('error is' , error)
//         });

      

//     }
//     return (
//         <div className="container mx-auto *:space-y-4 border p-9 rounded-lg bg-white w-96">

//         <h2 className="font-semibold text-lg text-center">Sign Up Your Account</h2>
//         <form onSubmit={handleSignIn}>
        
     
//          <label className="input input-bordered flex items-center gap-2">
//             Email
//             <input 
//             name="email" 
//             type="email" 
//             className="grow"
//              placeholder="daisy@site.com" />
//         </label>
//         <div className="relative">
//        <label className="input input-bordered flex items-center gap-2">
//             Password
//             <input 
//             name="password" 
          
//             className="grow" 
//             placeholder="ILoveYou" />
            
         
//         </label>
     
          
   
//        </div>
       
      

//         <button className="btn w-full btn-active btn-neutral">Sign In</button> 
//         </form>

//         <p><small>Already Have an account? <Link className="text-red-600" to='/signup'>Sign Up </Link></small></p>

//     </div>
//     );
// };

// export default SignIn;






import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const SignIn = () => {
    const { signInUser } = useContext(AuthContext);

    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (!email || !password) {
            console.log("Email and password are required.");
            return;
        }

        console.log(email, password);

        signInUser(email, password)
            .then((result) => {
                console.log("User signed in:", result.user);
                
                // update last login 
                const lastSignInTime  = result?.user?.metadata?.lastSignInTime;
                const loginInfo = {email, lastSignInTime};

                fetch(`http://localhost:4100/users`,{
                    method: 'PATCH',
                    headers : {
                     'content-type' : 'application/json'
                    },
                    body: JSON.stringify(loginInfo)
                })
                .then(res => res.json())
                .then(data => {
                    console.log('sign in info update in db ', data)
                })

            })
            .catch((error) => {
                console.error("Error signing in:", error);
            });
    };

    return (
        <div className="container mx-auto space-y-4 border p-9 rounded-lg bg-white w-96">
            <h2 className="font-semibold text-lg text-center">Sign In to Your Account</h2>
            <form onSubmit={handleSignIn}>
                <label className="input input-bordered flex items-center gap-2">
                    Email
                    <input
                        name="email"
                        type="email"
                        className="grow"
                        placeholder="daisy@site.com"
                    />
                </label>
                <div className="relative">
                    <label className="input input-bordered flex items-center gap-2">
                        Password
                        <input
                            name="password"
                            type="password"
                            className="grow"
                            placeholder="ILoveYou"
                        />
                    </label>
                </div>
                <button className="btn w-full btn-active btn-neutral">Sign In</button>
            </form>
            <p>
                <small>
                    Dont have an account?{" "}
                    <Link className="text-red-600" to="/signup">
                        Sign Up
                    </Link>
                </small>
            </p>
        </div>
    );
};

export default SignIn;
