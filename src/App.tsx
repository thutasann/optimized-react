import SideBar from './components/sidebar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/home'
import ReactMemo from './pages/react-memo'
import UseMemo from './pages/use-memo'
import { GitHubLink } from './utils/static-data'
import { BsGithub } from 'react-icons/bs'

function App() {
  const route = useLocation().pathname
  return (
    <div>
      <SideBar>
        <div className='mb-7 mr-2 fixed z-[999] right-0'>
          {route !== '/' && (
            <a
              href={`${GitHubLink}${route}.tsx`}
              target='_blank'
              rel='noreferrer'
              className='bg-gray-700 rounded-md px-3 py-2 hover:bg-gray-600 transition-all duration-300 ease-in-out text-sm font-[600] flex items-center gap-1'
            >
              View Code on GitHub <BsGithub />
            </a>
          )}
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/react-memo' element={<ReactMemo />} />
          <Route path='/use-memo' element={<UseMemo />} />
        </Routes>
      </SideBar>
    </div>
  )
}

export default App
