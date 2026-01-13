import { createContext, useState } from "react";

const StudentContext = createContext();

function StudentProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  function addStudents(student) {
    const exists = favourites.some((fav) => fav.id === student.id);
    if (!exists) {
      setFavourites([...favourites, student]);
    }
  }

  function delStudents(id) {
    setFavourites(favourites.filter((student) => student.id !== id));
  }

  return (
    <StudentContext.Provider
      value={{ favourites, addStudents, delStudents }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export { StudentContext, StudentProvider };

