import layout from './components/layout';
import './App.scss';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<layout />} />
    </Routes>
    </>

  );
}

export default App;
