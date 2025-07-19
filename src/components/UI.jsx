import React from "react";

export const UI = () => {
   return (
      <>
         <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none p-6 font-[Inter]">
            <div className="relative flex flex-col w-full h-full overflow-hidden text-white border border-gray-700 rounded-lg shadow-lg md:flex-row-reverse">
               {/* Left section (main content) */}
               <div className="flex flex-col items-end justify-start flex-1 p-8 space-y-4 text-left md:p-12 lg:p-16">
                  {/* Train Icon */}
                  <div className="flex justify-end w-full">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-12 h-12 text-purple-400 md:w-16 md:h-16"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M8 19c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-1H8v1zm8-12V5a3 3 0 00-6 0v2H6c-.6 0-1 .4-1 1v9c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-9c0-.6-.4-1-1-1h-2zM10 5a1 1 0 012 0v2h-2V5z"
                        />
                     </svg>
                  </div>

                  <h2 className="mt-4 mb-2 text-xl font-semibold text-purple-400 uppercase md:text-2xl">
                     Welcome to TrainEase
                  </h2>
                  <h1 className="mb-4 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                     Book Your Train Journey Instantly
                  </h1>
                  <p className="max-w-md mb-4 text-lg md:text-xl">
                     Plan your travel with real-time train schedules, seat availability, and fare
                     details across India.
                  </p>
                  <p className="max-w-md mb-4 text-lg md:text-xl">
                     Choose from Sleeper, AC, or General classes and get your tickets confirmed
                     securely within minutes.
                  </p>
                  <p className="max-w-md mb-8 text-lg md:text-xl">
                     We also provide platform information, live train running status, and
                     personalized travel suggestions for a seamless experience.
                  </p>
               </div>

               {/* Right section (quick actions and info) */}
               <div className="flex flex-col items-start justify-between p-8 space-y-8 md:p-12 lg:p-16">
                  {/* View Trains Icon */}
                  <div className="flex items-center space-x-2 text-purple-400 cursor-pointer">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 md:w-8 md:h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                     </svg>
                     <span className="text-lg md:text-xl">View Trains</span>
                  </div>

                  {/* Services highlights */}
                  <div>
                     <h3 className="mb-2 text-xl font-semibold">Our Services</h3>
                     <ul className="space-y-1 text-lg">
                        <li>• Instant ticket booking</li>
                        <li>• Live train running status</li>
                        <li>• Platform & coach position info</li>
                        <li>• Travel schedule planner</li>
                     </ul>
                  </div>

                  {/* Website link */}
                  <p className="text-lg md:text-xl">www.trainease.com</p>
               </div>

               {/* Bottom Right Button */}
               <div className="absolute bottom-8 right-8">
                  <button className="px-6 py-3 text-lg font-semibold text-white bg-purple-500 rounded shadow pointer-events-auto hover:bg-purple-600 md:text-xl">
                     Book Now
                  </button>
               </div>
            </div>
         </div>
      </>
   );
};
