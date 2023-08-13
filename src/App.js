import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import Experience from './pages/Experience';
import Signin from './pages/signin';
import ViewerCalendar from './pages/ViewerCalendar';
import AdminCalendar from './pages/AdminCalendar';
import { EventsProvider } from './pages/EventsContext';

import AdminDocumentPage from './pages/docus/AdminDocumentPage';
import ViewerDocumentPage from './pages/docus/ViewerDocumentPage';
function App() {
	const events = [
		{
		  id: 1,
		  title: 'Event 1',
		  type: 'Meeting',
		  place: 'Center',
		  time: '10:00 AM',
		  start: new Date(),
		  end: new Date(),
		  color: '#FF5733',
		  private: false,
		},
		// ... more events
	  ];
	return (
		<Router>
			      <EventsProvider>

            <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'></div>
			<Navbar />
			<Routes>
				<Route exact path='/' exact element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/blogs' element={<Blogs />} />
				<Route path='/sign-up' element={<SignUp />} />
				<Route path='/Signin' element={<Signin />} />
				<Route path='/AdminDocumentPage' element={<AdminDocumentPage />} />
				<Route path='/ViewerDocumentPage' element={<ViewerDocumentPage />} />
				<Route path='/ViewerCalendar' element={      <ViewerCalendar events={events} />
} />
				<Route path='/AdminCalendar' element={<AdminCalendar />} />

			</Routes>
      </div>
				</EventsProvider>
		</Router>
	);
}

export default App;
