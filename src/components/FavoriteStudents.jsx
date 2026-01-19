import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import { Link } from "react-router-dom";

function FavouriteStudents() {
  const { favourites, delStudents } = useContext(StudentContext);

  return (
    <div className="f-container">
      <div>

      
      <h1>Favourite Students</h1>
      <Link to="/">Back to Student List</Link>

      {favourites.length === 0 ? (
        <p>No favourite students added yet</p>
      ) : (
        favourites.map((student) => (
          <div key={student.id}>
            <p>{student.name} - {student.roll}</p>
            <button className="rbtn" onClick={() => delStudents(student.id)}>Remove</button>
          </div>
        ))
      )}
      </div>
    </div>
  );
}

export default FavouriteStudents;
