import React from 'react'
import styles from "./../index.css"
import { useNavigate ,Link} from 'react-router-dom';
import CryptoJS from 'crypto-js';

import { useState ,useEffect} from 'react'

const SignUp = () => {  
    const AES_KEY = process.env.REACT_APP_AES_KEY;
    const navigate = useNavigate();
    const [email, setemail] = useState();
    const [name, setname] = useState();
    const [password, setpassword] = useState();
    
    const handleSignup = async () => {
      console.log("here")
        const postData = { name: name,email: email, password: password };
      
        try {
          const response = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData)
          });
      
          const data = await response.json();
          if(data.sucess){

            navigate('/login');
          }
          // You can handle the response data here as needed
        } catch (error) {
          console.error('Error:', error);
          // Handle any errors that occurred during the fetch
        }
      };
      
      // Call the handleSignup function to initiate the signup process
      

    
  return (
    <div className=''>
      <section className= "">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div class="w-[30vw] bg-white p-6  h-auto  bg-opacity-15 shadow-2xl shadow-t-2xl shadow-r-2xl shadow-b-2xl shadow-l-2xl shadow-gray-400 rounded-lg border border-opacity-20 border-white">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-400 md:text-2xl ">
                  Sign Up for your account
              </h1>
              <div class="space-y-4 md:space-y-6" action="#">
                  {/* <div>
                      
                      <input onChange={(e)=>{setname(e.target.value)}} type="name" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none " placeholder="Your Name" required=""/>
                  </div> */}
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-white ">Email</label>
                      <input onChange={(e)=>{setemail(e.target.value)}} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none " placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-white ">Password</label>
                      <input onChange={(e)=>{setpassword(e.target.value)}} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none" required=""/>
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-400 ">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button  class="w-full text-black bg-white hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center " onClick={handleSignup}>Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account <Link to={'/login'} class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</Link>
                  </p>
              </div>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default SignUp;
