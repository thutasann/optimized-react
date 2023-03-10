import SideBar from './components/sidebar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import UseMemo from './pages/use-memo'

function App() {
  return (
    <div>
      <SideBar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/use-memo' element={<UseMemo />} />
        </Routes>
      </SideBar>
    </div>
  )
}

export default App
