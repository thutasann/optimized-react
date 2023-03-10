/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactNode, useLayoutEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { SideBarData } from '../utils/sidebar'

interface Props {
  children: ReactNode
}

const SideBar: React.FC<Props> = ({ children }) => {
  const currentRoute = useLocation()
  const [open, setOpen] = useState<boolean>(true)
  return (
    <>
      <button
        onClick={() => setOpen(prev => !prev)}
        data-drawer-target='default-sidebar'
        data-drawer-toggle='default-sidebar'
        aria-controls='default-sidebar'
        type='button'
        className='inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
      >
        <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
          <path
            clipRule='evenodd'
            fillRule='evenodd'
            d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
          ></path>
        </svg>
      </button>

      {open && (
        <aside
          id='default-sidebar'
          className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform  sm:translate-x-0`}
          aria-label='Sidebar'
        >
          <div className='h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800'>
            <ul className='space-y-2'>
              {SideBarData.map(sidebar => (
                <li key={sidebar.link}>
                  <Link
                    to={sidebar.link}
                    className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-700 ease-in-out ${
                      sidebar.link === currentRoute.pathname && 'bg-gray-700'
                    }`}
                  >
                    {sidebar.isIndex ? (
                      <svg
                        aria-hidden='true'
                        className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z'></path>
                        <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z'></path>
                      </svg>
                    ) : (
                      <svg
                        className='w-6 h-6'
                        aria-hidden='true'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          clipRule='evenodd'
                          fillRule='evenodd'
                          d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
                        ></path>
                      </svg>
                    )}
                    <span className={`ml-3 font-bold ${sidebar.isIndex && 'uppercase'}`}>{sidebar.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      )}

      <div className='p-4 sm:ml-64 overflow-x-scroll'>{children}</div>
    </>
  )
}

export default SideBar
