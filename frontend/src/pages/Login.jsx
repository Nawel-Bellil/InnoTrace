import React from 'react'
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
  


  
  
  
      <div class="flex  bg-customGrey min-h-screen  justify-start items-center justify-center">

  <div class="lg:w-[1000px]  w-[700px]  pr-10 h-[900px] bg-customYellow rounded-r-[200px] flex justify-center items-center ">
    <div class="bg-white w-[539px] h-[741px] rounded-[30px] ">
    <div className=" min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8  ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <h2 className=" text-center text-[40px]  leading-9 tracking-tight text-black font-poppins ">
          Welcome to <span class="text-customYellow">InnoTrace</span>
          </h2>
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-[40px]  font-bold leading-9 tracking-tight text-customCyan font-poppins ">
            Sign in 
          </h2>
        </div>

        <div className="ml-[-100] mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-3">
            <div>
              <label htmlFor="email" className="block text-[16px] font-medium leading-6 text-gray-900">
              Enter your username or email address
              </label>
              <div className="mt-4">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder='         Username and email adress'    
                  required
                  autoComplete="email"
                  className="block w-[435px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  bg-red focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  class="bg-customCyan2 w-[380px] h-[62px] placeholder-customGrey2 " 
                />
              </div>
            </div>

            <div>
              <div className="flex mt-[35px] items-center justify-between">
                <label htmlFor="password" className="block text-[16] font-medium leading-6 text-gray-900">
                Enter your Password
                </label>
              
              </div>
              <div className="mt-4">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder='           Password'
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  class="bg-customCyan2 w-[380px] h-[62px] placeholder-customGrey2 " 
                />
              </div>
            </div>
            <div className="text-red-700 ml-[270px] text-sm">
                    Forgot password
                  
                </div>
            <Link to='/'>
            <div>
              <button
                type="submit"
                className="w-full justify-center rounded-md bg-customCyan w-[380px] h-[54px] px-3 py-1.5 text-sm mt-[40px] font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  </div>


  <div class=" border">
    
    <img  src='../../public/Frame 1000000828.png' class='max-w-xs h-auto ml-[-50px]'/>
  </div>
</div>

    </>
  )
}
