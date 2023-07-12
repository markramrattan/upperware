
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpperwareLandingPage from './UpperwareLandingPage';
import SkylabLandingPage from './skylab/SkylabLandingPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<UpperwareLandingPage/>} />
      <Route exact path="/skylab" element={<SkylabLandingPage/>} />
  
      </Routes>
  </BrowserRouter>
  );
}

export default App;
