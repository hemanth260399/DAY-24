import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Fsdcourse, { Carrear, Cscourse, Dscourse } from './Course.jsx'
import Menubar from './Coursemenu'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<div className='mainbar' ><Menubar /></div>}>
            <Route path='/' element={<div><Fsdcourse /><Cscourse /><Dscourse /><Carrear /></div>} />
            <Route path="/fsd" element={<Fsdcourse />} />
            <Route path='/ds' element={<Cscourse />} />
            <Route path='/cs' element={<Dscourse />} />
            <Route path='/carrear' element={<Carrear />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
