import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Basic from './pages/Basics/Basic';
import Introduction from "./pages/Introduction/Introduction"
function App() {
  return (
    <div className="App">
      <Nav />
      <main className='main'>
        <Routes>
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/basic" element={<Basic />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
