import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function FavouriteStudents() {
  const { favourites, delStudents } = useContext(StudentContext);

  return (
    <div>
      <h1>Favourite Students</h1>

      {favourites.length === 0 ? (
        <p>No favourite students added yet</p>
      ) : (
        favourites.map((student) => (
          <div key={student.id}>
            <p>
              {student.name} - {student.roll}
            </p>

            <button onClick={() => delStudents(student.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default FavouriteStudents;
