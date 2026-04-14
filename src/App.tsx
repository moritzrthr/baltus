import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Strategy from './pages/Strategy';

function App() {
  return (
    <Router>
      <div className="min-h-[100dvh] flex flex-col font-sans">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/strategie" element={<Strategy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
