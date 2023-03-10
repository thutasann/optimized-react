import SideBar from './components/sidebar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/home'
import UseMemo from './pages/use-memo'
import { GitHubLink } from './utils/static-data'
import UseCallBack from './pages/use-callback'

function App() {
  const route = useLocation().pathname
  return (
    <div>
      <SideBar>
        <div className='mb-7 float-right mr-2'>
          {route !== '/' && (
            <a
              href={`${GitHubLink}/${route}.tsx`}
              target='_blank'
              rel='noreferrer'
              className='bg-gray-700 rounded-md px-3 py-2 hover:bg-gray-600 transition-all duration-300 ease-in-out text-sm font-[600]'
            >
              View Code 👉
            </a>
          )}
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/use-memo' element={<UseMemo />} />
          <Route path='/use-callback' element={<UseCallBack />} />
        </Routes>
      </SideBar>
    </div>
  )
}

export default App
