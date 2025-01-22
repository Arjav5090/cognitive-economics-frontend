import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ResourcesPage from './pages/Resources';
import Research from './pages/Research';
import ContactForm from './pages/Contact';



const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/Cognitive-Economics-Frontend/" element={<Home />} />
          <Route path="/Cognitive-Economics-Frontend/resources/*" element={<ResourcesPage/>}/>
          <Route path="/Cognitive-Economics-Frontend/research/*" element={<Research />} />
          <Route path="/Cognitive-Economics-Frontend/contact" element={<ContactForm />} />
          {/* Add more routes as needed */}
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
