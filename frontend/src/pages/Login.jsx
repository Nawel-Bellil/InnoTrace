import React, { useState } from 'react';
import DesktopRobot from '/desktop-image.png';
import MobileRobot from '/mobile-image.png';

export default function Login({ onLogin, loginFailed }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    onLogin(email, password); // Call the login function passed from App
  };

  return (
    <div className="flex bg-customGrey min-h-screen">
      {/* Yellow background div taking the left half of the screen */}
      <div className="lg:w-1/2 w-full lg:h-screen h-auto bg-customYellow lg:rounded-r-[100px] flex flex-col justify-center items-center">
        {/* Left section with form */}
        <div className="bg-white lg:w-[400px] w-full h-auto rounded-[20px] p-6 mx-auto flex flex-col justify-center">
          <div className="min-h-full flex flex-col justify-center">

            {/* Welcome Text */}
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="text-center text-[28px] lg:text-[32px] leading-9 tracking-tight text-black font-poppins">
                Welcome to <span className="text-customYellow">InnoTrace</span>
              </h2>
            </div>

            {/* Mobile Robot Image */}
            <div className="lg:hidden flex justify-center items-center mt-4">
              <img
                src={MobileRobot}
                alt="Mobile Robot"
                className="max-w-[130px] h-auto"
              />
            </div>

            {/* Sign In Heading */}
            <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-4 lg:mt-6">
              <h2 className="text-center text-[28px] lg:text-[32px] font-bold leading-9 tracking-tight text-customCyan font-poppins">
                Sign in
              </h2>
            </div>

            {/* Form */}
            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Username/Email Input */}
                <div>
                  <label htmlFor="email" className="block text-[14px] font-medium leading-6 text-gray-900">
                    Enter your username or email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder=" Username or email address"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} // Update email state
                      className="bg-customCyan2 w-full lg:w-[300px] h-[45px] placeholder-customGrey2 border-0 text-gray-900 shadow-sm"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="mt-4">
                  <label htmlFor="password" className="block text-[14px] font-medium leading-6 text-gray-900">
                    Enter your Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder=" Password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} // Update password state
                      className="bg-customCyan2 w-full lg:w-[300px] h-[45px] placeholder-customGrey2 border-0 text-gray-900 shadow-sm"
                    />
                  </div>
                </div>

                {/* Forgot Password */}
                <div className="text-red-700 text-right text-sm mt-2">
                  Forgot password
                </div>

                {/* Sign In Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full lg:w-[300px] h-[45px] rounded-md bg-customCyan text-white font-semibold mt-6"
                  >
                    Sign in
                  </button>
                </div>

                {/* Popup for Login Failure */}
                {loginFailed && (
                  <div className="mt-4 text-red-600 text-center">
                    <p>Log in failed. Please check your credentials.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Right section with image for desktop */}
      <div className="hidden lg:flex justify-center items-center lg:w-1/2 mt-10">
        <img
          src={DesktopRobot}
          alt="Desktop Robot"
          className="max-w-xs h-auto ml-[-50px]" // Adjust the margin to center the image
        />
      </div>
    </div>
  );
}
