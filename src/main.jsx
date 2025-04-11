import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/HomePage/Home.jsx';
import Resume from './components/Resume/Resume.jsx';
import Qualifications from './components/Qualifications/Qualifications.jsx';
import Contact from './components/Contact/Contact.jsx';
import NotFound from './components/PageNotFound/NotFound.jsx';
import Work from './components/Work/Work.jsx';
import Thanks from './components/Contact/Thankyou.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/qualifications' element={<Qualifications />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/work' element={<Work />} />
        <Route path='/thanks' element={<Thanks />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
