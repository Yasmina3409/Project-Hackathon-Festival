import {Link} from 'react-router-dom'

export function Footer() {
   return (
      <footer className=" m-4 w-screen rounded-lg bg-base-200 shadow">
         <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
               <p className="mb-4 flex items-center sm:mb-0">
                  <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white">
                     Mon Festoche
                  </span>
               </p>
               <ul className="mb-6 flex flex-wrap items-center space-x-4 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0 md:space-x-6">
                  <li>
                     <p className="hover:cursor-not-allowed hover:underline">Privacy Policy</p>
                  </li>
                  <li>
                     <p className="hover:cursor-not-allowed  hover:underline">Licensing</p>
                  </li>
                  <li>
                     <p className="hover:cursor-not-allowed hover:underline">Contact</p>
                  </li>
                  <li>
                     <Link
                        to={'/login'}
                        className="hover:pointer hover:underline">
                        Login
                     </Link>
                  </li>
               </ul>
            </div>
            <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
            <p className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
               © 2023 <span className="hover:underline">Hackathon™</span>
            </p>
            <p className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
               Team Roberta Williams All Rights Reserved.
            </p>
         </div>
      </footer>
   )
}