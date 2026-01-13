import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentsList from './components/StudentsList.jsx';
import FavoriteStudents from './components/FavoriteStudents.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StudentsList />} />
        <Route path='/fav' element={<FavoriteStudents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
