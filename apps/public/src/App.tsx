import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import PropertyPage from './pages/PropertyPage';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/property/:id" element={<PropertyPage />} />
    </Routes>
  );
}