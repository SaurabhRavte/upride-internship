import { useState} from 'react'
import './App.css'
import SideBar from './components/SideBar'
import TopBar from './components/TopBar'
import MainContent from './components/MainContent'


function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className='flex'>
      <div className=''>
        <SideBar currMobile={mobileMenuOpen} setMobile={setMobileMenuOpen}  />
      </div>
      <div className='w-full flex flex-col h-full'>
        <TopBar setMobile={setMobileMenuOpen} currMobile={mobileMenuOpen} />
        <MainContent />
      </div>
    </div>
  )
}

export default App
