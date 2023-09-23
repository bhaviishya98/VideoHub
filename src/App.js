import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Videos from './components/Videos';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import Upload from './components/Upload';
import Course from './components/course';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/course" element={<Course/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
