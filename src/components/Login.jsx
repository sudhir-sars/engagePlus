import React from 'react'
import styles from "./../index.css"
import { useNavigate ,Link} from 'react-router-dom';

import { useState ,useEffect,useContext} from 'react'
import serviceContext from '../context/serviceContext';

const Login = () => {  
    const navigate = useNavigate();
    const context = useContext(serviceContext);
    const { setusername,setemail } = context;
    const [localemail, setlocalemail] = useState();
    
    const [password, setpassword] = useState();
    
    const handleLogin = async () => {
      const postData = { email: localemail, password: password };
      console.log(postData);
      
        try {
          const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData)
          });
          
          const data = await response.json();
          
          if(data.success){
            setemail(localemail);
            setusername(data.username)
          
            navigate('/');
          }
          // You can handle the response data here as needed
        } catch (error) {
          console.error('Error:', error);
          // Handle any errors that occurred during the fetch
        }
      };
      
      // Call the handleLogin function to initiate the Login process
      

    
  return (
    <div className=''>
      <section className= "">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-[#f3f4f6] border-gray-200">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Sign Up for your account
              </h1>
              <div class="space-y-4 md:space-y-6" action="#">
                  
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                      <input onChange={(e)=>{setlocalemail(e.target.value)}} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none " placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                      <input onChange={(e)=>{setpassword(e.target.value)}} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none" required=""/>
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-black ">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" class="w-full text-black bg-white hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center " onClick={handleLogin}>Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Not yet registered? <Link to={'/signup'} class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</Link>
                  </p>
              </div>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default Login;
