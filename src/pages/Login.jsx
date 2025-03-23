import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

function Login() { const signIn = () => { signInWithPopup(auth, provider) .then(result => { console.log("User:", result.user); }) .catch(error => alert(error.message)); };

return ( <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-400 to-blue-500"> <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-sm w-full"> <h1 className="text-2xl font-bold mb-4">Wander Tribe</h1> <p className="mb-6 text-gray-500">Connect with your travel tribe</p> <button onClick={signIn} className="bg-blue-600 text-white px-4 py-2 rounded-xl w-full hover:bg-blue-700" > Sign in with Google </button> </div> </div> ); }

export default Login;
